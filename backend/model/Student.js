const { default: mongoose } = require("mongoose");


const schema=mongoose.Schema({
    StudentID: String,
    StudentName: String,
    EnrollmentNo:Number,
    Branch:String,
    Semester:Number
})

module.exports=mongoose.model('Student',schema);