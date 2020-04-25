$(document).ready(function(){
    
    $.ajax({
        url:"http://127.0.0.1:5500/js/shuju.js",
        dataType:"json",
        success:function(res){
            $.each(res,function(index,value){
                $(".navbar-nav").children("li").eq(index).children("a").html(value.firstChild)
                $.each(value.secondChild,function(ind,val){
                    $(".dropdown-menu").eq(index).children("li").eq(ind).children("a").html(res[index].secondChild[ind].name)
                    console.log(res[index].secondChild[ind].name)
                })
            })
        }
    })
    $(".kj_fot_center").hover(
        function (){
            $(this).stop().animate({"padding-left":"15px"},200);
        },
        function (){
            $(this).stop().animate({"padding-left":"0px"},200);
        }
    )
    var $boH=$("html").clientTop;
    var $boH1=$(window).innerHeight();
    var $boW=$(window).innerWidth();
    if($boW>770){
        $(".navbar-brand").css({"height":"80px"});
        $(".navbar-default .navbar-nav>li>a").css({"line-height":"60px"});
        $(".navbar").css({"height":"90px"});
    }else{
        $(".navbar-brand").css({"height":"40px"});
        $(".navbar-default .navbar-nav>li>a").css({"line-height":"29px"});
        $(".navbar").css({"height":"40px"});
    }
    $(window).resize(function(){
        $boH1=null;
        $boH=null;
        $boH=$("html").innerHeight();
        $boH1=$(window).innerHeight();
        $boW=$(window).innerWidth();
        if($boW>770){
            $(".navbar-brand").css({"height":"80px"});
            $(".navbar-default .navbar-nav>li>a").css({"line-height":"60px"});
            $(".navbar").css({"height":"auto"});
        }else{
            $(".navbar-brand").css({"height":"40px"});
            $(".navbar-default .navbar-nav>li>a").css({"line-height":"29px"});
            $(".navbar").css({"height":"40px"});
        }
    });
    var t = 0,b = 0;
    $(window).scroll(function(){
        var $w = $("html").scrollTop();
        var $scrollTop = $(this).scrollTop();
　　    var $scrollHeight = $(document).height();
　　    var $windowHeight = $(this).height();
        t = $(this).scrollTop();
            if(b < t){
                if($w>=50){
                    $(".navbar").addClass("dh").stop().animate({"top":"-100px"},200,function(){
                        $(".navbar").removeClass("dh");
                    });
                }else{
                    $(".navbar").addClass("dh").stop().animate({"top":"0px"},200,function(){
                        $(".navbar").removeClass("dh1");
                        $(".navbar").removeClass("dh");
                    });
                    $(".navbar-brand").css({"height":"40px"});
                    $(".navbar-default .navbar-nav>li>a").css({"line-height":"29px"});
                    $(".navbar").css({"height":"auto"});
                }
            }else{
                if($w<=50){
                    $(".navbar").addClass("dh").stop().animate({"top":"0px"},200,function(){
                        $(".navbar").removeClass("dh");
                        $(".navbar").removeClass("dh1");
                    });
                    if($boW>=770){
                        $(".navbar-brand").animate({"height":"80px"});
                        $(".navbar-default .navbar-nav>li>a").animate({"line-height":"60px"});
                    }else{
                        $(".navbar-brand").animate({"height":"40px"});
                        $(".navbar-default .navbar-nav>li>a").animate({"line-height":"29px"});
                    }
                }
            }
            setTimeout(function(){
                b = t
            }, 0)
        if($scrollTop + $windowHeight == $scrollHeight){
            $(".navbar").addClass("dh1").stop().animate({"top":"0px"},200,function(){
                $(".navbar").removeClass("dh");
            });
            if($boW>770){
                $(".navbar-brand").css({"height":"60px"});
                $(".navbar-default .navbar-nav>li>a").css({"line-height":"29px"});
            }else{
                $(".navbar-brand").css({"height":"40px"});
                $(".navbar-default .navbar-nav>li>a").css({"line-height":"29px"});
            }
        };
    })
})