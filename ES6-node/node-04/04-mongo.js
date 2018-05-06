// 引入 mongoose
var mongoose = require('mongoose');

// 使用 mongoose 链接数据库 默认连接的是 test 数据库
// 可以自定义链接的数据库,直接在链接数据库的后面加上数据库的名字
mongoose.connect('mongodb://127.0.0.1:27017/ssy');

// 判断是否链接成功
mongoose.connection.on('error',function(err){
   console.error('链接数据库失败!');
});
mongoose.connection.on('open',function(){
    console.log('链接数据库成功!');
});

// Schema 以文件形式存储的 数据模型骨架
var aaSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number,default:100}
},{
    collection:'user'
});

// Model: 由 Schema 构造生成的模型
var Model = mongoose.model('user',aaSchema);

// 创建一个数据
// Model.create({name:'李云龙',age:50},function(err,doc){
//     if(err) console.error("创建失败!");
//     console.log(doc);
// });

// 更新数据
// Model.update({name:'李云龙'},{$set:{age:10}},{multi:true},function(err,){
//     if(err) console.log("更新失败");
//     console.log("更新成功");
// });

// 删除数据
// Model.remove({name:'李云龙'},function(err){
//     if(err) console.error("删除失败");
//     console.log("删除成功!");
// });

// 查询数据 第一个参数代表查询条件,如果为空,代表查询全部
// Model.find({},function(err,doc){
//     if(err) console.log("查询失败");
//     console.log(doc);
// });

// 查询单条数据,默认查询第一条
// Model.findOne({},function(err,doc){
//     if(err) console.log("查询失败");
//     console.log(doc);
// });

// 根据 id 查询
// Model.findById("5abc65db11a3171b66f761b4",function(err,doc){
//     if(err) console.log("查询失败");
//     console.log(doc);
// });

// 条件查询 大于和小于
// Model.find({age:{$lt:100}},function(err,doc){
//     if(err) console.log("查询失败");
//     console.log(doc);
// });


// 不等于
// Model.find({age:{$ne:20}},function(err,doc){
//     if(err) console.log("查询失败");
//     console.log(doc);
// });

// 或者 $or 查询的条件都写在数组里面
// Model.find({$or:[{name:'悟空'},{name:'八戒'}]},function(err,doc){
//     if(err) console.log("查询失败");
//     console.log(doc);
// });

// 并且 $and
// Model.find({$and:[{name:'悟空'},{age:119}]},function(err,doc){
//     if(err) console.log("查询失败");
//     console.log(doc);
// });

// 查询前N条
// Model.find({},null,{limit:3},function(err,doc){
//     if(err) console.log("查询失败");
//     console.log(doc);
// });

// 查询跳过N条开始
// Model.find({},null,{skip:3},function(err,doc){
//     if(err) console.log("查询失败");
//     console.log(doc);
// });

// 查询跳过 N条之后的 M条
// Model.find({},null,{skip:3,limit:3},function(err,doc){
//     if(err) console.log("查询失败");
//     console.log(doc);
// });

// 排序 sort 1代表升序 -1代表降序
Model.find({},null,{sort:{name:1}},function(err,doc){
    if(err) console.log("查询失败");
    console.log(doc);
});