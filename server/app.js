const express = require('express');
const app = express();

app.use('/', (req,res,next)=>{
    console.log(req.url);
    if(req.url.indexOf(".html")!=-1){
        res.sendFile(req.url,{root:__dirname});
    }
    res.sendFile("/index.html",{root:__dirname});
})
app.listen(4003,function(){
    console.log("Express start : port[4003]");
})