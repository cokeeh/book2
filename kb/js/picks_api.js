      //*픽한 책 목록*//
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"여행" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {

          // for문 (4개)
            var box = $(".Picksbook1 > .box");
            
            for(var i=0; i<box.length; i++){
 
                  $(".Picksbook1 > .box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+'</a>');
                  $(".Picksbook1 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");
                  $(".Picksbook1 > .box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
            }

        });

     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"철학" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {

          // for문 (4개)
            var box = $(".Picksbook2 > .box");
            
            for(var i=0; i<box.length; i++){
 
                  $(".Picksbook2 > .box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+'</a>');
                  $(".Picksbook2 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");
                  $(".Picksbook2 > .box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
            }

        }); 