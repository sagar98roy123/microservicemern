const express = require ('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId =[];

app.get('/posts/:id/comments',(req,res)=>{
    const resContent= [];
    commentsByPostId.forEach(data=>{
        if(data.postId==req.params.id){
            resContent.push({id:data.id,postId:data.postId,content:data.content});
        }
    })
    res.send(resContent);
});

app.post("/posts/:id/comments",(req,res)=>{
    const commentId =randomBytes(4).toString('hex');
    const content = req.body.content;

    commentsByPostId.push({id:commentId,postId:req.params.id,content:content});
    
    res.send(content);
});

app.listen(4001,()=>{
    console.log("Listening on 4001");
});