$(function() {
    // 上下滑动
    var pageIndex = 0;
    touch.on('body','swipeup swipedown',function(e) {
	if (e.type=='swipeup') {
	    pageIndex++;
	    pageIndex = (pageIndex > $('.page').length-1) ? $('.page').length-1 : pageIndex;
	}else if(e.type=='swipedown'){
	    pageIndex--;
	    pageIndex = (pageIndex < 0) ? 0 : pageIndex;
	}
	showPage(pageIndex);
    })


    // 第一页
    var imgs01 = $('#page01 .top .fnear');
    imgs01.each(function(i,v) {
        $(this).css({
	    animation: 'fromNear 2s linear '+ (3+i*0.5) +'s normal both',
	})
    });

    // 第二页
    var picNum = 1;
    setInterval(function() {
        $('#page02 .diqiu').attr('src','images/diqiu/'+picNum +".jpg");
    	picNum++;
    	if (picNum == 48) {
    	    picNum = 1;
    	}
    },50);

    // page 03


    // page 04


    // page 05



    // 音乐播放
    var music = document.getElementById('music');
    var musicTimer; // 控制音乐播放
    touch.on('#music-pic','tap',function(e) {
	if(music.paused){
	    music.play();
	    $(this).attr('src','images/music-on.png');
	    initMusic();
	}else{
	    music.pause();
	    $(this).attr('src','images/music-off.png');
	    clearInterval(musicTimer);
	}
    });

    // 初始化音乐
    function initMusic() {
	clearInterval(musicTimer);
	var deg = 0;
	musicTimer = setInterval(function() {
	    $('#music-pic').css({
		'transform':'rotate('+deg*10+'deg)',
	    });
	    deg++;
	    if (deg == 36) {
		deg = 0;
	    }
	},100);
    }

    function showPage(index) {
        for(var i = 0; i < $('.page').length; i++) {
	    $('.page')[i].style.display = 'none';
	}
	$($('.page')[index]).show();
	switch (index){
	case 1:{
	    page2();
	    break;
	}
	case 2:{
	    page3();
	    break;
	}
	case 3:{
	    page4();
	    break;
	}
	case 4:{
	    page5();
	    break;
	}
	}
    }

    function page2() {
        $('#page02 img:nth-child(2)').css({
	    animation: 'p2-fromRight 1s linear 0s normal both',
	})
	$('#page02 img:nth-child(3)').css({
	    animation: 'p2-fromLeft 1s linear 0s normal both',
	})
    }

    var moveTimer;
    function page3() {
	var positions = [
	    [10,25],
	    [30,80],
	    [75,25],
	    [10,50],
	    [25,5],
	    [40,50],
	    [53,5],
	    [70,50],
	];

	$('#page03 div').each(function(i,v) {
	    var temp = $(this);
	    temp.find('img').css({
		top: positions[i][0] + 'vh',
		left: positions[i][1] + 'vw',
		// transform: 'rotate('+ranNum(-15,15)+'deg)',
	    });
	    var i = 2;
	    var position = temp.position();
	    var rangX = [position.left -10 , position.left +10];
	    var rangY = [position.top -10, position.top + 10];
	    var changeFlag = false;
            moveTimer = setInterval(function() {
		if (changeFlag) {
		    temp.animate({
			left: temp.position().left + i,
			top: temp.position().top - i,
		    },3000);
		}else{
		    temp.animate({
			left: temp.position().left - i,
			top: temp.position().top + i,
		    },3000);
		}
		if (temp.position().left < rangX[0] || temp.position().left > rangX[1] ||
		    temp.position().top < rangY[0] || temp.position().top > rangY[1]) {
		    changeFlag = !changeFlag;
		}
	    },5000);

	});
    }

    function page4() {
	// top(vh) left(vw) width(px) height(px) color
	var positions = [
	    [13,37,60,60,'rgb(150,150,150)'],
	    [22,7,80,80,'rgb(210,210,100)'],
	    [20,69,70,70,'rgb(100,220,200)'],
	    [42,18,70,70,'rgb(100,220,100)'],
	    [43,65,60,60,'rgb(100,120,220)'],
	    [59,14,70,70,'rgb(240,240,120)'],
	    [60,76,70,70,'rgb(130,250,180)'],
	    [70,36,70,70,'rgb(240,250,130)'],
	];
	$('#page04 .show img').each(function(i,v) {
	    if (i > 7) {
		return;
	    }
            $(this).delay(i*200).animate({
		top: positions[i][0] +'vh',
		left: positions[i][1] + 'vw',
		width: positions[i][2],
		height: positions[i][3],
	    },500);
	    $('#page04 .show div').eq(i).css({
    		opacity: 0,
    		position: 'absolute',
    		top: positions[i][0] +'vh',
    		left: positions[i][1] + 'vw',
    		width: positions[i][2],
    		height: positions[i][3],
    		borderRadius: '50%',
    		backgroundColor: positions[i][4],
	    });
	});
	/*
	  setTimeout(function() {
	  console.log('abc');
          $('page04 #p04-taptip').css('display','block');
	  },3000)
	*/
	var mySwiper = new Swiper('#page04 .swiper-container',{
	    pagination : '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
	    loop: true,
	});

	$('#page04 .show img').on('click',function() {
	    var src = $(this).attr('src');
	    var temp = src.slice(src.indexOf('-p')+2).replace('.png','');
	    var t = parseInt(temp);
	    generateImg(t);
	    var w = $(window).width();
	    var h = $(window).height();
            // $('#page04 .detail').show();
	    $('#page04 .show img').each(function(i,v) {
		if(i > 7){
		    return;
		}
		$(this).css({
		    top : positions[i][0] * h / 100 + positions[i][3] / 4,
		    left: positions[i][1] * w / 100 +  positions[i][2] / 4,
		    width: $(this).width() / 2,
		    height: $(this).height() / 2,
		    opacity: 0,
		});
	    });
	    $('#page04 .show div').each(function(i,v) {
		$(this).animate({
		    opacity: 1,
		    top : positions[i][0] * h / 100 + positions[i][3] / 4,
		    left: positions[i][1] * w / 100 +  positions[i][2] / 4,
		    width: $(this).width() / 2,
		    height: $(this).height() / 2,
		},1000);
	    });
	    $('#page04 .detail').animate({
    		top:'20vh',
    		left: '0',
    		width: '100vw',
    		height: '60vh'
	    },1000);
	});

	$('#page04 .leftArr').on('click',function() {
	    var src = $('#page04 .next').attr('src');
	    var index = src.slice(src.indexOf('-p0')+2).replace('-d.png','');
	    index = parseInt(index);
        changeImg(index,'left');
	});
	$('#page04 .rightArr').on('click',function() {
	    var src = $('#page04 .pre').attr('src');
	    var index = src.slice(src.indexOf('-p0')+2).replace('-d.png','');
	    index = parseInt(index);
	    changeImg(index,'right');
	});

	function generateImg(index) {
	    	    console.log('generate' + index);
            var arr = [];
	    arr[1] = index;
	    arr[0] = (index == 1) ? 8 : index - 1;
	    arr[2] = (index == 8) ? 1 : index + 1;
	    $('#page04 .detail .pre').attr('src','images/p04-p0'+arr[0]+'-d.png');
	    $('#page04 .detail .now').attr('src','images/p04-p0'+arr[1]+'-d.png');
	    $('#page04 .detail .next').attr('src','images/p04-p0'+arr[2]+'-d.png');

	    $('#page04 .detail .pre').css({
		marginLeft: '-100%'
	    });
	    $('#page04 .detail .now').css({
		marginLeft: '0'
	    });
	    $('#page04 .detail .next').css({
		marginLeft: '100%'
	    });

	}

	function changeImg(index,direction) {
	    if (direction == 'left') {
    		$('#page04 .now').animate({
    		    marginLeft: '-100%',
    		},300);
    		$('#page04 .next').animate({
    		    marginLeft: '0',
    		},300);
		    generateImg(index);
	    }else if(direction == 'right'){
    		$('#page04 .now').animate({
    		    marginLeft: '100%',
    		},300);
    		$('#page04 .pre').animate({
    		    marginLeft: '0',
    		},300);
	    }
	    setTimeout(function() {
		    generateImg(index);
	    },600);

	}

	$('#page04 .close').on('click',function() {
	    // $('#page04 .show').show();
	    $('#page04 .show div').each(function(i,v) {
		console.log(i);
		$(this).css({
		    opacity: 0,
		    top : positions[i][0] +'vh',
		    left: positions[i][1] +'vw',
		    width: positions[i][2],
		    height: positions[i][3],
		});
	    });
	    $('#page04 .show img').each(function(i,v) {
		if(i> 7){
		    return;
		}
		$(this).animate({
		    opacity: 1,
		    top : positions[i][0] +'vh',
		    left: positions[i][1] + 'vw',
		    width: positions[i][2],
		    height: positions[i][3],
		},1000);
	    })
		// $('#page04 .detail').css('display','none');
		$('#page04 .detail').animate({
		    top: '45vh',
		    left: '48vw',
		    width: 0,
		    height: 0,
		},1000);
	});
    }

    function page5() {
	$('#page05 .item').on('click',function() {
	    var src = $(this).find('img:nth-child(2)').attr('src');
	    var newSrc = src.replace('.jpg','-d.jpg');
	    $('#page05 .detail img:nth-child(1)').attr('src',newSrc);
	    $('#page05 .detail').css({
		width: 0,
		height: 0,
		top: $(this).position().top,
		left: $(this).position().left,
	    });
	    $('#page05 .detail').animate({
		width: '94%',
		height: '80vh',
		top: '10vh',
		marginLeft: '3%',
		left: 0,
		// animation: 'detailMove 1s linear 0s',
	    },500);
            $('#page05 .detail').show();
	});
	$('#page05 .detail .close').on('click',function() {
            $(this).parent().hide();
	});
	$('#page05 #p05-words').animate({
	    opacity: 1,
	},2000);
	var imgs = $('#page05 .item');
	for(var i = 10; i > 0; i--) {
	    $('#page05 .item:nth-child('+i+')').delay(i*500).animate({
		opacity: 1,
	    },1000);
	    $('#page05 .item:nth-child('+i+') img:nth-child(1)').delay(i*500).animate({
		opacity: 1,
		width: 88,
	    },2000);
	    $('#page05 .item:nth-child('+i+') img:nth-child(2)').delay(i*500).animate({
		left: -3,
		top: 4,
	    },2000);
	}
	// $('#page05 #p05-taptip').delay(3000).show();
    }

    initMusic();

    function ranNum(min,max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});
