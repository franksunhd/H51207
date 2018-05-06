/*
    post:
 */

// formidable 模块: 非原生模块,必须先安装,再使用,它是专门处理 form 表单的提交文件的模块.
var formidable = require('formidable');
var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req,res) {
   res.setHeader('content-type','text/html;charset=utf-8');

   if (req.url == '/post.html') {
       fs.readFile('./11.html','utf-8',function (err,data) {
           if(err){
               console.log('查询出错');
           } else {
               res.end(data);
           }
       })
   } else if (req.method  == 'POST'){
       if(req.url == '/info'){
           //  实例化一个 formidable
           var form = new formidable.IncomingForm();
           // parse 方法处理数据 err 为错误信息, fields 为前台传过来的文字信息, files 为前台传过来的文件信息
           form.parse(req,function (err,fields,files) {
               // console.log(fields);
               // console.log("----------");
               // console.log(files);

               // 创建一个可读流,先从前台的数据中获取临时路径
               var path = fs.createReadStream(files.pic.path);
               // 创建一个可写流,存储前台传过来的数据
               var ws = fs.createWriteStream('./mk/' + files.pic.name);
               path.pipe(ws);
               res.end("你好" + fields.username + ',你去' + fields.job + '吧!');
           });
       }
   }
});

server.listen(8080);
console.log("服务启动成功!");