const Message = require('../models/message');
const { catchAsync } = require('../utils/catchAsync');
const { paginate } = require('../utils/paginate');

exports.getAllMessages = catchAsync(async (req, res, next) => {
  const skip = paginate(req.query.page ?? 1);
  const messages = await Message.find()
    .skip(skip)
    .limit(10)
    .sort('-createdAt')
    .populate({ path: 'user', select: '-password -email' })
    .exec();

  res.render('index', {
    messages,
    info: req.flash('info')[0],
    page: Number(req.query.page ?? 1)
  });
});

exports.getMessageForm = (req, res) => res.render('new-message');

exports.postMessageForm = catchAsync(async (req, res, next) => {
  await Message.create({
    user: req.user,
    title: req.body.title,
    message: req.body.message
  });

  req.flash('info', `Successfully posted ${req.body.title}`);
  res.redirect('/');
});

exports.deleteMessage = catchAsync(async (req, res, next) => {
  await Message.findByIdAndDelete(req.params.messageId);

  req.flash('info', 'Successfully deleted the message');
  res.redirect('/');
});
