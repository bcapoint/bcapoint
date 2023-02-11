const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//Registor
router.post('/register',async (req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            password:hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);

        
    } catch (error) {
       res.status(500).json(error); 
    }
})


//Login

router.post("/login",async (req,res) => {
 try {
    const user = await User.findOne({username:req.body.username})
    !user && res.status(400).json("Wrong credentials!")

    const validate = await bcrypt.compare(req.body.password,user.password)
    !validate && res.status(400).json("Wrong credentials!")
    
    const {password, ...others} = user._doc;
    res.status(200).json("ye yaha se gaya hai others")
    
 } catch (error) {
    res.status(500).json(error);
 }
})



module.exports= router