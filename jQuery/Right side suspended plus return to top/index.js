$(function(){
	$(".item-weixin").mouseover(function(){
		$(this).css({"backgroundPosition":"0 -860px"});
		$(this).find("span").addClass("toolbar-layer").show();
	}).mouseout(function(){
		$(this).css({"backgroundPosition":"0 -798px"});
		$(this).find("span").removeClass("toolbar-layer");
	});
	//
	$(".item-feedback").mouseover(function(){
		$(this).css({"backgroundPosition":"0 -488px"});
	}).mouseout(function(){
		$(this).css({"backgroundPosition":"0 -426px"});
	});
	//
	$(".item-app").mouseover(function(){
		$(this).css({"backgroundPosition":"0 -612px"});
		$(this).find("span").addClass("toolbar-layer").show();
	}).mouseout(function(){
		$(this).css({"backgroundPosition":"0 -550px"});
		$(this).find("span").removeClass("toolbar-layer");
	});
	//
	$(".item-top").mouseover(function(){
		$(this).css({"backgroundPosition":"0 -736px"});
	}).mouseout(function(){
		$(this).css({"backgroundPosition":"0 -674px"});
	});
})