const express = require('express');
const router = express.Router();
const controller = require('../controllers/excursions.controlles');

router.get('/excursions', controller.index);
router.get('/excursions/:destinationId?', controller.getExcursionsByDestination);
router.get('/excursions/json/:destinationId?', controller.getExcursionsByDestinationJson);

module.exports = router;
