$(document).ready(function(){
    $.ajax({
        url:"http://www.qhdlink-student.top/student/newsa.php",
        type:"post",
        data:{"username":"ws58","userpwd":123456,"userclass":58,"type":3},
        dataType:"json",
        success:function(res){
            console.log(res);
            $.each(res,function(index,value){
                $("body").append("<li class='aa'><a href='#'>"+value.title_news+value.time_news+"</a></li>");  // 把数据提取出来放在页面中,a href是把每一行变成一个链接
            })
        },
        error:function(){
            console.log("请求失败");
        }
    })
})