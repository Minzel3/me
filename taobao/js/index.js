$('.delete1').click(function(){
	$('.shangp1').css("display","none");
})
$('.delete2').click(function(){
	$('.shangp2').css("display","none");
})
$('.jian').click(function(){
	$('.baobei_item').toggle();
})
$('.baobei_item li').click(function(){
	var check_value=$(this).text();
	 $('.baobei_item').hide();
	 $(this).parent().siblings(".select_txt").text(check_value);
})
$('.cuowu').click(function(){
	$('.iphone').css('display','none');
})
$('.cuowu1').click(function(){
	$('.hua').css('display','none');
	$('.huafei').mouseover(function(){
		$('.hua').css('display','block')
	})
});
// $(document).ready(function(){
//     var a,b,c;
//     a = $(window).height();    //浏览器窗口高度
//     var group = $(".shi_item");
//     $(window).scroll(function(){
//         b = $(this).scrollTop();   //页面滚动的高度
//         c = group.offset().top;    //元素距离文档（document）顶部的高度
//         if(a+b>c){
//             $('.shi_item').addClass("rollIn");
//         }
//     });
// });




