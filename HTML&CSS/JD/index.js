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

})