const mongoose = require("mongoose");

const schema = mongoose.Schema({
    FacultyName: String,
    FacultyAge: Number
});

module.exports = mongoose.model("Faculty",schema);