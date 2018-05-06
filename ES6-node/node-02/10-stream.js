/*
    stream
 */
var stream = require('stream');
var fs = require('fs');

// 流操作, 主要操作 大 数据

// 创建一个可读流
var rs = fs.createReadStream('/Users/lanou3g/Downloads/新年舞.mp4');

// 创建一个可写流
var ws = fs.createWriteStream('./mk/新年舞.mp4');
// 把可读流的资源放到可写流里面.完成复制


/*
var timer = 0;
// 循环复制,每一次的循环大约传送 64kb 的资源
rs.on('data',function (chunk) {
    timer++;
    ws.write(chunk,function () {
        console.log("复制成功" + timer);
    });
});
*/

//  复制的终极方法
rs.pipe(ws);