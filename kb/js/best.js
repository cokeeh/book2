//*베스트셀러 멀티 페이지*//
$(function(){
	$("#best_seller_book > .title > ul > li").mouseenter(function(){
		$(".best_seller_list > article ").stop().hide();
		$(".best_seller_list > article ").eq($(this).index()).stop().show();
	});
});