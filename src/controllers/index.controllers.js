const models = require('../database/models/index')
const controller = {}
controller.index = async (req, res) => {
        try {
            console.log("ACAAAAAAAAAAA!r:", res.locals.user);
            const TouristDestination = await models.Destination.findAll();
            const excursions = await models.Excursion.findAll();
            const title = "Visitas guiadas y excursiones";
            const subtitle = "Llená tu viaje";
            const bgImage = "img/header/obelisco.jpeg";

            res.render('index', {
                allDestinations:TouristDestination,
                allExcursions:excursions,
                title : title,
                subtitle : subtitle,
                bgImage : bgImage,
            });
        } catch (e) {
            res.status(500).json({ error: 'Error : ' , message: e.message});
        }
    }

module.exports =  controller;

























// controller.index = async (req, res) => {
//         try {
//             const TouristDestination = await models.TouristDestination.findAll();
//             const excursions = await models.Excursions.findAll();
//             const title = "Visitas guiadas y excursiones";
//             const subtitle = "Llená tu viaje";
//             const bgImage = "img/header/obelisco.jpeg";

//             res.render('index', {
//                 allDestinations:TouristDestination,
//                 allExcursions:excursions,
//                 title : title,
//                 subtitle : subtitle,
//                 bgImage : bgImage,
//             });
//         } catch (e) {
//             res.status(500).json({ error: 'Error : ' , message: e.message});
//         }
//     }