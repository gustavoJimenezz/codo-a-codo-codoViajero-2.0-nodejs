const { where, Transaction } = require('sequelize');
const models = require('../database/models/index');
const handleBcrypt = require('../utils/handleBcrypt');
const roles = require('../enums/Roles');
const sequelize = models.sequelize;
const controller = {}

// const register = async () => {
    
// }

controller.registerUser = async (req, res) => {
    try {
        const transaction = await sequelize.transaction();
        const {name, lastName, email, password} = req.body;

        if(!name || !lastName || !email || !password){
            return res.status(400).json({error: "One of the fields is not entered"})
        }

    
        const existingUser = await models.User.findOne({where:{email : email}});
        if(existingUser){
            return res.status(400).json({error: "Existing user"})
        }

        role_id_user = await models.User.findOne({where: {name : "User"}})

        const usr = await models.User.create({
                role_id: role_id_user,    
                name: name,
                lastname: lastName,
                email: email,
            },
            {transaction},
        );

        const hashPassword = await handleBcrypt.encrypt(password);
        
        const auth =  await models.Authentication.create({
            password: hashPassword,
            usuario_id: usr.id
        },{
            transaction
        })

        await transaction.commit();
        res.redirect('/auth/login');

    } catch (error) {

        await transaction.rollback();
        res.status(500).json({
            success: false,
            data: {
                message: "User was not created", 
                error: error.message
            },
        })
    }

}

module.exports =  controller;
