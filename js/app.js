(function($) {
	'use strict';

	$(function() {

		var $fullText = $('.admin-fullText');
		$('#admin-fullscreen').on('click', function() {
			$.AMUI.fullscreen.toggle();
		});

		$(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
			$fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
		});
		//商城快报
		function startTicker() {
			$("#news").find("li:first").slideUp(function() {
				$(this).appendTo($("#news")).slideDown();
			});
		}
		setInterval(startTicker, 3000);
		//首页导航点击显示分类
		$('#menu').click(function() {
			$(this).toggleClass("active"); //更换图标
//			$(this).parent().next('.classify').animate({
//				top: "3.3rem"
//			}, 2000);
			$(".classifl-o").slideToggle();
		});

	});
})(jQuery);

//商城限时购倒计时
function times() {
	var settime = new Date(2017, 5, 12, 0, 0, 0); //停止时间
	var time = new Date(); //当前时间
	var limit = settime - time; //剩余时间毫秒数
	var hour = parseInt(limit / (1000 * 60 * 60)); //剩余小时
	var minute = parseInt((limit - (hour * (1000 * 60 * 60))) / (1000 * 60)); //剩余分钟
	var second = parseInt((limit - ((hour * (1000 * 60 * 60)) + (minute * (1000 * 60)))) / 1000); //剩余的秒数
	//	console.log(second);
	if(hour < 10) {
		document.getElementById("hour").innerHTML = ('0' + hour);
	} else {
		document.getElementById("hour").innerHTML = hour;
	};
	if(minute < 10) {
		document.getElementById("minute").innerHTML = ('0' + minute);
	} else {
		document.getElementById("minute").innerHTML = minute;
	};
	if(second < 10) {
		document.getElementById("second").innerHTML = ('0' + second);
	} else {
		document.getElementById("second").innerHTML = second;
	};
};
window.onload = function() {
	setInterval('times()', 1000);
};