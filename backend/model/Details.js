// const { Double } = require('mongodb');
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    Is_discontinued:Boolean,
    manufacturer_name:String,
    type:String,
    pack_size_label:String,
    short_composition1:String,
    short_composition2:String,
    quantity:Number
});

module.exports = mongoose.model("Details", schema);