/*팝업 창*/
$(function(){
  $("#popup_box > span").click(function(){
    $("#popup").stop().hide();
  });
});

/*매장안내*/	
$(function(){
    $(".store_info").mouseenter(function(){ 
      $(".store_info").children(".store").stop().fadeIn("fast"); 
    }).mouseleave(function(){ 
      $(".store").stop().fadeOut("fast"); 
    });
  });

/*회원혜택*/
$(function(){
    $(".benefit_info").mouseenter(function(){ 
      $(".benefit_info").children(".benefit").stop().fadeIn("fast"); 
    }).mouseleave(function(){ 
      $(".benefit").stop().fadeOut("fast"); 
    });
  });

/*햄버거 메뉴*/
$(function(){
    $("#hamburger").mouseenter(function(){  //햄버거에 마우스를 올리면
      $("#hamburger").children("#menu").stop().fadeIn("fast"); //햄버거의 메뉴가 보임
    }).mouseleave(function(){  //햄버거에서 마우스가 벗어나면
      $("#menu").stop().fadeOut("fast"); //햄버거의 메뉴가 사라짐
    });
  });