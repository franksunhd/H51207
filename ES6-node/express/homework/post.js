/*
    express 的 post 请求
 */
var fs = require('fs');
var express = require('express');
var formidable= require('formidable');
var queryString = require('querystring');
var app = new express();

app.get('/post.html',function(req,res){
    res.setHeader('content-type','text/html;charset=utf-8');
    res.sendFile(__dirname + req.path);
});

app.post('/reg',function (req,res) {
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
                    res.send("注册成功");
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

});

app.listen(8080);
console.log("服务启动成功");