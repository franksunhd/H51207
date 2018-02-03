
// 1.依赖 tween.js

// 2.参数列表:
// ese: 需要移动的元素对象
// pro: 需要改变的元素的属性,
// t,b,c,d
// callback:完成后的回调函数

function move(ele,pro,t,b,c,d,callback) {
	// ele.timerId  使用 this.timerId也可以
	clearInterval(ele.timerId);
	ele.timerId = setInterval(function(){
		t += 2;
		var value = Tween.Back.easeInOut(t,b,c,d);
		// var value = Tween.Linear(t,b,c,d);
		// console.log(value);
		// 判断是否添加单位
		var unit = pro === "opacity" ? "" : "px";
		// 通过变量访问属性
		ele.style[pro] = value + unit;
		// 初始时间 === 持续时间 代表运动结束
		if(t >= d) {
			clearInterval(ele.timerId);
			// 防止超出:b + c = 终点位置
			ele.style[pro] = b + c + unit;
			// 1. 三目运算原理
			// typeof callback == "function" ? callback() : null;

			// 2.与电路 短路现象原理
			typeof callback == "function" && callback();
		}
	},20);
}
