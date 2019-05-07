window.onload= function(){

}
// 商品
$(function() {
    var timer;
    var iNow = 0;
    fnFade();
    $('.smallList li').hover(function() {
        iNow = $(this).index();
        fnFade();
    })

    function fnFade() {
        $('.bigList li').each(function(index) {
            if (index != iNow) {
                $('.bigList li').eq(index).fadeOut().css('zIndex', 1);
                $('.smallList li').eq(index).attr('class', '')
            } else {
                $('.bigList li').eq(index).fadeIn().css('zIndex', 2);
                $('.smallList li').eq(index).attr('class', 'active')
            }
        })
    }
})



window.onload = function (){
	var s,t,now,endt;
	var days,hs,ms,ss;
	endt = new Date('2019-06-20 0:0:0'); //活动时间
	endt = endt.getTime();//活动结束时距离标准时间的毫秒数
	//每隔指定时间之后执行第一个参数的code
	setInterval(function(){
		s = new Date();
		now = s.getTime();//现在距离标准时间的毫秒数
		t = endt - now;//现在距离活动结束剩余的毫秒数
		t = t/1000;
		
		//天数计算 秒数除以一整天的秒数，结果即剩余天数（是小数情况居多），结果向下取整
		days = Math.floor(t/(60*60*24));
		document.getElementById("ds").innerHTML = days;
		
		//小时数计算 秒数除以一小时的秒数，结果向下取整，对一整天的小时数取余，结果即不足一天的小时数
		hs = Math.floor(t/(60*60))%24;
		document.getElementById("hs").innerHTML = hs;
		
		//分钟数计算 秒数除以一分钟的秒数，结果向下取整，对一小时的分钟数取余，结果即不足一小时的分钟数
		ms = Math.floor(t/60)%60;
		document.getElementById("ms").innerHTML = ms;
		
		//秒数数计算 秒数对一分钟的秒数取余，结果是不足一分钟的秒数，对这个结果做保留1位小数的处理
		ss = (t%60).toFixed(1);
		document.getElementById("ss").innerHTML = ss;
		
	},100);
	$('.logo').hover(function(){
	$('.Catleft').stop().slideToggle(60);
})
}


$(document).ready(function(){
            //为当前窗口添加滚动条滚动事件（适用于所有可滚动的元素和 window 对象（浏览器窗口））

            $(window).scroll(function(){

         //创建一个变量存储当前窗口下移的高度


         var scroTop = $(window).scrollTop();

        //判断当前窗口滚动高度

        //如果大于100，则显示顶部元素，否则隐藏顶部元素

        if(scroTop>620){

            // $('.tab_top').addClass('fixed_nav');
            $('.wei').addClass('fixed_nav');
            $('.tab_top').addClass('fixed_nav');
            $('.conget').addClass('fixed_na');
            $('.subbuy').css('display','block');

        }else{
            // $('.tab_top').removeClass('fixed_nav');
            $('.wei').removeClass('fixed_nav');
            $('.tab_top').removeClass('fixed_nav');
            $('.conget').removeClass('fixed_na');
            $('.subbuy').css('display','none');

        }

    })
 })


$(document).ready(function(){
            //为当前窗口添加滚动条滚动事件（适用于所有可滚动的元素和 window 对象（浏览器窗口））

            $(window).scroll(function(){

         //创建一个变量存储当前窗口下移的高度

         var scroTop = $(window).scrollTop();

        //判断当前窗口滚动高度

        //如果大于100，则显示顶部元素，否则隐藏顶部元素

        if(scroTop>1000){

            $('.fixnav').addClass('fixed_nav');

        }else{
            $('.fixnav').removeClass('fixed_nav');

        }

    })
 })



$(document).ready(function(){
            //为当前窗口添加滚动条滚动事件（适用于所有可滚动的元素和 window 对象（浏览器窗口））

            $(window).scroll(function(){

         //创建一个变量存储当前窗口下移的高度

         var scroTop = $(window).scrollTop();

        //判断当前窗口滚动高度

        //如果大于100，则显示顶部元素，否则隐藏顶部元素

        if(scroTop>100){

            $('.comeTop').fadeIn(200);

        }else{

            $('.comeTop').fadeOut(200);

        }

    });


    //为返回顶部元素添加点击事件

    $('.comeTop').click(function(){

        //将当前窗口的内容区滚动高度改为0，即顶部

        $("html,body").animate({scrollTop:0},"fast");

    });

 var App = document.getElementById('fade_bok');
 var Img = document.getElementById('erweima_i');
 App.onmouseover = function(){
    if(Img.style.display == 'block'){
        Img.style.display = 'none'
    }else{
            Img.style.display = 'block'
    }
 }


$(".jufav").hover(
  function () {
    $('.just').addClass('just_on');
  },
  function () {
    $('.just').removeClass('just_on');
  }
);
$('.just').click(
    function(){
        $('.ju_Login').css('display','block');
})
$('.close').click(
    function(){
        $('.ju_Login').css('display','none')
})
});

















