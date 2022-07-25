const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 3
  },
  lastName: {
    type: String,
    required: true,
    min: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
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
  photoURL: {
    type: String,
    default: 'https://cdn-icons-png.flaticon.com/512/1160/1160326.png?w=740'
  },
  role: {
    type: String,
    enum: ['guest', 'member', 'admin'],
    default: 'guest'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);

  this.passwordConfirm = undefined;
  next();
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(this.password, password);
};

module.exports = mongoose.model('User', UserSchema);
