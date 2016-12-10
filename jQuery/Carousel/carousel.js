$(function(){
	var show=$("#carousel ul"),
	 	pos_left,
	 	t,
	 	flag = true;//自动滚动

	t = setInterval("scroll()",2000); //自动滚动

	//点击右边
	$(".next").click(function(){//鼠标点击，停止自动滚动  
		clearInterval(t);
		scroll();
		flag = false;
	});

	//点击左边
	$(".prev").click(function(){
		clearInterval(t);
		scroll('left');
		flag = false;
	});

	$(".demo").mouseover(function(){  //鼠标移入，停止滚动
		clearInterval(t);
		flag = false;
	})
	.mouseout(function(){   //鼠标离开图片展示区，添加滚动
		if(!flag){
			t = setInterval("scroll()",3000);	
		}
	});
})

/**
 * 实现滚动的主程序
 * 通过改变ul的margin-left
 * @direction string 当为left的时候回到上一个图片
**/ 
function scroll(direction){
	var show = $("#carousel ul"),
	 	pos_left = parseInt(show.css("margin-left")),
	 	left = (pos_left - 950); //设置默认点击右边按钮

	//如果点击左边按钮
	if(direction == "left"){
		left = (pos_left + 950);
	}

	//设置临界值
	if(left > 0){left = -2850 ;}
	if(left < -2850){left = 0;}
  	
  	show.css({"margin-left": left+"px"});
}  

