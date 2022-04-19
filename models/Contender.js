const mongoose = require('mongoose');

const contenderSchema = new mongoose.Schema({
  breed: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
    unique: true,
  },
  votes: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Contender', contenderSchema);
