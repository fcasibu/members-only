const passport = require('passport');
const express = require('express');

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
    failureRedirect: '/auth/signin',
    failureFlash: true
  }),
  (req, res) => {
    req.flash('info', 'Sign in successful');
    res.redirect('/');
  }
);

router.get('/signup', authController.getSignUp);
router.post(
  '/signup',
  validateSignup(),
  isValid('sign-up'),
  authController.postSignup
);

router.get('/signout', authController.getSignOut);

module.exports = router;
