const router = require('express').Router();
const fs = require('fs');
const multer = require("multer");
const Book = require('../models/Book');


//storage
const Storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'public')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+ '-' + file.originalname);
    } 
});



const upload = multer({
    storage:Storage
}).single('file');

// const  multiUpload = upload.fields([{name:'thumbnail'},{name:'file'}]);



//post
router.post('/',  (req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            return res.status(500).json(err)
        }
        else{
            const newBook =  new Book({
                title:req.body.title,
                file:{
                    data:(req.file)?fs.readFileSync(req.file.path):null,
                    contentType:(req.file)?req.file.mimetype:''
                },
                description:req.body.description,
                thumbnail:req.body.thumbnail,
                link:req.body.link,
                isDownloadable:req.body.isDownloadable,
                bookType:req.body.bookType
            })
            newBook.save().then(()=>res.send('succesfully uploaded')).catch((err)=>console.log(err))
       
        // console.log(req.files.file[0].path)
        // console.log(req.files.thumbnail[0].path)
    }
    })
})





//Create GET
router.get('/',async (req,res)=>{
    try {
     const book = await Book.find().sort({_id:-1}).exec(function(err,docs) {
        if(err){
            console.log(err)
        }else{
            
        res.status(200).json(docs)
        }
    });
        
    } catch (error) {
        res.status(500).json(error);
    }
})



module.exports = router