const models = require('../database/models/index');
const handleBcrypt = require('../utils/handleBcrypt');
const roles = require('../enums/Roles');
const sequelize = models.sequelize;
const controller = {}

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
