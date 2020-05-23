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
            if ($w1 <= 1100) {
                $(".conw").css("width", "");
            } else {
                $(".conw").css("width", "1070px");
            }
        })
        if ($w1 <= 1200) {
            $(".conw").css("width", "");
        } else {
            $(".conw").css("width", "1070px");
        }
    }
    test();

    $(".con_xxk").on("click",function(){
        $(this).addClass("con_xxk1").siblings().removeClass("con_xxk1").end().children().children(".con_xxk_h3").css({"color":"#fff"}).end().end().siblings().children().children(".con_xxk_h3").css({"color":"#333"});
        var $ind = $(this).index();
        var $ind1 = $ind*2+1;
        var $ind2 = $ind*2+2;
        var $indb = $ind+1;
        $(".con_zi_1").css("background","url(../img/IOT_con1_1_"+$ind1+".png)");
        $(".con_zi_2").css("background","url(../img/IOT_con1_1_"+$ind2+".png)");
        $(".con_bottom").css("background","url(../img/IOT._con1_ban_"+$indb+".jpg)");
        if($ind == 0){
            $(".con_mi_img_right").eq(0).html("业主无感通行");
            $(".con_mi_img_right").eq(1).html("物业省心管理");
            $(".con_bottom_p").html("基于移动互联、IC加密等核心技术，千丁智能门门禁系统可实现手机APP开门、无网状态蓝牙开门、临时授权密码开门等，满足不同用户、不同场景下的智能通行需求。");
        }else if($ind == 1){
            $(".con_mi_img_right").eq(0).html("物业减员增效");
            $(".con_mi_img_right").eq(1).html("车主便捷通行");
            $(".con_bottom_p").html("系统基于车牌自动识别算法，结合社区物业、居民、访客的实际生活需求而设计，可实现车辆无障碍出入、车位预订、车辆邀请、自助缴费、车辆锁定等功能，是一套以物业、业主的实际需要为前提的高端智能化综合管理系统。");
        }else if($ind == 2){
            $(".con_mi_img_right").eq(0).html("物业核实迅速");
            $(".con_mi_img_right").eq(1).html("用户便捷通行");
            $(".con_bottom_p").html("系统采用全数字IP网络架构，产品均使用标准的IP终端设备，门口机可直接与室内机进行视频对讲。室内平板支持做为WIFI热点扩展无线覆盖，亦可接入安防报警在平板上进行实时展示。");
        }else{
            $(".con_mi_img_right").eq(0).html("降低接触感染风险");
            $(".con_mi_img_right").eq(1).html("减轻物业工作量");
            $(".con_bottom_p").html("通过硬件、软件、应用端等一体化产品方案，实现社区防控非接触、降风险、省人工、落地快，切实解决物业疫情防控“测温、筛查、上报”过程中的工作难点。");
        }
    })
})