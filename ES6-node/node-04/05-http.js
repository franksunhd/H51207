var express = require('express');
var app = new express();

app.get("*",function(req,res){
   res.sendFile(__dirname + req.path);
});

app.listen(8080);
console.log("服务启动成功!");