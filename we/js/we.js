 // nav 
$(function(){
	$('div.n_o').children('ul').children('li').children('a').hover(function(){
		$(this).next('ul').children('li').show(100);
	},function(){
		$(this).next('ul').children('li').hide(100);
	})
})
//渐隐轮播图Jquery
 var data = ['../img1/019.jpg','../img1/014.jpg','../img1/013.jpg','../img1/023.jpg','../img1/025.jpg'];
  //    动态添加
    var pic_str = '';
    var ctrl_str = '';
    for(var i = 0; i < data.length; i++){
        ctrl_str += '<li>'+(i+1)+'</li>';
        pic_str += '<li><img width="800" src=" ' + data[i] + ' "></li>';
    }
    $('.box').html(pic_str);
    $('.ctrl-banner').html(ctrl_str);

    $('.box > li').eq(0).css('z-index','999');
    $('.ctrl-banner > li').eq(0).addClass('active');

    var index = 0;
    var timeout_timer = null;

    // 用来做轮播动画的
    function move(num){
        clearTimeout(timeout_timer);
        timeout_time=r = setTimeout(function () {
            num > 0 ? index = num :num == -1 ? index++ : index--;
            index = index > data.length - 1 ? 0 : index;  //最后一个到第一个图片索引值
            index = index < 0 ? data.length - 1 : index;  //第一个倒到最后一个时
            $('.box > li').eq(index).stop().fadeIn().siblings().stop().fadeOut();
            $('.ctrl-banner > li').eq(index).addClass('active').siblings().removeClass('active');
        },150);
    }
    var timer = null;
    timer = setInterval(function () {
        move(-1);
    },1500);

    $('#banner').hover(function(){
        clearInterval(timer);
    },function () {
        timer = setInterval(function () {
            move(-1);
        },1500);
    });

    $('.span-right').bind('click',function(){
        move(-1);
    });

    $('.span-left').bind('click',function(){
        move(-2);
    });

    $('.ctrl-banner > li').bind('mouseover',function(){
        move($(this).index());
    });

       //top 返回顶端
       $(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>200){
			$("#top").css("display","block");
		}else{
			$("#top").css("display","none");
		}
	})
	$("#top").click(function(){
        $(window).scrollTop(0);
	})	
   $("#top").hover(function(){
        $("#top").css("opacity","1");
    },function(){
        $("#top").css("opacity","0.6");
    })  

})