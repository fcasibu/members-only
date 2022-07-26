const Message = require('../models/message');
const { catchAsync } = require('../utils/catchAsync');

exports.getMessage = (req, res) => {
  res.render('new-message');
};

exports.postMessage = catchAsync(async (req, res, next) => {
  await Message.create({
    user: req.user,
    title: req.body.title,
    message: req.body.message
  });

  res.redirect('/');
});
