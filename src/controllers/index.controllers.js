const models = require('../database/models/index')
const controller = {}

controller.index = async (req, res) => {
        try {
            const travelPackages = await models.TouristDestination.findAll();
            res.render('index', {travelPackages});
        } catch (e) {
            res.status(500).json({ error: 'Error jaja : ' , message: e.message});
        }
    }

module.exports =  controller;