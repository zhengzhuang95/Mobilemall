$(document).ready(function() {
	//首页导航点击显示分类
	$('#menu').click(function() {
		$(this).toggleClass("active"); //更换图标
		$(".classifl-o").slideToggle();
	});

});