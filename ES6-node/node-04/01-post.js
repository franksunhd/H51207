var express = require('express');
var querystring = require('querystring');
var app = new express();

app.post('/post',function (req,res) {
    res.setHeader('content-type','text/html;charset=utf-8');
    // data 方法可以获取 post 数据,把 post 数据分块接收,也可以说把 post 数据分包发送
    var postData = '';
    req.on("data",function (chunk) {
        postData += chunk;
    });

    // 使用 end 方法判断 data 方法执行完毕,执行完毕之后对数据进行处理
    req.on('end',function () {
        var obj = querystring.parse(postData);
        res.end("你的名字是:" + obj.name + ",今年" + obj.age + "岁了!");
    });
});


// 加载资源
app.get("*",function (req,res) {
    res.sendFile(__dirname + req.path);
});


app.listen(8080);
console.log("服务启动成功!");