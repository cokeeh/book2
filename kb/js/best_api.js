//*베스트셀러 책 목록*//
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"용기" },
  headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
})
  .done(function( msg ) {

    // for문 (10개)
      var box = $(".best_seller1 > .box");
      
      for(var i=0; i<box.length; i++){
            $(".best_seller1 > .box").eq(i).append("<span>" + Number(i + 1) + "</span>");
            $(".best_seller1 > .box").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
            $(".best_seller1 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");            
      }

  });

    $.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"철학" },
  headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
})
  .done(function( msg ) {

    // for문 (10개)
      var box = $(".best_seller2 > .box");
      
      for(var i=0; i<box.length; i++){
            $(".best_seller2 > .box").eq(i).append("<span>" + Number(i + 1) + "</span>");
            $(".best_seller2 > .box").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
            $(".best_seller2 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");        
      }

  });

    $.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"wonder" },
  headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
})
  .done(function( msg ) {

    // for문 (10개)
      var box = $(".best_seller3 > .box");
      
      for(var i=0; i<box.length; i++){
            $(".best_seller3 > .box").eq(i).append("<span>" + Number(i + 1) + "</span>");
            $(".best_seller3 > .box").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
            $(".best_seller3 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");        
      }

  });

    $.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"경험" },
  headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
})
  .done(function( msg ) {

    // for문 (10개)
      var box = $(".best_seller4 > .box");
      
      for(var i=0; i<box.length; i++){
            $(".best_seller4 > .box").eq(i).append("<span>" + Number(i + 1) + "</span>");
            $(".best_seller4 > .box").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
            $(".best_seller4 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");      
      }

  });


  //*베스트셀러 이북 추천*//
  $.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"이웃덕후 1" },
  headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
})
  .done(function( msg ) {
      
      $(".recomand_eBook > .box1").append("<img src='"+msg.documents[0].thumbnail+"'/>");
      $(".recomand_eBook > .box1").append("<h5>"+msg.documents[0].title+"</h5>");
    
  });


  $.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query:"눈물 한 방울" },
  headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
})
  .done(function( msg ) {
      
      $(".recomand_eBook > .box2").append("<img src='"+msg.documents[0].thumbnail+"'/>");
      $(".recomand_eBook > .box2").append("<h5>"+msg.documents[0].title+"</h5>");
  });
