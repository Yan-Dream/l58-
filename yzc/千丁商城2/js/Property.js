$(document).ready(function(){
    $(".con2_cum").children().children(".con2_tp").on("click",function(){
        var $ind=$(this).parent().parent().index();
        $(this).parent().parent().addClass("active").siblings().removeClass("active");
        $(this).next().next().css("display","block").parent().parent().siblings().children().children("img").css("display","none");
        $(".con2_coling").eq($ind).css("display","block").siblings().css("display","none");
    })
    console.log($(".con2_tp"));
})