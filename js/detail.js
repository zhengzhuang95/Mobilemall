$(document).ready(function() {
	//规格数量页面显示与隐藏
	$("#norms").click(function() {
		$("#detail-t").hide();
		if($("#model").show()) {
			$("#bg").css('display', 'none');
		}
		if($("#model").hide()) {
			$("#bog").css('display', 'block');
			$("#model").show();
		}
	});
	$("#bog").click(function() {
		$("#detail-t").show();
		if($("#model").show()) {
			$("#bg").css('display', 'block');
		}
		if($("#model").hide()) {
			$("#bog").css('display', 'none');
			$("#model").hide();
		}
	});
	//选着规格
	$("#normt").find("li").click(function() {
		$(this).addClass("xz").siblings().removeClass("xz");
		$("#choose-name").html($(this).text());
		$("#norms").find("span").html($(this).text());
	});
	//货物数量变化
	$("#numberja").find("a").click(function() {
		var oldValue = parseInt($("#number").find(".sr").find("input").val());
		oldValue++;
		$("#number").find(".sr").find("input").val(oldValue);
	});

	$("#numberj").find("a").click(function() {
		var oldValue = parseInt($("#number").find(".sr").find("input").val());
		oldValue--;
		if(oldValue > 0) {
			$("#number").find(".sr").find("input").val(oldValue);
		};
	});

});