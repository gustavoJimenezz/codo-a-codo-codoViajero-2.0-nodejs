const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller');
const {validationLogin} = require('../middleware/validation');
const passport = require('../middleware/passport');

router.get('/auth/login', controller.login);
router.get('/auth/singUp', controller.singUp);
router.post('/auth/verifyUser', validationLogin, controller.verifyUser);

// Google OAuth
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/auth/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/auth/login'
  }),
  controller.googleCallback
);

// Logout
router.get('/auth/logout', controller.logout);

module.exports = router;
