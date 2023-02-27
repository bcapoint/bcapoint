const mongoose = require('mongoose')

// schema
const bookSchema = new mongoose.Schema({
   title:{
    type:String
   },
   thumbnail:String,
   description:String,
   // file:{
   //    data:Buffer,
   //    contentType:String
   // },
   link:String,
   isDownloadable:{
    type:Boolean,
    required:true
   },
   bookType:{
    type:String,
    required:true
   }
},{timestamps:true});

module.exports = mongoose.model('Book',bookSchema);