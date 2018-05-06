/*
    mongoose 对象模型工具,它是基于 node-mongodb-native 开发的 mongodb-nodejs 的驱动工具
    操作 mongo 数据库,需要手动安装 mongodb模块
 */

// 1.创建 MongoClient 对象
var MongoClient = require('mongodb').MongoClient;

// 2.设置请求的 url
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // 创建数据库
    var dbo = db.db("ssy");
    // 设置插入的数据

    var myobj = [
        {
            name: "司马光",
            age: 18,
            job:"砸缸"
        },
        {
            name:"刘备",
            age:20,
            job:"皇叔"
        }
    ];

    // 创建集合,并插入数据
    dbo.collection("user").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        // 插入成功,关闭数据库
        db.close();
    });
});