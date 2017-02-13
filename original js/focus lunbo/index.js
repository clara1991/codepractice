var $get  = function(el){return document.getElementById(el);};
var oSpan = document.getElementsByTagName("span");
var oImg  = document.getElementById("imglink").getElementsByTagName("img");
var len   = oSpan.length;

var arrow_next = $get("js_next"),
	arrow_prev = $get("js_prev");

var current_idx = 0;	

for (var i = 0; i < oSpan.length; i++) {
	(function(idx){        
        oSpan[i].onclick = function() {         
        	for (var i = 0; i < oImg.length; i++) {
        		oImg[i].className= "hide";
        		oSpan[i].className= "";	
        		if(idx == i) {
        			oImg[i].className = " ";
        			this.className = "on";
        			current_idx = i;
        		}
        	};   	     
    	};     
	})(i);
}
$get("slider").onmouseenter = function(){
	arrow_next.style.opacity = 1;
	arrow_prev.style.opacity = 1;
}
$get("slider").onmouseleave = function(){
	arrow_next.style.opacity = 0;
	arrow_prev.style.opacity = 0;
}
// setInterval('arrowShow()',5000);
function arrowShow(flag){
	oImg[current_idx].className   = "hide";
	oSpan[current_idx].className  = "";
	if(flag =="right"){
		current_idx=(current_idx+1)%len; 
	}else{
		current_idx=(current_idx+len-1)%len;
	}
	oImg[current_idx].className = "";
	oSpan[current_idx].className= "on";
}
arrow_next.onclick = function(){arrowShow("right")};
arrow_prev.onclick = function(){arrowShow("left")};
