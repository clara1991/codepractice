$(function() {
	/**var lookContrast=$(".Contrast p");
	$(".Contrast").mouseover(function(){
		lookContrast.removeClass("hide");
	})
	$("li:odd").mouseover(function(){
		$("li:odd p").css("background","blue");
	})
	$("li:even").mouseover(function(){
		$("li:even p").css("background","red");
	})
**/
	$(".contrast").mouseover(function(){
		var _this = $(this),
			colors = ['#FF1493','#FFFF00','#FF0000','#BFEFFF','#7FFFD4','#7A378B','#0000CD'];

		if(parseInt(_this.find("p").css("width"))>0){
			return false;
		}
		$(this).find("i").each(function(k){
			var wp = $(this).html() || 0;
			var width = 5 * parseInt(wp) +"px";
			$(this).prev().css({
				"width"			  : width,
				"background-color": colors[Math.ceil(Math.random()*6)]
			})
		});
		// _this.find("li:even p").css({
		// 	"background":"red"
		// });
		// _this.find("li:odd p").css({
		// 	"background":"blue"
		// });
	})
})