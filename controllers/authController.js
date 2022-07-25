const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');

passport.use(
  new LocalStrategy(async (email, password, done) => {
    const user = await User.findOne({ email }).catch(done);
    if (!user) return done(null, false, { message: 'User does not exist' });

    if (!(await user.comparePassword(password)))
      return done(null, false, { message: 'Incorrect password' });

    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

exports.getSignUp = (req, res) => res.render('sign-up');

exports.postSignup = catchAsync(async (req, res, next) => {
  await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });

  res.redirect('/');
});
