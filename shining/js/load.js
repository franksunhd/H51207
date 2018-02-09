
// 图片全部路径
var imgArr = ["./img2/P_000.jpg","./img2/P_001.jpg","./img2/P_002.jpg",
"./img2/P_003.jpg","./img2/P_004.jpg","./img2/P_005.jpg","./img2/P_006.jpg",
"./img2/P_007.jpg","./img2/P_008.jpg","./img2/P_009.jpg","./img2/P_010.jpg"];

var ulArr = document.querySelectorAll("#loadBox ul");

// 创建方法
var i = 0;
function createItem(length) {
	i++;
	if (i > length) {
		return;
	}
	var item = document.createElement("li");
	var itema = document.createElement("a");
	itema.href = "#";
	// item.innerText = i;
    var img = document.createElement("img");
	img.src = imgArr[randomNumber(0,10)];

	var maskDiv = document.createElement("div");
	maskDiv.className = "list-mask";
	var fangdaImg = document.createElement("img");
	fangdaImg.src = "./img/fangda.png";

	maskDiv.appendChild(fangdaImg);
	itema.appendChild(img);
	itema.appendChild(maskDiv);
	item.appendChild(itema);
    // 预加载图片
	img.onload = function() {
		ulArr[getMinIndex()].appendChild(item);
        // 加载下一张
        /*
        	递归调用,必须要 return 停止
        	第一次执行到递归调用后,会停止在该位置,
       	 	等待第二次执行结束,第二次等待第三次,
        	直到最后一次函数被 return 结束,
         	倒序 n次 10,9,8...2,1;结束函数
         */
        createItem(length);
	}
}

createItem(50);


window.onscroll = function() {
    // 当显示到最短一列,再次加载100个
    // 当滚动距离+可视窗口高度 == 最短列的高度 加载
	var value = getScrollTop() + clientHeight();
	console.log(value);

    // 获取最小一列下标
    var minIndex = getMinIndex(ulArr);
    // 获取元素的最小高度
	var minHeight = ulArr[minIndex].offsetHeight;
	// 返回元素到页面顶部的距离
	var offTop = getOffsetTop(ulArr[minIndex]);

	if (value >= (minHeight + offTop)) {
		// console.log("时机到了",value,"--",minHeight);
		// createItem(50);
	}
};

// 返回元素到页面顶部的距离
function getOffsetTop(ele) {
	if (ele.nodeName == "BODY") {
		return 0;
	}
	var top = 0;
	while (true) {
		top += ele.offsetTop + ele.offsetParent.clientTop;
		ele = ele.offsetParent;
        // 如果是 body 停止
		if (ele.offsetParent == null)break;
	}
	return top;
}

// 获取页面的滚动距离
function getScrollTop() {
    // 获取:
    // 必有一个为 0,所以可以两个值相加
	// return document.documentElement.scrollTop + document.body.scrollTop;
	return document.documentElement.scrollTop || document.body.scrollTop;
}

// 获取浏览器可视窗口的高度
function clientHeight() {
	return window.innerHeight || document.documentElement.clientHeight;
}

// 找最小高度
function getMinIndex() {
	// ulArr[0].offsetHeight
	var minIndex = 0;
	for (var i = 1; i < ulArr.length; i++) {
		minIndex = ulArr[minIndex].offsetHeight > ulArr[i].offsetHeight ? i : minIndex;
	}
	return minIndex;
}

function randomColor() {
	var r = parseInt(Math.random()*256);
	var g = parseInt(Math.random()*256);
	var b = parseInt(Math.random()*256);
	var a = Math.random();
	return "rgb(" + r + "," + g +  ","+ b +")";
}

// 包含 a,b
function randomNumber(a, b){
	var max = Math.max(a, b);
	var min = Math.min(a, b);
	return parseInt(Math.random() * (max - min + 1) + min);
}
