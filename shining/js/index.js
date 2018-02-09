var NavA = document.querySelectorAll(".head-nav > div > a");
for (var i = 0; i < NavA.length; i++) {
	NavA[i].onclick = function() {
		$(this).addClass("nav-active").parent().siblings().children().removeClass("nav-active");
	}
}
