/*
    express: nodeJs 框架 实质上并没有新的模块加入,只是把现有的模块重新封装

    1.路由
    2.中间件
    3.模板
 */

var express = require('express');
var app = new express();

// 路由,不需要引 http 服务了

// get 的第一个参数: 用户请求的路径--Route的Path
// 第二个参数: 回调函数
app.get('/',function (req,res) {
    res.setHeader('content-type','text/html;charset=utf-8');
    console.log(req);
    res.send("<h1>行到水穷处</h1>");
});

app.get('/aa.html',function (req,res) {
    res.setHeader('content-type','text/html;charset=utf-8');
    // req.query 是前台发送过来的信息,她以json 的格式存储
    console.log(req);
    res.send("<h1>坐看云起时</h1>");
});

app.get('/act',function (req,res) {
    var name = req.query.name;
    res.send(name + "我要这铁棒有何用!");
});

app.listen(8080);
console.log("服务启动成功!");
