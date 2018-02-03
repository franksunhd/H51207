var Loading = (function() {
	var Loading = {
		index:0,
		load: function(imgSrc,loadingCallback,success) {
			//var index = 0;
			for(var i = 0; i < imgSrc.length; i++) {
				//每个地址用一个图片对象加载
				var imgObj = new Image();
				//下载
				imgObj.src = imgSrc[i];
				//监听下载完成
				imgObj.onload = function() {
					//完成一张
					Loading.index++;
					//console.log(this.src, Loading.index);
					//下载过程
					
					//progress.innerText = "当前进度：" + Math.ceil(index / imgSrc.length * 100) + "%";
					var value = Math.ceil(Loading.index / imgSrc.length * 100);
					//下载完成一张，回调一次
					//loadingCallback && loadingCallback(value);
					if(loadingCallback && typeof loadingCallback === "function")loadingCallback(value);
					//所有下载完成 - > 进入首页
					if(Loading.index === imgSrc.length) {
						//progress.style.display = "none";
						if(success && typeof success === "function") success();
					}
				};
			}
		}
	}

	return Loading;

})();