const { where, Op } = require('sequelize');
const models = require('../database/models/index')
const excursions = require('../database/models/excursion')
const controller = {}

controller.index = async (req, res) => {
    try {

        const destinations = await models.Destination.findAll();
          

        const allExcursions = await models.Excursion.findAll();
        const title = "Excursiones";
        const subtitle = "Elegi tu aventura";
        const bgImage = "/img/header/obelisco.jpeg";

        res.render('excursions', {
            destinations : destinations,
            allExcursions : allExcursions,
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

        const excursions = await models.Excursion.findAll({
            where: conditions
        });
        
        const destination = await models.Destination.findOne({
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

controller.getExcursionsByDestinationFilter = async (req, res) => {
    try {
        const {destination_id, priceFrom, priceTo } = req.query;

        const conditions = {};
        if(destination_id && destination_id > 0 ){
            conditions.destination_id = parseInt(destination_id);
        }

        if (priceFrom > 0  || priceTo > priceFrom ){
            conditions.price = {};

            if (priceFrom) {
                conditions.price[Op.gte] = priceFrom;
            }

            if (priceTo) {
                conditions.price[Op.lte] = priceTo;
            }
        }

        const excursions = await models.Excursion.findAll({
            where: conditions
        });

        res.json(excursions);

    } catch (e) {
        res.status(500).json({ error: 'Error: ' , message: e.message});
    }
};

controller.getExcursionsById = async (req, res) =>{
    try {
        const excursionId = parseInt(req.params.excursionId);

        const excursion = await models.Excursion.findOne({
            where: { id: excursionId },
            include: [
                {
                    model: models.DetailsExcursions,
                    as: 'detailsExcursion'
                },
                {
                    model: models.ExcursionImages,
                    as: 'images'
                },
                {
                    model: models.Destination
                }
            ]
        });

        const destination = await models.Destination.findOne({
            where: {id: excursion.destination_id}
        })
        
        if (!excursion) {
            return res.status(404).render('error', {
                layout: false,
                message: 'Excursión no encontrada'
            });
        }
        
        const detailsExcursion = excursion.detailsExcursion;
        
        const excursionData = {
            id: excursion.id,
            name: excursion.name,
            description: detailsExcursion?.description || excursion.description,
            price: detailsExcursion?.price || null,
            duration: detailsExcursion?.duration || null,
            img: excursion.img,
            destination: destination || null
        }

        res.render('detailsExcursion', {
            layout: false,
            excursion: excursionData,
            imagesExcursions: excursion.images || [],
            hasDetails: !!detailsExcursion
        })
    } catch (e) {
        res.status(500).json({ error: 'Error : ' , message: e.message});
    }
}

module.exports =  controller;
