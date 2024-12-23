const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller');
const {validationLogin} = require('../middleware/validation');

router.get('/auth/login', controller.login);
router.get('/auth/singUp', controller.singUp);
router.post('/auth/verifyUser', validationLogin, controller.verifyUser);

module.exports = router;
