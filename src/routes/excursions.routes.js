const express = require('express');
const router = express.Router();
const controller = require('../controllers/excursion.controlles');

router.get('/excursions', controller.index);
router.get('/excursions/filter', controller.getExcursionsByDestinationFilter);
router.get('/excursions/details/:destinationId?', controller.getExcursionsByDestination);

module.exports = router;
