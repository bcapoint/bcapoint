const mongoose = require('mongoose')
const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    thum:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    catogery:{
        type:String,
        required:true,

    }
}, { timestamps: true });

module.exports = mongoose.model('Blog',BlogSchema);