
/*
 * 功能: 图片预加载
 * 参数1:图片地址数组
 * 参数2:图片加载回调
 * 参数3:下载完成回调
 */
var Loading = {
	flag:0,
	prepareLoad:function(imgArr,loadingCB,successCB) {

		imgArr.forEach(function(value,index) {
			// console.log(value,index);
            // 每个地址都创建一个对象
			var obj = new Image();
            // 下载
            obj.src = value;

            // 监听下载的完成
			obj.onload = function () {
                // 加一下,代表下载完成一项
				Loading.flag++;

				var Ivalue = Math.ceil((Loading.flag / imgArr.length) * 100);

                // 下载回调
                if(loadingCB && typeof loadingCB == "function")
                loadingCB(Ivalue);

                // 判断执行的数组的 length次
                if (Loading.flag == imgArr.length) {
                		if(successCB && typeof successCB == "function")
					successCB();
                }
			}
		});
	}
};
