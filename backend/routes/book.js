const router = require('express').Router();
const fs = require('fs');
const Book = require('../models/Book');







//post
router.post('/',  (req,res)=>{
       
            const newBook =  new Book(req.body);
            newBook.save().then(()=>res.send('succesfully uploaded')).catch((err)=>console.log(err))
    
    
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
});

//delete by id
router.delete("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        try {
            await book.delete();
            res.status(200).json("Book Has been Deleted!");

        } catch (error) {
            res.status(500).json(error);
        }


    } catch (error) {
        res.status(500).json(error);
    }

});




module.exports = router