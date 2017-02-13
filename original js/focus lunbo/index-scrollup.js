var $get  = function(el){return document.getElementById(el);}
var oSpan = document.getElementsByTagName("span");
var oImg  = document.getElementById("imglink").getElementsByTagName("img");

var arrow_next = $get("js_next"),
	arrow_prev = $get("js_prev");

var current_idx = 0;	

for (var i = 0; i < oSpan.length; i++) {
	(function(idx){        
        oSpan[i].onmouseover = function() {         
        	$get("imglink").style.top = -306*idx+'px';
        	for (var i = 0; i < oImg.length; i++) {
        		oSpan[i].className = "";	
        		if(idx == i) {	
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

arrow_next.onclick = function(){
	arrowShow();
}
setInterval('arrowShow()',4000);
function arrowShow(){
	if(current_idx == (oImg.length -1)){
		oSpan[current_idx].className  = ""; 
		current_idx = 0;
		$get("imglink").style.top = 0;
		oSpan[current_idx].className  = "on"; 
		return false;
	}
	oSpan[current_idx].className  = "";
	current_idx ++ ;
	$get("imglink").style.top = -306*(current_idx)+'px';
	oSpan[current_idx].className= "on";	
}
arrow_prev.onclick =function(){
	if(current_idx == 0){
		oSpan[current_idx].className  = ""; 
		current_idx = oImg.length -1;
		$get("imglink").style.top = -306*(current_idx)+'px';
		oSpan[current_idx].className  = "on"; 
		return false;
	}
	oSpan[current_idx].className= "";
	current_idx -- ;
	$get("imglink").style.top = -306*(current_idx)+'px';
	oSpan[current_idx].className  = "on"; 			
}