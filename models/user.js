const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 15
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  passwordConfirm: {
    type: String,
    required: true,
    minLength: 8
  },
  role: {
    enum: ['guest', 'member', 'admin'],
    default: 'guest'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
