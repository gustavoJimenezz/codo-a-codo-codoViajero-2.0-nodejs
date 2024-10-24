const express = require('express');
const router = express.Router();
const controller = require('../controllers/excursions.controlles');

router.get('/excursions', controller.getExcursions);
router.get('/excursions/filter/:destinationId?', controller.getFilteredExcursions);

module.exports = router;
