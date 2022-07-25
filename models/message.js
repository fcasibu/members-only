const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50
  },
  message: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 1000
  }
});

module.exports = mongoose.model('Message', MessageSchema);
