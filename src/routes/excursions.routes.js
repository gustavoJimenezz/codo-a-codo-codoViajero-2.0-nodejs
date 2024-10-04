const express = require('express');
const router = express.Router();
const controller = require('../controllers/excursions.controlles');

router.get('/excursions', controller.getExcursions);

module.exports = router;
