const mongoose = require('mongoose');

const pdfSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sem:{
        type:String,
        required:true
    },
    sub:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('pdfModel',pdfSchema);