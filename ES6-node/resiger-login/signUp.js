var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

var server = http.createServer(function (req,res) {
    res.setHeader('content-type','text/html;charset=utf-8');
    if (req.url == '/signUp.html') {
        fs.readFile('./signUp.html','utf-8',function (err,data) {
            if(err){
                console.log('读取数据出错');
            } else {
                res.end(data);  //将请求的页面发送到前台
            }
        })
    } else if (req.method == "POST") {
        // post 请求 如果是 signUp 取出传入的数据
        if (req.url == "/signUp") {
            // 实例化一个 formidable
            var form = new formidable.IncomingForm();
            // parse 方法处理数据
            form.parse(req,function (err,fields,files) {
                // 获取到了前台的数据
                var str = "username=" + fields.username +"&age="+ fields.age +"&job="+fields.job +"&pic=./"+ files.pic.name;
                fs.appendFile('data.json',str,function (err) {
                    if (err){
                        res.end("注册失败");
                    } else {
                        res.end('注册成功');
                    }
                });
            });
        }
    }
});

server.listen(8080);
console.log("服务启动成功");