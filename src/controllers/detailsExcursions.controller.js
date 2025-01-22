const { sequelize } = require('../database/models/index');
const models = require('../database/models/index');
const controller = {};

controller.registerDetailsExcursion = async (req, res) => {
    try {

        const { excursion_id, duration, price } = req.body;

        if (!excursion_id || !price || !duration) {
            return res.status(400).json({ success: false, message: "All fields (excursion_id, price, duration) are required." });
        }
        
        const detailsExcursions = await models.DetailsExcursions.create({
            excursion_id, duration, price
        });
        
        return res.json(detailsExcursions);

    } catch (error) {
        return res.status(400).json({ success: false, message: "Availability was not created", error: error.message });
    }
};

module.exports = controller;
