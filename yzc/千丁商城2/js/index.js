$(document).ready(function(){
    $H = $(window).innerHeight();
    $(".swiper1").css({"height":$H})
    $(".ban_kk").css({"height":$H})
    $(window).resize(function(){
        $H = $(window).innerHeight();
        $(".swiper1").css({"height":$H})
        $(".ban_kk").css({"height":$H})
        //文字超出
        // if($W<=770){
        //     $(".con5_wenzi_in_top").each(function() {
        //         var maxwidth =80;//显示多少字符
        //         if ($(this).text().length > maxwidth) {
        //         $(this).text($(this).text().substring(0, maxwidth));
        //         $(this).html($(this).html() + '...');
        //         }
        //     });
        // }
        // console.log($W)
    })
    //显示多少个字符
    $(".con5_wenzi_in_top").each(function() {
        var maxwidth =13;//显示多少字符
        if ($(this).text().length > maxwidth) {
        $(this).text($(this).text().substring(0, maxwidth));
        $(this).html($(this).html() + '...');
        }
    });

    var mySwiper = new Swiper('.swiper1',{
        // lazy:true,
        effect:'hide',//切换效果
        // mousewheel:'true',//是否支持鼠标滚轮切换
        // preventInteractionOnTransition: true,//轮播过度时无法滑动
        loop:true,//是否循环播放
        speed:1000,//自动播放的速度
        autoplay:{
            delay:3000,//切换停止时间
            disableOnInteraction:false
        },
        on:{
            slideChangeTransitionStart:function(){
                $(".ban_x_1").animate({"bottom":"-300px"},0);
                $(".ban_x_2").animate({"bottom":"-300px"},0);
                $(".ban_x_3").animate({"bottom":"-300px"},0);
            },
            slideChangeTransitionEnd:function(){
                $(".ban_x_1").animate({"bottom":"0px"},1000);
                $(".ban_x_2").animate({"bottom":"0px"},1000);
                $(".ban_x_3").animate({"bottom":"0px"},1000);
            }
        },
        pagination:{
            el:".swiper-pagination",//初始化下边导航按钮
            clickable:true,//是否能点击切换
            // type:'',//小圆点样式
            // renderBullet:function(index,className){//自定义样式的回调函数
            //     return "<span class="+className+">"+(index+1)+"</span>"
            // }
        },
        navigation:{
            nextEl:".swiper-button-next",//初始化左右箭头
            prevEl:".swiper-button-prev",//初始化左右箭头
        }
    })

    $(".con3_col_kj_top_yc").hover(
        function(){
            $(this).removeClass("con3_dh2").addClass("con3_dh");
            $(".con3_col_kj_dh").removeClass("con3_dh2").addClass("con3_dh");
        },
        function(){
            $(this).removeClass("con3_dh").addClass("con3_dh2");
            $(".con3_col_kj_dh").removeClass("con3_dh").addClass("con3_dh2");
        }
    )

    var $wow = new WOW(
        {
                boxClass:     'wow',      // default
                animateClass: 'animated', // default
                offset:       0,          // default
                mobile:       true,       // default
                live:         true        // default
                }
        )
    $wow.init();

    // var $con5_wenzi = $(".con5_wenzi_in_top").html();

})