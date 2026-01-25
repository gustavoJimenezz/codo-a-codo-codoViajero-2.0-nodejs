const express = require('express');
const router = express.Router();
const controller = require('../controllers/operator.controller');

router.post('/user/operator', controller.registerOperator);

module.exports = router;
