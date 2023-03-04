const router = require('express').Router();
const Blog = require("../models/Blog");

// //Create BLOG
router.post("/", async (req, res) => {
    const newPost = await new Blog(req.body);
    try { 
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json(error);
    }
})



//UPDATE BLOG
router.put("/:id", async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
            try {
                const updatePost = await Blog.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true });
                res.status(200).json(updatePost);

            } catch (error) {
                res.status(500).json(error);
            }
       


    } catch (error) {
        console.log("err")
        res.status(500).json(error);
    }

});

//DELETE BLOG
router.delete("/:id", async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
      
            try {
                await post.delete()
                res.status(200).json("Post Has been Deleted!");

            } catch (error) {
                res.status(500).json(error);
            }


    } catch (error) {
        res.status(500).json(error);
    }

});

// //GET BLOG
router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
        let posts;
            posts = await Blog.find();
        res.status(200).json(posts);

    } catch (error) {
        res.status(500).send(error)
    }
})

// //GET Recently 3 BLOGs 
router.get("/recent", async (req, res) => {
    try {
        let posts;
            posts = await Blog.find().sort({_id:-1}).limit(3);
        res.status(200).json(posts);

    } catch (error) {
        res.status(500).send(error)
    }
})


router.get('/:_id', async(req, res) => {
    const post = await Blog.findById(req.params._id)
    res.status(200).json(post)
  });










module.exports = router