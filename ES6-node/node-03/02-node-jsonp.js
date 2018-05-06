/*

 */
var http = require('http');
var url = require('url');

var server = http.createServer(function (req,res) {
    // 获取前端传过来的数据,其中包含回调函数 cb
    var urlObj = url.parse(req.url,true);
    var name = urlObj.query.username;
    var age = urlObj.query.age;
    var cb = urlObj.query.cb;

    var str = "你好" + name + ",你今年" + age + "岁了!";
    res.end(cb + "('" + str + "')");
});

server.listen(8080);
console.log("服务启动成功");