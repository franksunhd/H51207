// 创建一个 http 服务
// 引入 http 模块

var http = require('http');

// 创建一个服务
var server = http.createServer(function(req,res) {
    // req:request 从前台传来的信息(传参)
    // res:response  服务器发送给前端的信息(响应)

    // 设置 utf-8编码格式
    res.setHeader('content-type','text/html;charset=utf-8');
    // end 方法把组装好的信息,发送给前台. end方法是 res 执行的最终方法,也就是说 end 是最后执行的方法,在 end 之后执行方法,没有效果
    // end 的参数只能是字符串

    res.end('马瘦毛长蹄子肥');
});

// 监听端口
server.listen(8080);
console.log("服务启动成功!");