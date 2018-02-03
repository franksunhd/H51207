$(function() {
	// 默认第一张显示,其他隐藏
	$(".img").eq(0).show().siblings().hide();

	// 获取下标
	var i = 0;
	var len = $(".img").length;
	var timer;

	// 页面加载完毕,添加btn按钮
	$(".imgbg").append("<div class='btns'><div class='btn_left'><</div><div class='btn_right'>></div></div>");
	$(".imgbg").append("<div class='tabs'></div>");
	// 自动加载轮播
	for (var j = 0; j < len; j++) {
		$(".tabs").append("<div class='tab'></div>");
	}
	// 默认第一个加载白色背景
	$(".tabs .tab").eq(0).addClass("bg");


	// 实现页面加载就开始图片的切换效果
	showTime();
	// 鼠标移到轮播区域 清除轮播效果
	$(".imgbg").mouseover(function() {
		clearInterval(timer);
		console.log("清除轮播效果");
	}).mouseout(function() {
		showTime();
		console.log("开始轮播效果");
	});

	$(".tab").click(function() {
		// 点击之前先清除定时器
		clearInterval(timer);
		// 获取当前背景下标
		i = $(this).index();
		show();
	});

	$(".btn_left").click(function(){
	    clearInterval(timer);//清除轮播
	    if(i == 0)
	    {
	      i=6;
	    }
	    i--;
	    show();
	  });

	$(".btn_right").click(function(){
	    clearInterval(timer);//清除轮播
	    if(i == 5)
	    {
	      i = -1;
	    }
	    i++;
	    show();
	  });

	// 封装一个函数 实现检测页面到最后一个切换到第一个
	function showTime() {
		timer = setInterval(function() {
			i++;
			if (i == len) {
				i = 0;
			}
			show();
		},3000)
	}

	// 封装一个函数 实现切换图片和按钮背景切换
	function show() {
		$(".img").eq(i).fadeIn(600).siblings().fadeOut(600);
		$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
	}
});
