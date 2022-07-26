const mongoose = require('mongoose');
const { DateTime } = require('luxon');

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
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

MessageSchema.virtual('formattedDate').get(function () {
  return DateTime.fromJSDate(this.createdAt).toLocaleString(
    DateTime.DATETIME_MED
  );
});

MessageSchema.virtual('relativeTime').get(function () {
  return DateTime.fromJSDate(this.createdAt).toRelativeCalendar();
});

module.exports = mongoose.model('Message', MessageSchema);
