const express = require('express');

const messageController = require('../controllers/messageController');
const { isValid } = require('../middlewares/isValid');
const { validateMessage } = require('../utils/validators');

const router = express.Router();

router.get('/', messageController.getMessage);

router.post(
  '/',
  validateMessage(),
  isValid('new-message'),
  messageController.postMessage
);

module.exports = router;
