$(function(){
		$(".course-btn").mouseenter(function(){
			$(this).find("#js_course_list").fadeIn();
		})
		.mouseleave(function(){
			$(this).find("#js_course_list").fadeOut();
		});

		$("#js_course_list").find("a").mouseenter(function(){
			$(this).css({
				"color"  :"red",
				"opacity": "0.8"
			});
		})
		.mouseleave(function(){
			$(this).css({
				"color"  :"#fff",
				"opacity": "0.8"
			});
		});
})
