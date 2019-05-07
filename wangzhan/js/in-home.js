window.onload=function(){
var It = document.getElementById('i_title');
var Inp = document.getElementById('input');
	Inp.onfocus = function(){
		It.style.display = 'none'
	}
	Inp.onblur = function(){
		It.style.display = 'block'
	}
}


// 产品类表轮播1
$(function(){

	var page=1;
	var i=4;
	var $p_Div=$(".ba_item");
	var $picDiv=$(".ba_list");
	var picNum=$picDiv.children("li").length;
	var page_count=Math.ceil(picNum/3);//返回
	var $pDiv_w=$p_Div.width()+44;    //width()获取宽度（px）

	$(".goNext").click(function(){
		if(page_count>page){
			$picDiv.animate({left:'-'+page*$pDiv_w+"px"},"normal");
			page++;
			if(page>=page_count){
				$(this).css({'color':'#e0e0e0'});
			}
		}
	});
	$(".goPre").click(function(){
		if(page>1){
			$picDiv.animate({left:"+="+$pDiv_w+'px'},"normal");
			page--;
			if(page<=1){
				$(this).css({'color':'#e0e0e0'});
			}
		}
	});
});


// 产品类表轮播2
$(function(){

	var page=1;
	var i=4;
	var $p_Div=$(".ba_item1");
	var $picDiv=$(".ba_list1");
	var picNum=$picDiv.children("li").length;
	var page_count=Math.ceil(picNum/3);//返回
	var $pDiv_w=$p_Div.width()+44;    //width()获取宽度（px）

	$(".goNext1").click(function(){
		if(page_count>page){
			$picDiv.animate({left:'-'+page*$pDiv_w+"px"},"normal");
			page++;
			if(page>=page_count){
				$(this).css({'color':'#e0e0e0'});
			}
		}
	});
	$(".goPre1").click(function(){
		if(page>1){
			$picDiv.animate({left:"+="+$pDiv_w+'px'},"normal");
			page--;
			if(page<=1){
				$(this).css({'color':'#e0e0e0'});
			}
		}
	});
});