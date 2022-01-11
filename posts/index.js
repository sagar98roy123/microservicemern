const express = require ('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = [];

app.get('/posts',(req,res)=>{
    res.send(posts);
});

app.post("/posts",(req,res)=>{
    const id = randomBytes(4).toString('hex');
    const title = req.body.title;
    //console.log(req.body);
    posts.push({id,title});
    res.status(201).send({message:"Post successfully added",post:title});
});

app.listen(5000,()=>{
    console.log("Listening on 5000");
})