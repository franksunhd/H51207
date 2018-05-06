var express = require("express");
var app = new express();
var formidable = require("formidable")


app.post("/res",function (req,res) {
   var form  = formidable.IncomingForm();
   form.parse(req,function (err,fileds,files) {
       
   })
});



app.get("*",function (req,res) {
    res.sendFile(__dirname + req.path);
});

app.listen(8080);
console.log("服务启动成功");