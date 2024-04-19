const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  doctorName: String,
  patientName: String,
  patientAge: Number,
  recordingDate: Date,
//   soundFileUrl: String,
});

module.exports = mongoose.model("users",usersSchema);
