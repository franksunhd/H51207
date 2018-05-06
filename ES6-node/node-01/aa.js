var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url === "/aa.html"){
        res.setHeader("content-type","text/html;charset=utf-8");
        var form = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>表单提交</title><link rel=\"stylesheet\" href=\"./aa.css\"></head><body><div class=\"box\"><label for=\"user\">姓名:</label><input id=\"user\" type=\"text\" class=\"user\" placeholder=\"请输入用户名\"><br><br><label for=\"pwd\">姓名:</label><input id=\"pwd\" type=\"text\" class=\"pwd\" placeholder=\"请输入密码\"><br><br><input type=\"button\" value=\"提交\" class=\"btn\"></div></body></html>";
        res.end(form);
    }
    if(req.url === "/aa.css"){
        res.setHeader("content-type","text/css;charset=utf-8");
        var css = ".user{width:100%;height:30px;border:1px solid red}.pwd{width:100%;height:30px;border:1px solid red}.btn{border:0;color:#fff;background:#ae3038;outline:0}";
        res.end(css);
    }
});

server.listen(8080);
console.log("服务请求成功!");