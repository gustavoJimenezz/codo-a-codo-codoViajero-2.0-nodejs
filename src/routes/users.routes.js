const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const {validationRegister} = require('../middleware/validation');

router.post('/user/register', validationRegister, controller.register);

module.exports = router;
