$(document).ready(function(){
    var test = function(){
    var $w = $("html").innerWidth();
    $(window).resize(function(){
        $w = $("html").innerWidth();
        if($w<=1200){
            $(".container_2").css("width","");
        }else{
            $(".container_2").css("width","1070px");
        }
    })
    if($w<=1200){
        $(".container_2").css("width","");
    }else{
        $(".container_2").css("width","1070px");
    }}
    test();
})