    //*연관 책*//
      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"성공" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {

          // for문 (4개)
            var box = $(".related_book1 > .box");
            
            for(var i=0; i<box.length; i++){
 
                  $(".related_book1 > .box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+'</a>');
                  $(".related_book1 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");
                  $(".related_book1 > .box").eq(i).append("<h6>"+msg.documents[i].price+"원"+"</h6>");
            }

        });

     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"행복" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {

          // for문 (4개)
            var box = $(".related_book2 > .box");
            
            for(var i=0; i<box.length; i++){
 
                  $(".related_book2 > .box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+'</a>');
                  $(".related_book2 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");
                  $(".related_book2 > .box").eq(i).append("<h6>"+msg.documents[i].price+"원"+"</h6>");
            }

        });     