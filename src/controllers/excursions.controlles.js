const { where } = require('sequelize');
const models = require('../database/models/index')
const controller = {}

controller.index = async (req, res) => {
    try {
        const allExcursions = await models.Excursions.findAll();
        const title = "Excursiones";
        const subtitle = "Elegi tu aventura";
        const bgImage = "/img/header/obelisco.jpeg";

        res.render('excursions', {
            excursions : allExcursions,
            title : title, 
            subtitle : subtitle, 
            bgImage : bgImage, 
        });
    } catch (e) {
        res.status(500).json({ error: 'Error : ' , message: e.message});
    }
}

controller.getExcursions = async (req, res) => {
    try {
        const allTouristDestinations = await models.TouristDestination.findAll({
            order: [['city', 'ASC']]
        });
        
        const allExcursions = await models.Excursions.findAll();
        const cheapestExcursion = await models.Excursions.findOne({
            order: [['price', 'ASC']]
        });

        // cambiar por json
        res.render('excursionsByDestine', { 
            allTouristDestinations,
            allExcursions,
            cheapestExcursion
        });
    } catch (e) {
        res.status(500).json({ error: 'Error: ' , message: e.message});
    }
}

controller.getExcursionsByDestination = async (req, res) => {
    try {
        const destinationId = parseInt(req.params.excursionId, 10);
        const conditions = destinationId ? { destination_id: destinationId } : {};

        const destination = await models.TouristDestination.findOne({
            where: {id: destinationId}
        })

        const excursions = await models.Excursions.findAll({
            where: conditions
        });
        const title = destination.city;

        const subtitle = destination.description;
        
        const bgImage = `/img/touristDestinations/${destination.img}`;

        res.render('excursionsByDestine', {
            destination : destination,
            excursions : excursions,
            title : title, 
            subtitle : subtitle, 
            bgImage : bgImage, 
        });

    } catch (e) {
        res.status(500).json({ error: 'Error: ', message: e.message });
    }
};

module.exports =  controller;
