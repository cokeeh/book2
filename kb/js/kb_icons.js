	 /*교보 아이콘 슬라이드*/
	$(function(){
		$(".only_icon_prev").click(function(){
			$(".icons_wrap li:last").prependTo(".icons_wrap");
			$(".icons_wrap").css({marginLeft:-760});
			$(".icons_wrap").stop().animate({marginLeft:0},1000);
		});
		$(".only_icon_next").click(function(){
			$(".icons_wrap").stop().animate({marginLeft:-760},1000,function(){
				$(".icons_wrap li:first").appendTo(".icons_wrap");
				$(".icons_wrap").css({marginLeft:0});
			});
		});
	});