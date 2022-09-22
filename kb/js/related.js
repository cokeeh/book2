 /*연관 책 슬라이드*/
$(function(){
	$(".related_prev").click(function(){
		$('.related_book_wrap li:last').prependTo('.related_book_wrap');
	});
	$(".related_next").click(function(){
		$('.related_book_wrap li:first').appendTo('.related_book_wrap');
	});
});