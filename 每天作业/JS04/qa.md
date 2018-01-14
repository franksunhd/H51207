# 点击换图片的思路
	1. demo.src.match() 匹配 src 属性的值
	2. 状态取反
		var open = false;
		onclick = function(){
			open = !open;
			light.src = open ? "src..." : "src..."
		}
	3.自定义属性
		light.on = false;