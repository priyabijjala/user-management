// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/,
    maxlength: 100,
  },
  lastName: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
});

module.exports = mongoose.model('User', userSchema);
