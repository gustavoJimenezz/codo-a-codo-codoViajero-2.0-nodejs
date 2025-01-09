const { where, Transaction } = require('sequelize');
const models = require('../database/models/index');
const handleBcrypt = require('../utils/handleBcrypt');
const roles = require('../enums/Roles');
const sequelize = models.sequelize;
const controller = {}

controller.registerAvailability = async (req, res) => {
    try {
        const transaction = await sequelize.transaction();
        const { operator_id, excursion_id, date, start_time, duration} = req.body;
        if (!operator_id || !excursion_id || !date || !start_time || !duration) {
            throw new Error("One of the fields is not entered");
        }

        const existingAvailability = await models.Availability.findOne({ where: { operator_id, date, start_time, duration } });
        if (existingAvailability) {
            throw new Error("Existing Availability");
        }

        await models.Availability.create(
            {
                operator_id: operator_id,
                excursion_id: excursion_id,
                date: date,
                start_time: start_time,
                duration: duration
            },
            { transaction }
        )

        await transaction.commit();
        return { success: true, message: "Availability created successfully" };

    } catch (error) {
        if (transaction) await transaction.rollback();
        return { success: false, message: "User was not created", error: error.message };
    }
}

module.exports = controller;