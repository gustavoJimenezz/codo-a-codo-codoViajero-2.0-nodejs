const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const {validationRegister} = require('../middleware/validation');

router.post('/user/registerUser', validationRegister, controller.registerUser);
router.post('/user/registerOperator', controller.registerOperator);

module.exports = router;
