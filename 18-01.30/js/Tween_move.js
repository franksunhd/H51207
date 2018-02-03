
// 1.依赖 tween.js

// 2.参数列表:
// ese: 需要移动的元素对象
// pro: 需要改变的元素的属性,
// t,b,c,d
// callback:完成后的回调函数


/*
 * 解决全局变量过多的声明,污染全局区
 */

// 1.
var MOVE = {
	run:function(ele,pro,t,b,c,d,callback) {
		// ele.timerId  使用 this.timerId也可以
		clearInterval(window.timerId);
		window.timerId = setInterval(function(){
			t += 2;
			var value = Tween.Back.easeInOut(t,b,c,d);
			// var value = Tween.Linear(t,b,c,d);
			// console.log(value);

			if (pro === "scrollTop") {
				MOVE.setScrollTop(value);
			} else {
				// 判断是否添加单位
				var unit = pro === "opacity" ? "" : "px";
				// 通过变量访问属性
				ele.style[pro] = value + unit;
			}

			// 初始时间 === 持续时间 代表运动结束
			if(t >= d) {
				clearInterval(window.timerId);
				// 防止超出:b + c = 终点位置
				if (pro === "scrollTop") {
					MOVE.setScrollTop(b + c);
				} else {
					ele.style[pro] = b + c + unit;
				}
				// 1. 三目运算原理
				// typeof callback == "function" ? callback() : null;

				// 2.与电路 短路现象原理 有 callback 并且为 function 才执行回调
				typeof callback == "function" && callback();
			}
		},20);
	},

	setScrollTop:function(value) {
		// 设置
		document.body.scrollTop = document.documentElement.scrollTop = value;
	},

	getScrollTop:function() {
		// 获取:
		// 必有一个为 0,所以可以两个值相加
		// return document.documentElement.scrollTop + document.body.scrollTop;
		return document.documentElement.scrollTop || document.body.scrollTop;
	}
}
