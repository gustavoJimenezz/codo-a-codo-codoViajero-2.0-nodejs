const models = require('../database/models/index')
const controller = {}

controller.index = async (req, res) => {
        try {
            const travelPackages = await models.TouristDestination.findAll();
            const excursions = await models.Excursions.findAll();

            res.render('index', {travelPackages, excursions});
        } catch (e) {
            res.status(500).json({ error: 'Error : ' , message: e.message});
        }
    }

module.exports =  controller;