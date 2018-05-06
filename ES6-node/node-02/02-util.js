/*
    util 是引入工具模块
    三个常用功能: 继承,输出对象,验证类型

 */

var util = require('util');
// inherits:继承

// 创建一个父类
function Yase(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.fun = function () {
        console.log(this.name);
    }
}
Yase.prototype.jobFun = function () {
    console.log(this.job);
}

// 创建一个子类
function Libai(name,job) {
    Yase.call(this);
    this.name = name;
    this.job = job;
}

// 继承方法 inherits 两个参数:(子类,父类)
// inherits 只能继承原型上的方法
util.inherits(Libai,Yase);

// 创建一个子类实例
var ys = new Libai("李白","诗人");
ys.jobFun();
ys.fun();