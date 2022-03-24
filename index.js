var express = require('express');
var app = express();

//home page
app.get('/',(req,res)=>{
    res.sendFile("/express/index.html");
});

//data page
app.get('/data',(req,res)=>{
    if(req.query['user']==="harish"&&req.query['pass']==='harish'){
    res.write(`<h1>`+"Name:"+req.query['user']+"<br>pass:"+req.query['pass']+`</h1>`);
    res.end();
    }
    else{
        res.write('<h1>Invaild user</h1>');
        res.end();
    }
});

//server start
app.listen(8080,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('server start at port:8080');
});