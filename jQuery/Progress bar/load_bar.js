var t;
$(function(){
	$("html").mouseover(function(){
		 $(".load_bar_inner").css({"width":"500px"});
		 $("#counter").css({"left":"475px"});
		 t = setInterval("time()",50);
	});
});

function time(){
	var i = parseInt($("#counter").text());
    if (i==100){
    	clearInterval(t);
    	return;
    }
    $("#counter").text((i+1)+"%");
}











// function time(){
// 	var i=parseInt($("#counter").html());
// 	if(i == 100){
// 		clearInterval(t);
// 		return;
// 	}
// 	$("#counter").html((i+1) + "%");
// }