const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  appointmentId: {
    type: String,
    required: true
  },
  patientName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true
  },
  hospitalId: {
    type: String,
    required: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  departmentId: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
