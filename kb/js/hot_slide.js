	/*핫템 버튼 슬라이드*/
	$(function(){
		$(".hot_slide_prev").click(function(){
			$(".hot_slide_wrap li:last").prependTo(".hot_slide_wrap");
		});
		$(".hot_slide_next").click(function(){
			$(".hot_slide_wrap li:first").appendTo(".hot_slide_wrap");
		});
	});