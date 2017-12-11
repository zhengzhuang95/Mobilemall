$(document).ready(function() {
	//点击商品选中与取消
	$("#cart").find("dt").click(function() {
		$(this).toggleClass("cart-t-y");
	});
	//点击编辑进行编辑选项
	$("#editor").click(function() {
		if($(this).find("a").text() == "编辑") {
			$(this).find("a").text("完成");
			$("#cart").find(".name").find(".name-t-l").css("display", "none").siblings(".name-t-r").css("display", "block");
			$("#cart").find(".name").find(".xh").addClass("xh-m");
			$("#cart").find(".name").find(".sul").css("display", "block");
			$("#buy").find(".buy-x").hide().siblings(".buy-s").show();
		} else {
			$(this).find("a").text("编辑");
			$("#cart").find(".name").find(".name-t-l").css("display", "block").siblings(".name-t-r").css("display", "none");
			$("#cart").find(".name").find(".xh").css("display", "block");
			$("#cart").find(".name").find(".xh").removeClass("xh-m");
			$("#cart").find(".name").find(".sul").css("display", "none");
			$("#buy").find(".buy-x").show().siblings(".buy-s").hide();
		};
	});
	//商品删除
	$("#buy-del").click(function () {
		$("#cart").find(".cart-h").find(".cart-t-y").parent().parent("li").remove();
	});
	//商品数量增加
	$("#cart").find(".name").find(".sul-ja").click(function() {
		var su = parseInt($(this).siblings(".sul-s").find("input").val());
		su++;
		$(this).siblings(".sul-s").find("input").val(su);
		//计算数量
		var $num = $(this).siblings(".sul-s").find("input").val();
		$(this).parent(".sul").parent(".sul-t").siblings(".name-t-l").find(".number").html($num);
	});
	//商品数量减少
	$("#cart").find(".name").find(".sul-jn").click(function() {
		var $su = parseInt($(this).siblings(".sul-s").find("input").val());
		if($su < 2) {
			//alert("数量不能小于1");
		} else {
			var su = parseInt($(this).siblings(".sul-s").find("input").val());
			su--;
			$(this).siblings(".sul-s").find("input").val(su);
		}
		//计算数量
		var $num = $(this).siblings(".sul-s").find("input").val();
		$(this).parent(".sul").parent(".sul-t").siblings(".name-t-l").find(".number").html($num);
	});
	//购物车全选
	$("#buy-l-w").click(function() {
		var o = $(this).hasClass("buy-l-y");
		if(o) {
			$("#cart").find("dt").removeClass("cart-t-y");
			$(this).removeClass("buy-t-y");
		} else {
			$("#cart").find("dt").addClass("cart-t-y");
			$(this).addClass("buy-t-y");
		}
	});
	//地址管理页面
	//删除地址
	$("#list").on("click", "a", function() {
		$(this).parent(".address-c").parent("li").remove();
	});
	//增加地址页面
	$("#address-xj").find(".cancel").click(function() {
		$("#address-xj").css('display', 'none');
		$("#address-t").css('display', 'block');
	});
	$("#address-t").find(".address-new").click(function() {
		$("#address-xj").css('display', 'block');
		$("#address-t").css('display', 'none');
	});
	//新增地址
	$("#address-xj").find(".save").click(function() {
		var $name = $("#address-xj").find(".address-tx").find("#name").val();
		var $number = $("#address-xj").find(".address-tx").find("#number").val();
		var $site = $("#address-xj").find(".address-tx").find("#site").val();
		var $place = $("#address-xj").find(".address-tx").find("#place").val();
		if($name) {
			if($number) {
				if($site) {
					if($place) {
						$("#address-t").find("ul").append("<li><div class='address-c am-cf'><div class='address-name am-fl'><p>" + $name + "</p></div><div class='address-dz am-fl'><p>" + $number + "</p><span>" + $site + "</span></div><a href='javascript:;' class='am-icon-trash address-remove'></a></div></li>");
						$("#address-xj").css('display', 'none');
						$("#address-t").css('display', 'block');
					} else {
						alert("请输入门牌号");
					}
				} else {
					alert("请输入省份");
				}
			} else {
				alert("请输入手机号");
			}
		} else {
			alert("请输入姓名");
		}
	});

});