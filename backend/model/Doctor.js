const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    doctorId: String,
    name: String,
    specialization: String,
    hospitalId: String,
    departmentId:String
});

module.exports = mongoose.model('Doctor', doctorSchema);
