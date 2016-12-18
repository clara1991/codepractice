var $get  = function(el){return document.getElementById(el);};
var oSpan = document.getElementsByTagName("span");
var oImg  = document.getElementById("imglink").getElementsByTagName("img");

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
setInterval('arrowShow()',5000);
function arrowShow(){
	if(current_idx == 4){
		oImg[current_idx].className   = "hide"; 
		oSpan[current_idx].className  = ""; 
		current_idx = 0;
		oImg[current_idx].className = "";
		oSpan[current_idx].className= "on";
		return false;
	} 
	oImg[current_idx].className   = "hide"; 
	oImg[current_idx+1].className = "";
	oSpan[current_idx].className  = ""; 	
	oSpan[current_idx+1].className= "on";
	current_idx += 1;
}
arrow_next.onclick = function(){
	arrowShow();
}
arrow_prev.onclick = function(){
	if(current_idx == 0){
		oImg[current_idx].className   = "hide"; 
		oSpan[current_idx].className  = ""; 
		current_idx = oImg.length - 1;
		oImg[current_idx].className = "";
		oSpan[current_idx].className= "on";
		return false;
	} 
	oImg[current_idx].className   = "hide"; 
	oImg[current_idx-1].className = "";
	oSpan[current_idx].className  = ""; 	
	oSpan[current_idx-1].className= "on";
	current_idx -= 1;
}

