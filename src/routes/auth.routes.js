const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller');

router.get('/auth/login', controller.login);
router.get('/auth/singUp', controller.singUp);
router.post('/auth/verifyUser', controller.verifyUser);

module.exports = router;
