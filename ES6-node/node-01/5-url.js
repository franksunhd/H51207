var http = require('http');
// 引入 url 模块
var url = require('url');

var server = http.createServer(function (req,res) {
    res.setHeader("content-type","text/html;charset=utf-8");
    // url模块 处理 前端通过 url 传到后台的数据
    var objUrl = url.parse(req.url,true);
    console.log(req.url);  // /aa.html
    console.log(objUrl);  // Url对象

    res.end('红军不怕远征难!' + objUrl.query.name);
});
server.listen(8080);
console.log("服务器启动成功!");