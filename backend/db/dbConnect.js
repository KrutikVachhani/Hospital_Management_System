const express = require("express");
const mongoose = require("mongoose");
const Admit = require("../model/Admit");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var cors = require('cors');
const bcrypt = require("bcrypt");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
const PORT = 3000;

const User = mongoose.model('User',{
    name:{type:String},
    email:{type:String, unique:true},
    password:{type: String},
    date:{type:Date, default:Date.now}
});

mongoose
  .connect('mongodb+srv://Krutik:krutik23753@cluster0.4sqch.mongodb.net/hospitals?retryWrites=true&w=majority')
  .then(() => {
    console.log("Connected to MongoDB");
    // const total = 
    // console.log(Admit.estimatedDocumentCount());
})
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.post('/signup', async (req, res) => {
    let check = await User.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({
            success: false,
            error: "Email Already Exist!"
        });
    }
    // const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    const data = await user.save();
    const data2 = {user: {id: data.id}};
    const token = jwt.sign(data2, "secret_user");
    res.json({success: true, token});
});

app.post('/login', async(req, res) => {
    let user = await User.findOne({email:req.body.email});
    if(user){
        const passMatch = req.body.password === user.password;
        // console.log("Provided password:", req.body.password);
        // console.log("Stored hashed password:", user.password);
        // const passMatch = await bcrypt.compare(req.body.password = user.password, 10);
        console.log(passMatch);
        if(passMatch){
            const data = {user: {id:user.id}};
            const token = jwt.sign(data, "secret_user");
            res.json({success: true, token});
        } else{
            res.json({ success: false, error: "Wrong Password" });
        }
    } else{
        res.json({ success: false, error: "Wrong Email Address" });
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });