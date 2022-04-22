const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  hasVoted: {
    type: Boolean,
  },
  lastVoted: {
    type: Date,
  },
});

module.exports = mongoose.model('User', userSchema);
