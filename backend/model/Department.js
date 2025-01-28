const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    departmentId: String,
    name:String,
});

module.exports = mongoose.model("Department", departmentSchema);
