const express = require('express');
const router = express.Router();
const controller = require('../controllers/excursion.controller');

router.get('/excursions', controller.index);
router.get('/excursions/filter', controller.getExcursionsByDestinationFilter);
router.get('/excursions/destination/:destinationId?', controller.getExcursionsByDestination);
router.get('/excursions/details/:excursionId?', controller.getExcursionsById);

module.exports = router;
