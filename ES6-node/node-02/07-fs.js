// writeFile(文件路径,要写入的内容,修改的范围,回调函数) 写入文件
// 修改的范围:值为 a,则是追加, w 为覆盖
// 回调函数只有一个参数: err
var fs = require('fs');

function read(OldPath) {
    fs.readFile(OldPath,'utf-8',function (err,data) {
        if (err) {
            console.log("读取失败")
        } else {
            write(NewPath,data);
        }
    });
}

function write(NewPath,str) {
    // 设置追加的内容
    // var str = "唐僧师徒四人西天取经" + "\n";

    fs.writeFile(NewPath,str,{flag:'a'},function (err) {
        if(err) {
            console.error('写入失败');
        } else {
            console.log('写入成功');
        }
    });
}


function copy(OldPath,NewPath) {
    fs.readFile(OldPath,'utf-8',function (err,data) {
        if (err) {
            console.log("读取失败")
        } else {
            fs.writeFile(NewPath,data,{flag:'a'},function (err) {
                if(err) {
                    console.error('写入失败');
                } else {
                    console.log('写入成功');
                }
            });
        }
    });
}

copy('aa.txt','bb.txt');