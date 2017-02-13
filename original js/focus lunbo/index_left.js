var $getid =function(el){return document.getElementById(el);},
    $gettagname =function(el){return document.getElementsByTagName(el);};
var Zspan = $gettagname("span"),
	Zimg  = $gettagname("img"),
	piclink = $getid('piclink');
var arrow_next = $getid("js_next"),
	arrow_prev = $getid("js_prev");
var current_idx= 0;
//动画一//
//下面点击第几个按钮，就显示第几张图片//
for (var i = 0; i < Zspan.length; i++) {
	(function(idx){        
        Zspan[i].onclick = function() {
        	piclink.style.marginLeft=-700*idx+"px";         
        	for (var i = 0; i < Zimg.length; i++) {
        		Zspan[i].className = "";	
        		if(idx == i) {	
        			this.className = "on";
        			current_idx = i;
        		}
        	};   	     
    	};     
	})(i);
}
//动画2//
//鼠标移到picscroll上，让左右箭头显示，离开，消失。//
$getid('picscroll').onmouseover = function(){
	arrow_next.style.opacity = 1;
	arrow_prev.style.opacity = 1;
}
$getid('picscroll').onmouseout = function(){
	arrow_next.style.opacity = 0;
	arrow_prev.style.opacity = 0;
}
//动画3.1//
//点击右边按钮，出现上一张图片，#piclink的margin-left减少700px;//
arrow_next.onclick=function(){
	//边界处理，当current_idx=4的时候，让它归零//
	if(current_idx==Zimg.length-1)
	{
		Zspan[current_idx].className ="";
		current_idx =0;
		Zspan[current_idx].className ="on";
		piclink.style.marginLeft =-700*current_idx+"px";
		return false;
	}
	Zspan[current_idx].className="";
	current_idx++;
	Zspan[current_idx].className="on";
	piclink.style.marginLeft=-700*current_idx+"px";
}
//动画3.2//
//点击左边按钮，图片下一张图片，margin-left增加700px;//
arrow_prev.onclick=function(){
	//边界处理，当current_idx=0的时候，让它为4//
	if(current_idx==0){
		Zspan[current_idx].className = " ";
		current_idx =Zimg.length-1;
		Zspan[current_idx].className = "on";
		piclink.style.marginLeft =-700*current_idx+"px";
		return false;
	}
	Zspan[current_idx].className = " ";
	current_idx--;
	Zspan[current_idx].className = "on";
	piclink.style.marginLeft =-700*current_idx+"px";
	
}