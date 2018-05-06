// express 支持模板引擎
// 使用 ejs 模板需要安装


var express = require('express');
var app = new express();

// ejs需要设置 express 模板引擎
app.set('view engine','ejs');

// 设置模板引擎的位置
app.set('views',__dirname);

app.get('/abc/:name/:age',function (req,res) {
   // 渲染 参数1:模板的名称,参数2:执行的数据
   res.render('muban',{
      name:req.params.name,
      age:req.params.age
   });
});

app.listen(8080);
console.log("服务启动成功!");