// banner轮播
window.onload=function(){
    var imgs = ["img/632a0d9115b1373944b51cc6c68f27f5348fa52fc447e.jpg","img/40f4c7639dd624bbe3e979e7ce70b4cc328e0e59666e3.jpg","img/031537c507ec8cbb6c9e912a8694117baabcc39ca28db.jpg","img/193c7c21dbcef85454a437636fc14f4d285be018aa0c8.jpg"];
    var i = 0;
    var head=document.getElementById("banner");
    function time(){
        i++;
        i=i%4;
        head.style.background="url("+imgs[i]+")";
        head.style.backgroundSize="cover";
        head.style.backgroundRepeat="no-repeat";
    }
    setInterval(time,5000);
};
        // 表单选项
        $(document).ready(function(){
           $('.icon').click(function(){
            $('.search_menu').toggle();
        })
           $('.se_item').click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var check_value=$(this).text();
            $('.search_menu').hide();
            $(this).parent().siblings(".text").text(check_value);
        })
       })

// 滚轮
$(document).ready(function(){
    $(window).scroll(function(){
        b = $(this).scrollTop();
         var topmain = $('.header').height()+20;   //页面滚动的高度
         if(b > topmain){
          $('.header').addClass('headeractive');
        }
        else{
            $('.header').removeClass('headeractive');
        }
    });
});


$(document).ready(function(){
    $('.linne span').click(function(){
        $('.linne').css('display','none');
    })

});

// 大家关注
$(document).ready(function(){
    $('.ccc').click(function(){
        $('.timg').css('display','none');
        $(this).css('display','none')
    })

});

$(document).ready(function(){
    $('.bbb').click(function(){
        $('.timg2').css('display','none');
        $(this).css('display','none')
    })
});


// 加载更多
(function($) {
  $.fn.simpleLoadMore = function( options ) {
    // Settings.
    var settings = $.extend({
      count: 5,
      btnHTML: '',
      item: ''
  }, options);

    // Variables
    var $loadMore = $(this);

    // Run through all the elements.
    $loadMore.each(function(i, el) {

      // Variables.
      var $thisLoadMore = $(this);
      var $items        = $thisLoadMore.find(settings.item);
      var btnHTML       = settings.btnHTML ? settings.btnHTML : '<div class="lineh_l"><a href="#">加载更多</a></div>';
      var $btnHTML      = $(btnHTML);

      

      // Add button.
      if ( ! $thisLoadMore.find( '.lineh_l a' ).length && $items.length > settings.count ) {
        $thisLoadMore.append( $btnHTML );
    }

    $btn = $thisLoadMore.find( '.lineh_l a' );

      // Check if button is not present. If not, then attach $btnHTML to the $btn variable.
      if ( ! $btn.length ) {
        $btn = $btnHTML;
    }

    if ( $items.length > settings.count ) {
        $items.slice(settings.count).hide();
    }

      // Add click event on button.
      $btn.on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
        $updatedItems = $items.filter(':hidden').slice(0, settings.count);

        // Show the selected elements.
        if ( $updatedItems.length > 0 ) {
          $updatedItems.fadeIn();
      }

        // Hide the 'View More' button
        // if the elements lenght is less than 5.
        if ( $updatedItems.length < settings.count ) {
          $this.remove();
      }
  });
  });
}
}( jQuery ));




// 回到顶部
$(document).ready(function(){
            //为当前窗口添加滚动条滚动事件（适用于所有可滚动的元素和 window 对象（浏览器窗口））

            $(window).scroll(function(){

         //创建一个变量存储当前窗口下移的高度

         var scroTop = $(window).scrollTop();

        //判断当前窗口滚动高度

        //如果大于100，则显示顶部元素，否则隐藏顶部元素

        if(scroTop>100){

            $('.off_top').css('opacity','1');

        }else{

            $('.off_top').css('opacity','0');

        }

    });


    //为返回顶部元素添加点击事件

    $('.off_top').click(function(){

        //将当前窗口的内容区滚动高度改为0，即顶部

        $("html,body").animate({scrollTop:0},"fast");

    });

});





