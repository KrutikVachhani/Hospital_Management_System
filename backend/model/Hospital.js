const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  hospitalId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Hospital", hospitalSchema);
