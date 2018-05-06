var http = require('http');
var formidable = require('formidable');
var formString = require('querystring');
var fs = require('fs');

var server = http.createServer(function (req,res) {
    res.setHeader('content-type','text/html;charset=utf-8');
    if (req.url == '/login.html') {
        fs.readFile('./login.html','utf-8',function (err,data) {
            if(err){
                console.log('读取数据出错');
            } else {
                res.end(data);  //将请求的页面发送到前台
            }
        })
    } else if (req.method == "POST") {
        // post 请求 如果是 login 取出传入的数据
        if (req.url == "/login") {
            // 取出 data 数据中的 username 和 age
            var data = fs.readFileSync('./data.json','utf-8');
            var json2 = formString.parse(data);
            // 实例化一个 formidable
            var form = new formidable.IncomingForm();
            // parse 方法处理数据
            form.parse(req,function (err,fields,files) {
                if(fields.username == json2.username && fields.age == json2.age){
                    res.end("登录成功");
                } else {
                    res.end("登录失败");
                }
            });
        }
    }
});

server.listen(8080);
console.log("服务启动成功!");