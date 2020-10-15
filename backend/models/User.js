const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: false
  }})

module.exports = User = mongoose.model('User', UserSchema);
