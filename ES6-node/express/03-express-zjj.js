/*
    中间件: 控制流程是否执行,中间件的 req 和 res 都是指的同一个对象,如果中间键没有停止,就会一直执行下去,数据也就一直向下传递
 */

var express = require('express');

var app = new express();

// 中间件的关键字是 use

// 国
app.use(function (req,res,next) {
    req.money = 100000;
    next();
});

// 省
app.use(function (req,res,next) {
    req.money -= 5000;
    next();
});

// 市
app.use(function (req,res,next) {
    req.money -= 2500;
    next();
});

// 县
app.use(function (req,res,next) {
    req.money -= 2000;
    next();
});

// 村
app.use(function (req,res,next) {
    req.money -= 100;
    next();
});

// app.all 不管什么操作,统一执行
app.all('*',function (req,res) {
   res.send("发钱了,发了" + req.money + "呢!");
});

app.listen(8080);
console.log("服务启动成功!");
