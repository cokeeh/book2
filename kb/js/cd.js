		//*음반 멀티 페이지*//
		$(function(){
			$("#cd_wrap > .title > ul > li").mouseenter(function(){
				$(".cd_list > article ").stop().hide();
				$(".cd_list > article ").eq($(this).index()).stop().show();
			});
		});