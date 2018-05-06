/*
    fs-append: 追加
 */

var fs = require('fs');

// appendFile(文件路径,内容,回调函数)
fs.appendFile('bb.txt','\n我不是归人',function (err) {
    if (err){
        console.error("追加失败");
    } else {
        console.log('追加成功');
    }
});
