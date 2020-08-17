const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  fatherName: { type: String },
  email: { type: String, unique: true },
  phoneNumber: { type: Number },
  country: { type: String },
  address: { type: String },
  dob: { type: String },
  password: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);

