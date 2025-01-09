const express = require('express');
const controller = require('../controllers/availability.controller');
const router = express.Router();

router.post('/excursions/availability', controller.registerAvailability);

module.exports = router;
