const { where, Transaction } = require('sequelize');
const models = require('../database/models/index');
const handleBcrypt = require('../utils/handleBcrypt');
const roles = require('../enums/Roles');
const sequelize = models.sequelize;
const controller = {}

controller.registerAvailability = async (req, res) => {
    try {
        const { operator_id, excursion_id, date, start_time, duration } = req.body;

        if (!operator_id || !excursion_id || !date || !start_time || !duration) {
            return res.status(400).json({ 
                success: false, 
                message: "One of the fields is not entered" 
            });
        }

        await models.Availability.create({
            operator_id,
            excursion_id,
            date,
            start_time,
            duration
        });

        return res.status(201).json({ 
            success: true, 
            message: "Availability created successfully" 
        });
        
    } catch (error) {
        return res.status(500).json({ 
            success: false, 
            message: "Availability was not created", 
            error: error.message 
        });
    }
};


module.exports = controller;