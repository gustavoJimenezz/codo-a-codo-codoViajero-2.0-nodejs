const express = require('express');
const router = express.Router();
const controller = require('../controllers/availability.controller');

router.post('/excursions/availability', controller.registerAvailability);

module.exports = router;
