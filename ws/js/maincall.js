(function() {
    var header = new Headroom(document.querySelector("#header"), {
        tolerance: 0,
        offset : 0,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp"
        }
    });
    header.init(); 
}());

// if($(window).width()>1024){document.write("<"+"script src='js/jquery.preloader.js'></"+"script>");}
// jQuery(window).load(function() {$x = $(window).width();if($x > 1024){jQuery("#content .row-2,.row-0").preloader();}}); 

jQuery('.magnifier').touchTouch();

jQuery(document).ready(function() {
		jQuery('ul.sf-menu').superfish({ animation: {height:'show'}});
	});

var TonyVideo = {
    load: function (objs) {
        var objplay = jwplayer(objs.vcontainer).setup({
            flashplayer: 'js/video/flashplay.swf',
            html5player: 'js/video/html5player.js',
            file: objs.vfiles,
            image: objs.vfimg,
            width: '100%',
            height:'100%',
            aspectratio:'16:9',
            stretching:'fill',
            controls: 'true',
            autostart: objs.isautoplay
        });
        return objplay;
    }
 };
	jQuery('.ivideoCon a.videoMore').click(function () { 
		TonyVideo.load({
            vcontainer: 'videocontainer',  //视频容器
            vfiles:  $(this).attr("postvideo"), //视频地址
            vfimg: $(this).attr("postimgul"), //视频缩略图(封面)
            isautoplay: 'true'
        });
	    jQuery('.theme-popover-mask').fadeIn(100); 
	    jQuery('.theme-popover').slideDown(200);
	});
	jQuery('.theme-popover .vidclose,.theme-popover-mask').click(function () { 
		jQuery('.theme-popover-mask').fadeOut(100); 
		jQuery('.theme-popover').slideUp(200); $('#videocontainer').html("");
	});
	
jQuery(".videoMore").mouseover(function(){
		jQuery(this).find(".videotit").stop(false,false).animate({marginTop:50,opacity:"hide"});
		jQuery(this).find(".videotic").stop(false,false).animate({marginTop:-9,opacity:"show"});
		jQuery(".videotbg").addClass("videotbgon");
	}).mouseleave(function(){
		jQuery(this).find(".videotit").stop(false,false).animate({marginTop:-18,opacity:"show"});
		jQuery(this).find(".videotic").stop(false,false).animate({marginTop:-80,opacity:"hide"});
		jQuery(".videotbg").removeClass("videotbgon");
});

$(function(){
	$(".side ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"228px"},200).css({"opacity":"0.9","filter":"Alpha(opacity=90)","background":"#e5e5e5"})	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"0px"},200).css({"opacity":"0.9","filter":"Alpha(opacity=90)","background":"#e5e5e5"})	
	});
});

var $backTop=jQuery(".backtop"),$backtag=jQuery(".backtag");
$backTop.bind("click", function() {jQuery('html, body').stop().animate({scrollTop: 0}, 800,'easeInOutExpo');});
$backTop.bind("mouseleave",function(){jQuery(this).find("i").animate({top:0}, 800);});
$backtag.bind("click", function() {jQuery('html, body').stop().animate({scrollTop: 638}, 800,'easeInOutExpo');});
$backtag.bind("mouseleave",function(){jQuery(this).find("i").animate({top:638}, 800);});
