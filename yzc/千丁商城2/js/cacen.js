$(document).ready(function(){
    var $h = $(".section").css("height");
    var $w = 0;
    $(window).scroll(function () {
        $w = $("html").scrollTop();
        if ($w >= parseInt($h)) {
            $(".ban_sec").removeClass("ban_dh");
        } else {
            $(".ban_sec").addClass("ban_dh");
        }
    })

    var test = function () {
        var $w1 = $("html").innerWidth();
        $(window).resize(function () {
            $w1 = $("html").innerWidth();
            console.log($w1)
            if ($w1 <= 1300) {
                $(".conw").css("width", "");
                console.log($w1)
            } else {
                $(".conw").css("width", "1170px");
            }
        })
        if ($w1 <= 1300) {
            $(".conw").css("width", "");
        } else {
            $(".conw").css("width", "1170px");
        }
    }
    test();

    $(".con_xxk").on("click",function(){
        $(this).addClass("con_xxk1").siblings().removeClass("con_xxk1").end().children().children(".con_xxk_h3").css({"color":"#fff"}).end().end().siblings().children().children(".con_xxk_h3").css({"color":"#333"});
        let $ind = $(this).index();
        $(".con2_row").eq($ind).css({"display":"block"}).siblings().css({"display":"none"});
        
    })
    $(".con4_xxk").on("click",function(){
        $(this).addClass("con4_xxk1").siblings().removeClass("con4_xxk1");
        let $ind = $(this).index();
        $(".con4_k1").eq($ind).css({"display":"block"}).siblings(".con4_k1").css({"display":"none"})
    })
})