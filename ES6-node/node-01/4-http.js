var http = require('http');

var server = http.createServer(function (req,res) {
    res.setHeader("content-type","text/html;charset=utf-8");

    // console.log(req.url);
    if(req.url == '/aa.html') {
        res.end('粒粒皆辛苦!');
    } else {
        res.end("野火烧不尽");
    }
});

server.listen(8080);
console.log("服务启动成功!");