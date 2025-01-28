const mongoose = require("mongoose");

const admitSchema = new mongoose.Schema({
  admissionId: {
    type: String,
    required: true,
  },
  patientId: {
    type: String,
    required: true,
  },
  roomId: {
    type: String,
    required: true,
  },
  admissionDate: {
    type: Date,
    required: true,
  },
  dischargeDate: {
    type: Date,
    required: false, // Optional, as discharge date may not be set initially
  },
});

module.exports = mongoose.model("Admit", admitSchema);
