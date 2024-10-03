const models = require('../database/models/index')
const controller = {}

controller.index = async (req, res) => {
        try {
            res.render('excursiones');
        } catch (e) {
            res.status(500).json({ error: 'Error : ' , message: e.message});
        }
    }

module.exports =  controller;