const express = require('express');
const router = express.Router();
const controller = require('../controllers/detailsExcursions.controller');

router.post('/excursions/detailsExcursion', controller.registerDetailsExcursion);

module.exports = router;
