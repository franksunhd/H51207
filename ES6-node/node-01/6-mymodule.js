
// 引入模块
var tian = require('myindex');

// 调用
tian.addFun();


/*
    node 官方给出的模块 叫原生模块
    node 自定义的模块 叫文件模块
    文件模块如果执行在引用模块的那个 js 的相同目录下,会直接执行
    如果文件模块在 node_modules 文件夹中,它会一直的寻找这个文件模块,不管是不是在同一个目录下,直到找到这个文件为止
 */