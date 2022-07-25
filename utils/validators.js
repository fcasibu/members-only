const { check } = require('express-validator');
const User = require('../models/user');

/**
 * Validators for the signup route
 *
 * @returns {Array} An array of validations
 */
exports.validateSignup = function () {
  return [
    check('firstName')
      .isLength({ min: 3 })
      .withMessage('First name must have a minimum length of 3 characters')
      .matches(/^[A-Za-z\s]+$/)
      .withMessage('First name must be alphabetic'),
    check('lastName', 'Last name is not valid')
      .isLength({ min: 3 })
      .withMessage('Last name must have a minimum length of 3 characters')
      .matches(/^[A-Za-z\s]+$/)
      .withMessage('Last name must be alphabetic'),
    check('email')
      .isEmail()
      .withMessage('You have entered an invalid email')
      .custom((email) =>
        User.findOne({ email }).then((user) => {
          if (user) return Promise.reject(new Error('Email is already taken'));
        })
      ),
    check('password')
      .isLength({
        min: 8
      })
      .withMessage('Password must have at least 8 characters'),
    check('passwordConfirm', 'Passwords do not match')
      .isLength({ min: 8 })
      .withMessage('Password must have at least 8 characters')
      .custom((value, { req }) => value === req.body.password)
  ];
};