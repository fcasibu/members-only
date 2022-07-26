const express = require('express');

const User = require('../models/user');

const messageController = require('../controllers/messageController');

const { catchAsync } = require('../utils/catchAsync');
const { checkAdminRole } = require('../utils/checkAdminRole');

const router = express.Router();

router.get('/', messageController.getAllMessages);

/* Get and post request for the join club route */
router.get('/join-club', (req, res) => res.render('member'));
router.post(
  '/join-club',
  catchAsync(async (req, res, next) => {
    if (req.body.answer === process.env.ANSWER_FOR_MEMBER) {
      await User.findByIdAndUpdate(req.user._id, { role: 'member' });
      req.flash('info', 'You are now a member!');
      return res.redirect('/');
    }

    return res.render('member', { error: { message: 'Incorrect Answer' } });
  })
);

/* Get and post request for the admin route */
router.get('/admin', (req, res) => res.render('admin'));
router.post(
  '/admin',
  catchAsync(async (req, res, next) => {
    if (req.body.answer === process.env.ANSWER_FOR_ADMIN) {
      await User.findByIdAndUpdate(req.user._id, { role: 'admin' });
      req.flash('info', 'You are now an admin!');
      return res.redirect('/');
    }
    return res.render('admin', { error: { message: 'Incorrect Answer' } });
  })
);

router.get(
  '/:messageId/delete',
  checkAdminRole,
  messageController.deleteMessage
);

module.exports = router;
