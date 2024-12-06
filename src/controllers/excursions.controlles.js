const { where } = require('sequelize');
const models = require('../database/models/index')
const controller = {}

controller.index = async (req, res) => {
    try {

        const destinations = await models.TouristDestination.findAll({
          });
          

        const allExcursions = await models.Excursions.findAll();
        const title = "Excursiones";
        const subtitle = "Elegi tu aventura";
        const bgImage = "/img/header/obelisco.jpeg";

        res.render('excursions', {
            destinations : destinations,
            excursions : allExcursions,
            title : title, 
            subtitle : subtitle, 
            bgImage : bgImage, 
        });
    } catch (e) {
        res.status(500).json({ error: 'Error : ' , message: e.message});
    }
}

controller.getExcursionsByDestination = async (req, res) => {
    try {
        const destinationId = parseInt(req.params.destinationId, 10);
        const conditions = destinationId ? { destination_id: destinationId } : {};

        const excursions = await models.Excursions.findAll({
            where: conditions
        });
        
        const destination = await models.TouristDestination.findOne({
            where: {id: destinationId}
        })

        const title = destination.name;
        const subtitle = destination.description;
        const bgImage = `/img/touristDestinations/${destination.img}`;

        res.render('excursionsByDestine', {
            excursions : excursions,
            title : title, 
            subtitle : subtitle, 
            bgImage : bgImage, 
        });
    } catch (e) {
        res.status(500).json({ error: 'Error: ', message: e.message });
    }
};

controller.getExcursionsByDestinationJson = async (req, res) => {
    try {
        const destinationId = parseInt(req.params.destinationId, 10);
        const conditions = destinationId ? { destination_id: destinationId } : {};
        console.log(destinationId);
        const excursions = await models.Excursions.findAll({
            where: conditions
        });

        res.json(excursions);
    } catch (e) {
        res.status(500).json({ error: 'Error: ' , message: e.message});
    }
}


module.exports =  controller;
