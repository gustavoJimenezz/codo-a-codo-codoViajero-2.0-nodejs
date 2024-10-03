const express = require('express');
const router = express.Router();
const controller = require('../controllers/excursiones.controlles');

router.get('/excursiones', controller.index);

module.exports = router;
