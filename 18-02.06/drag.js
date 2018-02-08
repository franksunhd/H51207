/*
 * 
 */

function drag(eles,moveCallback) {
	eles.onmousedown = function(event) {
		event = event || window.event;
		event.preventDefault();
		// 获取鼠标在元素内的坐标
		var disX = event.offsetX;
		// var disY = event.offsetY;

		var disY = event.pageY - getOffsetTop(this);
		// 绑定移动
		document.onmousemove = function(event) {
			event = event || window.event;
			// 优化2
			var leftV = event.pageX - disX;
			var topV = event.pageY - disY;
			eles.style.left = leftV + "px";
			eles.style.top = topV + "px";
			
			//  回调
			moveCallback && moveCallback();
			// if(typeof moveCallback === "function"){
			// 	moveCallback.call(eles,event);				
			// } else if(moveCallback && typeof moveCallback != "function"){
			// 	throw new Error("参数2只能是函数");
			// }
		}

		// 抬起
		document.onmouseup = function() {
			this.onmouseup = this.onmousemove = null;
		}
	}
}

function getOffsetTop(ele) {
	if(ele.nodeName == "BODY") return 0;

	var top = 0;
	while(true) {
		//
		top += ele.offsetTop + ele.offsetParent.clientTop;

		ele = ele.offsetParent;
		//如果是body，停止
		if(ele.offsetParent == null) break;
	}
	return top;
}