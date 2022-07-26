const User = require('../models/user');
const { catchAsync } = require('../utils/catchAsync');

exports.getSignOut = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash('info', 'Sign out successful');
    res.redirect('/');
  });
};

exports.getSignIn = (req, res) =>
  res.render('sign-in', { authError: req.flash('error')[0] });

exports.getSignUp = (req, res) => res.render('sign-up');

exports.postSignup = catchAsync(async (req, res, next) => {
  await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });

  res.redirect('/auth/signin');
});
