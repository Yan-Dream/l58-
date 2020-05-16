$(document).ready(function () {
    var $h = $(".section").css("height");
    var $w = 0;
    $(window).scroll(function () {
        $w = $("html").scrollTop();
        if ($w >= parseInt($h)) {
            $(".ban_sec").removeClass("ban_dh");
        } else {
            $(".ban_sec").addClass("ban_dh");
        }
    })          //公用效果

    var test = function () {
        var $w1 = $("html").innerWidth();
        $(window).resize(function () {
            $w1 = $("html").innerWidth();
            if ($w1 <= 1100) {
                $(".conw").css("width", "");
            } else {
                $(".conw").css("width", "1040px");
            }
        })
        if ($w1 <= 1200) {
            $(".conw").css("width", "");
        } else {
            $(".conw").css("width", "1040px");
        }
    }
    test();
})