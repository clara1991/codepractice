"use strict";

$(function(){
	var my_jd_con = $("#js_myJd_con");
	$("#js_myJd").mouseover(function(){
		$(this).css("background","#fff");
		my_jd_con.removeClass("hide").addClass("js_myJd_con");
	}).mouseout(function(){
		$(this).css("background","none");
		my_jd_con.removeClass("js_myJd_con").addClass("hide");
	})
	var wap_nav=$("#js_nav");
	$("#js_wapnav").mouseover(function(){
		$("this").css("background","#fff");
		wap_nav.removeClass("hide").addClass("js_nav");
	})
	.mouseout(function(){
		$("this").css("background","none");
		wap_nav.removeClass("js_nav").addClass("hide");
	})
	$(".choiceitem").mouseover(function(){
		$("#choicemore").show();
	}).mouseout(function(){
		$("#choicemore").hide();
	})
	var entry = $(".service_entry"),
	    detail = $(".service_detail");
	$(".service_item").mouseenter(function(){
		entry.hide();
		detail.show();
	});
	$("#js_service_close_btn").click(function(){
		detail.hide();
		entry.show();
		return false;
	});
})


