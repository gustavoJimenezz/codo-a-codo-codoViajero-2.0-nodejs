const { where } = require('sequelize');
const models = require('../database/models/index')
const controller = {}

controller.getExcursions = async (req, res) => {
    try {
        const allExcursions = await models.Excursions.findAll();
        const cheapestExcursion = await models.Excursions.findOne({
            order: [['price', 'ASC']]
        });
        res.render('excursions', { 
            allExcursions,
            cheapestExcursion
        });
    } catch (e) {
        res.status(500).json({ error: 'Error: ' , message: e.message});
    }
}

// controller.minPrice = async (req, res) => {
//     try {
//         const minPrice = await models.Excursions.findOne({
//             attributes: [[models.Sequelize.fn('MIN', models.Sequelize.col('precio')), 'minPrice']]
//         });

//         const minPriceExcursions = minPrice ? minPrice.get('minPrice') : 0; // Manejar el caso donde no hay resultados
//         console.log("ACA");
//         console.log(minPriceExcursions)
//         res.render('excursions', { minPriceExcursions });
//     } catch (error) {
//         console.error('Error al obtener el precio mínimo:', error);
//         res.status(500).json({ error: 'Error al obtener el precio mínimo' });
//     }
// }

module.exports =  controller;
