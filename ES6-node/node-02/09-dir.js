/*
    目录操作:
 */

var fs = require('fs');

// 创建目录
// fs.mkdir(文件路径,访问权限,回调函数)
// 回调函数一个参数: err

/*
fs.mkdir('./mk','0777',function (err) {
   if (err){
       console.error("创建失败");
   } else {
       console.error("创建成功");
   }
});
*/

// 重命名目录
// fs.rename(oldPath,newPath,回调函数)

/*
fs.rename('mk','mkdir',function (err) {
    if (err){
        console.error("重命名失败");
    } else {
        console.error("重命名成功");
    }
});

*/

// 删除目录
// fs.rmdir(目录名,回调函数)
/*
fs.rmdir('mkdir',function (err) {
    if (err){
        console.error("删除失败");
    } else {
        console.error("删除成功");
    }
});
*/

// 查看详情
// fs.stat()

/*
fs.stat('mk',function (err,data) {
    if(err){
        console.error("查询出错");
    } else {
        console.log(data);
    }
});
*/

// 查看文件是否存在
// fs.exists(文件路径,回调函数);
// 回调函数的参数为一个 boolean 值
fs.exists('mk',function (bool) {
    if (bool) {
        console.log("有这个文件");
    } else {
        console.log("没有这个文件");
    }
});