const { where } = require('sequelize');
const models = require('../database/models/index')
const controller = {}

controller.getExcursions = async (req, res) => {
    try {
        const allTouristDestinations = await models.TouristDestination.findAll({
            order: [['city', 'ASC']]
        });
        
        const allExcursions = await models.Excursions.findAll();
        const cheapestExcursion = await models.Excursions.findOne({
            order: [['price', 'ASC']]
        });
        res.render('excursions', { 
            allTouristDestinations,
            allExcursions,
            cheapestExcursion
        });
    } catch (e) {
        res.status(500).json({ error: 'Error: ' , message: e.message});
    }
}

controller.getFilteredExcursions = async (req, res) => {
    try {
        const destinationId = parseInt(req.params.destinationId, 10);
        const conditions = destinationId ? { destination_id: destinationId } : {};

    
        const excursions = await models.Excursions.findAll({
            where: conditions
        });

        res.json(excursions);
    } catch (e) {
        res.status(500).json({ error: 'Error: ', message: e.message });
    }
};


module.exports =  controller;
