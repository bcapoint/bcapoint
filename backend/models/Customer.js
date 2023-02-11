const mongoose = require('mongoose')

// schema
const customerSchema = new mongoose.Schema({
   username:String,
   email:String,
   message:String
},{timestamps:true});

module.exports = mongoose.model('Customer',customerSchema);