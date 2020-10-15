const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },})

module.exports = User = mongoose.model('User', UserSchema);
