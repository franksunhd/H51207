/*
    util 输出对象,验证类型
 */

var util = require('util');
var querystring = require('querystring');
function Aa() {
    this.name = "王维";
    this.age = 10;
    this.job = "诗人";
}

var shi = new Aa();
// 输出对象类型的形式,但实质上还是字符串
var obj = util.inspect(shi);
console.log(obj,typeof obj); // Aa { name: '王维', age: 10, job: '诗人' } string
console.log(querystring.stringify(obj))
// 验证类型

var arr = [1,2,3,4];
var str = "绝胜烟柳满皇都";
console.log(util.isString(str)); // true
console.log(util.isArray(arr));  // true