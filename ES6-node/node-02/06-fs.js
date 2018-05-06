/*
    文件系统模块:
 */

var fs = require('fs');

// readFile(文件路径,编码格式,回调函数) 读取文件
// 回调函数有两个参数:(error,data)
fs.readFile('aa.txt','utf8',function (err,data) {
    console.log(data);
    console.log(err);
});

// 同步读取
var data = fs.readFileSync('aa.txt','utf-8');
console.error(data);