const mongoose = require("mongoose");

const schema = mongoose.Schema({
    patient_name: String,
    phone_number: Number,
    hospital_name: String,
    doctor_name: String,
    department: String,
    department_name: String,
    date: Date
})

module.exports = mongoose.model("Patient", schema)