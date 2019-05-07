// banner开始
window.onload=function(){
     var items = document.getElementsByClassName('bt_ban_witch');   //获取的那几张图片
     var points = document.getElementsByClassName('point');//获取的那几个点
     var Bjcs = document.getElementsByClassName('Bjc');//获取的背景色
     var index =0;

      var clearactive = function(){                           //首先在轮播时先把所有的class清除
        for(var i=0;i<items.length;i++){
            items[i].className='bt_ban_witch';
            Bjcs[i].className='Bjc';
        }
        for(var i=0;i<points.length;i++){
            points[i].className='point';
        }
    }

     var goIndex = function(){                          //goIndex相当于一个轮播介质--就是用层级的关系实现的，是哪张那张的层级就最高，就
        clearactive();                                     //就相当于给相应的图片添加一个class名（active）
        // console.log(index);
        items[index].className='bt_ban_witch active';             //一个封装好的函数，实现轮播，但是他不能自动轮播，要结合定时器用*
        points[index].className='point active';
        Bjcs[index].className='Bjc active';
    }

     setInterval(function(){      //定时器  指定轮播图几秒换一次，if语句用来限制在这四张图里来回切换
                if(index < 4){         //首先if语句现在0,1,2,3,4里循环
                    index++;         //然后在执行上面已经封装好的goIndex函数
                }else{
                    index = 0;
                }
                goIndex();
            },3000)

     for(var j=0;j<points.length;j++){                //用for循环实现点击右下角的小点切换到对应的图片上，getAttribute和上面的data-index
        points[j].onmouseover = function(){
                 pointIndex=this.getAttribute('data-index');    //是存数据的用来指定相应的图片的
                 index=pointIndex;
                 goIndex();
             }
         }

     }
// banner结束
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



