const  express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const bookRoute = require('./routes/book');
const custRoute = require('./routes/customer')
const multer = require("multer");
const pdfModel = require('./models/Image.model')
var cors = require('cors')
const fs = require('fs');



dotenv.config();
app.use(express.json());
app.use('/public',express.static('public'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect(`${process.env.MONGO_URL}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(console.log("connected to DB"))
.catch(error => console.log(error));

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/book",bookRoute);
app.use("/api/customer",custRoute);


//storage
const Storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'public')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + '-' + file.originalname);
    } 
});

const upload = multer({
    storage:Storage
}).single('file');

//post
app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            return res.status(500).json("pahle hi"+err)
        }
        // return res.status(200).send(req.file);
        else{
            const newPdf = new pdfModel({
                name:req.body.name,
                image:{
                    data:req.file ? fs.readFileSync(req.file.path) : null,
                    contentType:req.file ? req.file.mimetype : null
                },
                sem:req.body.sem,
                sub:req.body.sub
            })
            newPdf.save().then(()=>res.send('succesfully uploaded')).catch((err)=>console.log("save karte time" + err))
        }
    })
})

//get
app.get('/upload', async (req,res)=>{
    try {
        // let pdf = await pdfModel.find();
        let pdf = await pdfModel.find().sort({_id:-1}).exec(function(err,docs) {
            res.status(200).json(docs)
        })
        // res.status(200).json(pdf)
    } catch (error) {
        res.status(500).send(error)
    }
})

//get by title
app.get('/single/:id',async (req,res)=>{
    let pdf = await pdfModel.findById(req.params.id);
    res.status(200).json(pdf);
})



app.get('/', (req, res) => res.send('Hello World ji!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))