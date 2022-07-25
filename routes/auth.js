const express = require('express');

const authController = require('../controllers/authController');
const { isValid } = require('../middlewares/isValid');
const { validateSignup } = require('../utils/validators');

const router = express.Router();

// router.get('/signin');
// router.post('/signin');

router.get('/signup', authController.getSignUp);
router.post(
  '/signup',
  validateSignup(),
  isValid('sign-up'),
  authController.postSignup
);

module.exports = router;
