const { where, Transaction } = require('sequelize');
const models = require('../database/models/index');
const handleBcrypt = require('../utils/handleBcrypt');
const roles = require('../enums/Roles');
const sequelize = models.sequelize;
const controller = {}

const register = async (name, lastName, email, password, nameRol) => {
    const transaction = await sequelize.transaction();
    try {
        if (!name || !lastName || !email || !password) {
            throw new Error("One of the fields is not entered");
        }

        const existingUser = await models.User.findOne({ where: { email } });
        if (existingUser) {
            throw new Error("Existing user");
        }
        
        const role = await models.Roles.findOne({ where: { name: nameRol } });
        if (!role) {
            throw new Error("Invalid role");
        }

        const usr = await models.User.create(
            {
                role_id: role.id,
                name: name,
                lastname: lastName,
                email: email,
            },
            { transaction }
        );
        
        const hashPassword = await handleBcrypt.encrypt(password);

        await models.Authentication.create(
            {
                password: hashPassword,
                usuario_id: usr.id,
            },
            { transaction }
        );

        await transaction.commit();
        return { success: true, message: "User created successfully" };

    } catch (error) {
        if (transaction) await transaction.rollback();
        return { success: false, message: "User was not created", error: error.message };
    }
};


controller.registerUser = async (req, res) => {
    const { name, lastName, email, password} = req.body;
    const result = await register(name, lastName, email, password, roles.Roles.USER);
    if (result.success) {
        res.redirect('/auth/login');
    } else {
        res.status(400).json({ msg: result.message});
    }
}

controller.registerOperator = async (req, res) => {
    const { name, lastName, email, password} = req.body;

    const result = await register(name, lastName, email, password, roles.Roles.OPERATOR);
    if (result.success) {
        res.redirect('/auth/login');
    } else {
        res.status(400).json({ msg: result.message });
    }
}

module.exports =  controller;
