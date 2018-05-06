/*
    ws 模块,需要安装
 */
var ws = require('ws');
var webServer = ws.Server;


// 实例化一个 webServer
var wss = new webServer({port:3000});

// 链接 websocket 使用 on 方法绑定链接
wss.on('connection',function(ws){
    // 接收信息 就是前台发送过来的json字符串
    ws.on('message',function(json){
        // console.log(json);
        var obj = JSON.parse(json);

        // 在 wss 上设置一个 user ,如果说用户退出的话,可以通过 user 获取到用户的姓名
        this.user = obj;
        // 广播信息
        wss.wifi(obj,1);
    });
    // 退出
    ws.on('close',function(){
        var name = this.user.name;
        wss.wifi(name,0);
    });
});

// 广播 广播时会有两种情况:
wss.wifi = function (info,m) {
    // wss.clients 当前链接该服务器的所有人 ,也就是所有的 wenSocket 实例
    wss.clients.forEach(function(n){
        console.log(info.name + ":" + info.msg);
        if (m == 1) {
            n.send(info.name + ":" + info.msg);
        }
        if (m == 0) {
            n.send(info + "下线了!");
        }
    });
}
