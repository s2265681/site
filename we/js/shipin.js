 // nav 
$(function(){
	$('div.n_o').children('ul').children('li').children('a').hover(function(){
		$(this).next('ul').children('li').show(100);
	},function(){
		$(this).next('ul').children('li').hide(100);
	})
})
// //渐隐轮播图Jquery
//  var data = ['../img/14.jpg','../img/15.jpg','../img/16.jpg','../img/17.jpg','../img/18.jpg','../img/19.jpg'];
//   //    动态添加
//     var pic_str = '';
//     var ctrl_str = '';
//     for(var i = 0; i < data.length; i++){
//         ctrl_str += '<li>'+(i+1)+'</li>';
//         pic_str += '<li><img src=" ' + data[i] + ' "></li>';
//     }
//     $('.box').html(pic_str);
//     $('.ctrl-banner').html(ctrl_str);

//     $('.box > li').eq(0).css('z-index','999');
//     $('.ctrl-banner > li').eq(0).addClass('active');

//     var index = 0;
//     var timeout_timer = null;

//     // 用来做轮播动画的
//     function move(num){
//         clearTimeout(timeout_timer);
//         timeout_time=r = setTimeout(function () {
//             num > 0 ? index = num :num == -1 ? index++ : index--;
//             index = index > data.length - 1 ? 0 : index;  //最后一个到第一个图片索引值
//             index = index < 0 ? data.length - 1 : index;  //第一个倒到最后一个时
//             $('.box > li').eq(index).stop().fadeIn().siblings().stop().fadeOut();
//             $('.ctrl-banner > li').eq(index).addClass('active').siblings().removeClass('active');
//         },150);
//     }
//     var timer = null;
//     timer = setInterval(function () {
//         move(-1);
//     },1500);

//     $('#banner').hover(function(){
//         clearInterval(timer);
//     },function () {
//         timer = setInterval(function () {
//             move(-1);
//         },1500);
//     });

//     $('.span-right').bind('click',function(){
//         move(-1);
//     });

//     $('.span-left').bind('click',function(){
//         move(-2);
//     });

//     $('.ctrl-banner > li').bind('mouseover',function(){
//         move($(this).index());
//     });
// banner  多面体
// 多面体JS开始
// 调用
     window.onload = function() {
    //第一个参数是边数，第二个参数是边长
   tuxing(10, 320);
};
//创建方法
function tuxing(n, sideLength) {
    var fragment = document.createDocumentFragment();
    var cube = document.getElementsByClassName("cube")[0];
    var face = null;
    //计算内接圆的半径
    var insCirRadius = sideLength/2/Math.tan(Math.PI/n);
    cube.style.cssText += "width:" + sideLength + "px;height:" + sideLength + "px;transform-origin:50% 50%" + (-insCirRadius) + "px";
var data = ['../img/054.jpg','../img/073.jpg','../img/068.jpg','../img/090.jpg','../img/074.jpg','../img/094.jpg','../img/102.jpg','../img/117.jpg','../img/116.jpg','../img/093.jpg'];
    for (var i = 0; i < n; i++) {
        face = document.createElement("div");
        face.innerHTML='<li><img src="'+data[i]+'"></li>';
        //  var a=document.createElement("li")
        // face.appendChild(a);
        // a.innerHTML='<img src="'+data[i]+'">';
        face.className += "face";
        face.style.cssText += "line-height:" + sideLength + "px;transform-origin:50% 50%" + (-insCirRadius) + "px";
        face.style.cssText += "transform:rotateY(-"+360/n*i+"deg)";
        fragment.appendChild(face);
     // data[i]
    }
    cube.appendChild(fragment);
};
// 多面体JS结束
// banner结束
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