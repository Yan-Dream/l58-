var btn=document.getElementById("bttn")
console.log(btn)
var sa=document.getElementById("sada")
console.log(n)
$(function(){
    $(btn).hover(function(){
        $(sa).hover(function(){
            sa.style.display="block"
        },function(){
            sa.style.display="none"
        })
		sa.style.display
		="block"
    },function(){
        sa.style.display="none"
    })
})

var n = 0;
		$(".carousel-inner .item").hide().eq(0).show();//显示第一张图片
		$(".carousel li").mouseenter(function(){//mouseenter鼠标经过事件
			n = $(this).index()//获取当前选择项
			$(".carousel-inner .item").hide().eq(n).show()//显示当前图片
			// $(this).css("background-color","white").siblings().css("background-color","")//鼠标停留时显示为白色
			$(this).addClass("active").siblings().removeClass("active");
		})
		//设置循环条件
		function lunbo(){
	       if(n<2){n = n+1}
			else{n = 0}
		$(".carousel-inner .item").hide().eq(n).show()
		$(".carousel li").eq(n).addClass("active").siblings().removeClass("active")
		}
		var time = setInterval(lunbo,3000);//设置轮播时间


