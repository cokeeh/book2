
$(function(){

/*슬라이드 버튼 클릭시 슬라이드 바뀜*/
var color = ["#e4f1d3", "#eecef7", "#e4f1d3", "#a8daff", "#f8f4d7", "#c3c5f8","#f7c1c1"]; // 배경색 배열

$(function(){
	$(".click > li").mouseenter(function(){
		$("#sliderwrap").css("background-color", color[$(this).index()]); //배경색 배열 인덱스 번호에 따라 바뀜
		$(".main_slide li").stop().hide(); 
		$(".main_slide li").eq($(this).index()).stop().show(); //main_slide 의 인덱스 번호에 따라 보여줌
		
	});
});

/*슬라이드 자동*/
	var i=0;

function slide(){
i++;
if (i > $('.main_slide li:last').index()){
	i=0;
	}

$("#sliderwrap").css("background-color", color[i])
$('.main_slide li').stop().hide();
$('.main_slide li').eq(i).stop().show();
}

setInterval(slide,3000); 

});