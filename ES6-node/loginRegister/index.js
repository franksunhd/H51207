// 引入所需的模块
var http = require('http');
var fs = require("fs");
var formidable = require('formidable');
var queryString = require('querystring');
var url = require('url');


// 创建一个服务
var server = http.createServer(function (req,res) {
    res.setHeader('content-type','text/html;charset=utf-8');
    var urlObj = url.parse(req.url,true);
    if (urlObj.pathname == '/index.html') {
        // 把 html 的内容传给前台
        fs.readFile('./index.html','utf-8',function (err,data) {
           if (err) {
               console.log("读取错误")
           } else {
               res.end(data);
           }
        });
    } else if (urlObj.pathname == '/index.css'){
        res.setHeader('content-type','text/css;charset=utf-8');
        // 把 css 的内容传给前台
        fs.readFile('./index.css','utf-8',function (err,data) {
            if (err) {
                console.log("读取错误")
            } else {
                res.end(data);
            }
        });
    } else if (urlObj.pathname == '/reg'){
        // 把注册的内容分别放到文件里面
        var form = formidable.IncomingForm();
        form.parse(req,function (err,fields,files) {
            var dataStr = queryString.stringify(fields);
            var eUrl = decodeURI(dataStr);

            // 设置添加函数
            function setData(aaUrl) {
                fs.writeFile(aaUrl + '/bb.txt',eUrl,{flag:'w'},function (err) {
                    if (err) {
                        console.log("写入失败");
                    } else {
                        console.log("写入成功");
                        var rs = fs.createReadStream(files.pic.path);
                        var ws = fs.createWriteStream(aaUrl + '/' + files.pic.name);
                        rs.pipe(ws);
                        res.end("注册成功");
                    }
                })
            }
            // 判断是否存在是否存在要存储的文件夹
            fs.exists('./aa',function (bool) {
               if (!bool){
                   fs.mkdir('./aa','0777',function (err) {
                       if (err) {
                           console.log("创建失败")
                       } else {
                           // 创建成功,写入
                           setData('./aa');
                       }
                   });
               } else {
                   // 文件存在
                   setData('./aa');
               }
            });
        });

    } else if (urlObj.pathname == '/login') {
        // 检测用户的登录信息和存储的信息是否一致 get 请求
        var dataInfo = urlObj.query;
        fs.readFile('./aa/bb.txt','utf-8',function (err,data) {
            // 字符串转换为 json 数据
           var datas = queryString.parse(data);
           if (dataInfo.username != datas.username) {
               res.end("用户名错误");
           }
           if (dataInfo.pwd != datas.pwd) {
               res.end("密码错误");
           }
           res.end("登录成功");

        });
    }
});

server.listen(8080);
console.log("服务器启动成功!");
