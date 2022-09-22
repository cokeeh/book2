	//*화제의 신간 멀티페이지*//
	$(function(){
		$("#newbook > .title > ul > li").mouseenter(function(){
			$(".newbook_list > article ").stop().hide();
			$(".newbook_list > article ").eq($(this).index()).stop().show();
		});
	});