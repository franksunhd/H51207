// path模块: 对文件的路径进行处理

var path = require('path');

// 1. normalize 格式化路径
var str1 = './a/ss/../../ad/ss/d/..a/aa';
var str2 = path.normalize(str1);
console.log(str2);  // ad/ss/d/..a/aa

// 2.拼接路径,规范化输出路径
var str3 = '../a/a/aaa///a/..../asas/as';
var str4 = '//b/c';
var str5 = path.join(str3,str4);
console.log(str5);  // ../a/a/aaa/a/..../asas/as/b/c

// 3. 获取当前目录的绝对路径
console.log(__dirname);  // /Users/lanou3g/Desktop/H5-1207/ES6-node/node-03

// 4. 获取当前文件的绝对路径
console.log(__filename); // /Users/lanou3g/Desktop/H5-1207/ES6-node/node-03/01-path.js

// 5.判断是否是绝对路径
var result = path.isAbsolute('./a/c/ds/a');
console.log(result);  // false
var result1 = path.isAbsolute(__dirname);
console.log(result1);  // true

// 6.把相对路径转为绝对路径
var str6 = path.resolve('./a/c/ds/a');
console.log(str6);  // /Users/lanou3g/Desktop/H5-1207/ES6-node/node-03/a/c/ds/a

// 7.获取路径 A 到路径 B 的相对路径
var str7 = path.dirname('./a/../b/v','./s/sc/as');
console.log(str7);  // ./a/../b

// 8.获取文件路径的最后一个部分
var str8 = path.basename('./aa/bb.txt');
console.log(str8);  // bb.txt

// 9.获取文件的的文件名
var str9 = path.basename('./aa/bb.txt','.txt');
console.log(str9); // bb

// 10.获取文件的后缀名
var str10 = path.extname('./aa/bb.txt');
console.log(str10); // .txt

// 11.解析路径
var str11 = path.parse('./aa/bb.txt');
console.log(str11);  // { root: '', dir: './aa', base: 'bb.txt', ext: '.txt', name: 'bb' }

// 12.路径编码,把对象转换为字符串
var str12 = path.format(str11);
console.log(str12);