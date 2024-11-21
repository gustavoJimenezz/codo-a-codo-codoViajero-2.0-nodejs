const express = require('express');
const router = express.Router();
const controller = require('../controllers/excursions.controlles');

router.get('/excursions', controller.getExcursions);
router.get('/destination/:excursionId?', controller.getExcursionsByDestination);

module.exports = router;
