const express = require('express');
const passport = require('passport');

const authController = require('../controllers/authController');
const { isValid } = require('../middlewares/isValid');
const { validateSignup, validateSignin } = require('../utils/validators');

const router = express.Router();

router.get('/signin', authController.getSignIn);
router.post(
  '/signin',
  validateSignin(),
  isValid('sign-in'),
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/signin',
    failureFlash: true
  })
);

router.get('/signup', authController.getSignUp);
router.post(
  '/signup',
  validateSignup(),
  isValid('sign-up'),
  authController.postSignup
);

module.exports = router;
