const { where, Transaction } = require('sequelize');
const models = require('../database/models/index');
const handleBcrypt = require('../utils/handleBcrypt');
const sequelize = models.sequelize;
const controller = {}

controller.register = async (req, res) => {
    const transaction = await sequelize.transaction();
    const {name, lastname, email, password} = req.body;

    if(!name || !lastname || !email || !password){
        return res.status(400).json({error: "One of the fields is not entered"})
    }

    try {
        const existingUser = await models.User.findOne({where:{email : email}});
        if(existingUser){
            return res.status(400).json({error: "Existing user"})
        }

        const usr = await models.User.create({
                name: name,
                lastname: lastname,
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

        res.status(200).json({
            succes: true,
            data: {
                id: usr.id
            },
        })
        
    } catch (error) {

        await transaction.rollback();
        res.status(500).json({
            succes: false,
            data: {
                message: "User was not created", 
                error: error.message
            },
        })
    }

}

module.exports =  controller;
