// const bodyParser = require('body-parser');
const express=require('express');
// const mongoose=require('mongoose');
// const Faculty = require('./model/Faculty');
// const Master = require('./model/Master');
// // const Student=require('./model/Student');
const cors = require('cors');

const { default: mongoose } = require("mongoose");
const Master = require("./model/Details");


const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const bcrypt = require("bcrypt");

// mongoose.connect('mongodb+srv://Krutik:krutik23753@cluster0.4sqch.mongodb.net/')
// .then(()=>{
//     const app = express();
//     app.use(bodyParser.urlencoded({ extended: false }))
//     app.use(cors());

//     app.get('/',async(req,res)=>{
//         const data = await Master.find();
//         // console.log(data);
//         res.send(data);
//     })

//     app.listen(3000, ()=>{
//         console.log("Server Started At @3000")
//     })
// })

// mongoose.connect('mongodb+srv://Krutik:krutik23753@cluster0.4sqch.mongodb.net/medicines')
// .then(()=>{
//     const app = express();
//     app.use(express.json());
//     app.use(cors());
//     app.get('/',async(req,res)=>{
//         const data = await Master.find();
//         res.send(data);
//     })

//     app.listen(3000, ()=>{
//         console.log("Server Started At @3000");
//     })
    
// })



// module.exports = app;
dbConnect();