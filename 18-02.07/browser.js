
/*
 * 封装函数判断 浏览器
 */
function myBrowser() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isOpera = userAgent.indexOf("Opera") > -1;
	if(isOpera) {
		return "Opera"
	}; //判断是否Opera浏览器
	if(userAgent.indexOf("Firefox") > -1) {
		return "FF";
	} //判断是否Firefox浏览器
	if(userAgent.indexOf("Chrome") > -1) {
		return "Chrome";
	}
	if(userAgent.indexOf("Safari") > -1) {
		return "Safari";
	} //判断是否Safari浏览器
	if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
		return "IE";
	}; //判断是否IE浏览器
}
/*
//以下是调用上面的函数
var mb = myBrowser();
if("IE" == mb) {
	// IE
}
if("FF" == mb) {
	// 火狐
}
if("Chrome" == mb) {
	// 谷歌
}
if("Opera" == mb) {
	// Opera
}
if("Safari" == mb) {
	// Safari
}
*/