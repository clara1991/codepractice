// 行为层：js
// js编写的主体思路：
// 1、中心点：每一个input框，也就是获取的inp=document.getElementsByTagName("input");
// 2、针对input输入框会有点击即获得焦点的状态，和失去焦点的状态。
// 3、当获得焦点的时候，会给用户名、输入框、提示图标（改变背景图片的位置）变成蓝色，即添加point样式。
// 4、当input输入框失去焦点时，会给用户名、输入框、提示图标变成红色，即添加error样式。
// 5、当input输入框内容正确后，会给用户名、输入框变成绿色，即添加OK样式
/*闭包*/
	var $=function(id){return document.getElementById(id);}
	var label = document.getElementsByTagName("label"),
		input = document.getElementsByTagName("input"),
		span  = document.getElementsByTagName("span");
	for(i=0;i<input.length;i++){
		input[i].num	 = i;
		input[i].onfocus = function(){
			label[this.num].className = "focus";
			input[this.num].className = "focus";
			span[this.num].className  = "notice focus";
		}
		input[i].onblur = function(){
			var rule = [
				/^[A-Za-z]\w{6,20}$/,
				/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
				/^1\d{10}$/
			];
			var errorText = [
				'用户名不能为汉字，至少为6位数，且以字母开头',
				'请填写正确的邮件格式',
				'请填写正确的手机号码'
			];
			var isRight = false;
			if(this.value.length>0){
				isRight = true;
				span[this.num].className = "notice";
				if(rule[this.num] && !rule[this.num].test(this.value)){
					span[this.num].innerHTML = errorText[this.num];
					isRight = false;
				}
			}
			if(isRight == false){
				label[this.num].className = "wrong";
				input[this.num].className = "wrong";
				span[this.num].className  = "notice wrong";
			}
		}
	}