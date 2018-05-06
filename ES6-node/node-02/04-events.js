/*
    events 事件模块
    又叫观察者模式, 类似 js 中的绑定
     又叫发布订阅模式 类似 js 中的监听
 */

// 引入事件模块
var event = require('events');
// 所创建的对象,要使用 event 中的方法,可以使用 util 中的继承方法来完成
var util = require('util');

// 创建一个女孩对象
function Girl(name) {
    this.name = name;
};
// 创建一个男孩对象
function Boy(name,res) {
    this.name = name;
    this.res = res;
};

// 给女孩加事件,要继承 event 的事件
util.inherits(Girl,event);

// 实例化一个小乔
var xiaoqiao  = new Girl('小乔');

// 实例化 boy
var caocao = new Boy('曹操',function () {
    console.log('曹操兵发东吴,抢小乔!');
});

var zhouyu = new Boy('周瑜',function () {
    console.log('周瑜火烧赤壁,救小乔!')
});


// 设置最大的监听数量.可以设置绑定 某一个事件 的最大的值
// xiaoqiao.setMaxListeners(2);
// 设置小乔出嫁事件
xiaoqiao.addListener('chujia',function () {
    console.log("小乔出嫁了!");  // 小乔出嫁了
});
xiaoqiao.addListener('chujia',caocao.res);  // 曹操兵发东吴,抢小乔
xiaoqiao.addListener('chujia',zhouyu.res);  // 周瑜火烧赤壁,救小乔
xiaoqiao.addListener('chujia',function () {
    console.log("小乔伤心欲绝,出家了!");  // 小乔伤心欲绝,出家了
});

xiaoqiao.addListener('huijia',function () {
    console.log("左手一只鸡,右手一只鸭!");
});

// once 只执行一次, 该方法指的是执行的时候执行代码只执行一次
xiaoqiao.once('over',function () {
    console.log('曹操败走华容道!');
});
xiaoqiao.once('over',function () {
    console.log('Game Over!');
});

// 解除绑定
xiaoqiao.removeListener('chujia',caocao.res);
xiaoqiao.removeListener('chujia',zhouyu.res);

// 解除出嫁
xiaoqiao.removeAllListeners('chujia');

// 执行出嫁事件
xiaoqiao.emit('chujia');
xiaoqiao.emit('over');  // 曹操败走华容道
xiaoqiao.emit('over');  // Game Over

