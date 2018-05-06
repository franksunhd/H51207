/*
 * 使用：
如果delta的值是负的即-1，那么滚轮就是向下滚动，正的1就是向上。
			div2.mouswheel(function(event, delta){
				console.log(this);
				if(delta > 0){
					console.log("上滚动");
				}else{
					console.log("下滚动")
				}
				console.log(delta);
			});
 */


HTMLElement.prototype.mouswheel = function(callback) {
	//浏览器
	var agent = userAgent();
	
	if(agent === "Firefox"){
		this.addEventListener("DOMMouseScroll",wheel);
	}else{
		this.onmousewheel = wheel;
	}
	
	function wheel(ev){
		ev = ev || window.event;
		
		//这个值：-1代表下！！！    1代表上
		var delta = 0;
		
		if (ev.detail) {//火狐
			delta = ev.detail > 0 ? -1 : 1;
			
		}else{//谷歌
			//下：-120.  上：120
			delta = ev.wheelDelta > 0 ? 1 : -1;
		}
		
		//回调
		callback&&callback.call(this,ev,delta);
		
		ev.preventDefault();
	}
	

};

//返回当前用的是什么浏览器
function userAgent() {
	//
	"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.101 Safari/537.36"
	var browser = navigator.userAgent; //

	//alert(browser.indexOf("AChrome"));// 找到返回下标，没有返回-1，  只要不是-1，就肯定包含
	var isChome = browser.indexOf("Chrome") > -1; //
	if(isChome) {
		return "Chrome";
	}

	var isFF = browser.indexOf("Firefox") > -1;
	if(isFF) {
		return "Firefox";
	}

	var isSafari = browser.indexOf("Safari") > -1;
	if(isSafari) {
		return "Safari";
	}

	var isOpera = browser.indexOf("Opera") > -1;
	if(isOpera) {
		return "Opera";
	}

	var isOpera = browser.indexOf("compatible") > -1 && browser.indexOf("MSIE") > -1;
	if(isOpera) {
		return "IE";
	}

}