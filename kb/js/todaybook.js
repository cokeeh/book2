		/*오늘의 책 슬라이드*/
		$(function(){
			$("#todaybook > .title > ul > li").mouseenter(function(){
				$(".todaybook_list > div").stop().hide();
				$(".todaybook_list > div").eq($(this).index()).stop().show();
				$(".subtitle > ul").stop().hide();
				$(".subtitle > ul").eq($(this).index()).stop().show();
				$(".cardnews > div").stop().hide();
				$(".cardnews > div").eq($(this).index()).stop().show();
			});
		});

		/*오늘의 책 슬라이드 버튼*/
		$(function(){
			$(".cardnews1 > .prev").click(function(){
				$('.domestic li:last').prependTo('.domestic');
			});
			 $(".cardnews1 > .next").click(function(){
			 	$('.domestic li:first').appendTo('.domestic');
			 });

		});

		$(function(){
			$(".cardnews2 > .prev").click(function(){
				$('.ebook li:last').prependTo('.ebook');
			});
			 $(".cardnews2 > .next").click(function(){
			 	$('.ebook li:first').appendTo('.ebook');
			 });

		});

		$(function(){
			$(".cardnews3 > .prev").click(function(){
				$('.sam li:last').prependTo('.sam');
			});
			 $(".cardnews3 > .next").click(function(){
			 	$('.sam li:first').appendTo('.sam');
			 });

		});

		