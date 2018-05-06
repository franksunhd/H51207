/*
    express: nodeJs 框架 实质上并没有新的模块加入,只是把现有的模块重新封装

    1.路由
    2.中间件
    3.模板
 */

var formidable = require('formidable');
var express = require('express');
var app = new express();


// 路由,不需要引 http 服务了

/*
app.get('/02-post.html',function(req,res){
    // req.path 实质上就是第一个参数的实体
    console.log(req.path);
    // res.sendFile(__dirname + '/02-post.html');
    res.sendFile(__dirname + req.path);
});

app.get('/02-post.css',function(req,res){
    res.sendFile(__dirname + req.path);
});
*/

app.post('/post',function (req,res){
    var form = formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
        var name = fields.username;
        var age = fields.age;
        res.send("你好" + name + ",你今年" + age + "岁了!");
    });
});

// 路径参数,就是说参数写在了路径上
app.get('/aaa/:name/:age',function (req,res) {
    // 路径参数的数据都存在 req.params里面,以 json 的格式存储的
    console.log(req.params);
    var name = req.params.name;
    var age = req.params.age;
    res.send("请求成功!name=" + name + ",age=" + age);
});


// 终极写法
// * 代表所有的请求的路径
app.get('*',function (req,res) {
    res.sendFile(__dirname + req.path);
});

app.listen(8080);
console.log("服务启动成功!");
