/*
    querystring 模块: 处理 name=aa&age=12&job=www 类型的数据
 */

// application/x-www.form-urlencoded 类型的数据
var querystring = require('querystring');

// 对字符串进行解析
var str1 = "name=亚瑟&age=18&job=战士";

var json1 = querystring.parse(str1);
console.log(json1,typeof json1);  // { name: '亚瑟', age: '18', job: '战士' } 'object'

// 键值一样,相应的值会被解析为数组
var str2 = "name=亚瑟&age=18&job=战士&job=刺客&job=BOSS";
var json2 = querystring.parse(str2);
console.log(json2,typeof json2);  // { name: '亚瑟', age: '18', job: [ '战士', '刺客', 'BOSS' ] } 'object'


// 还可以把 json 对象转为 application/x-www.form-urlencoded 类型的数据

var json3 = {
    name:'铁木真',
    age:72,
    job:['可汗','大王']
}

// 可以设置分隔符(&) 和 分配符(=)
var str3 = querystring.stringify(json3,'||','==');
console.log(decodeURI(str3));  // name==铁木真||age==72||job==可汗||job==大王