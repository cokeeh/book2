      //*화제의 신간 책 목록*//
        $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"시집" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {

          // for문 (4개)
            var box = $(".newbook_book1 > .box");
            
            for(var i=0; i<box.length; i++){
 
                  $(".newbook_book1 > .box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+'</a>');
                  $(".newbook_book1 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");
                  $(".newbook_book1 > .box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
            }

        });

        $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"Harry Potter" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {

          // for문 (4개)
            var box = $(".newbook_book2 > .box");
            
            for(var i=0; i<box.length; i++){
 
                  $(".newbook_book2 > .box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+'</a>');
                  $(".newbook_book2 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");
                  $(".newbook_book2 > .box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
            }

        });

        $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"정원" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {

          // for문 (4개)
            var box = $(".newbook_book3 > .box");
            
            for(var i=0; i<box.length; i++){
 
                  $(".newbook_book3 > .box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+'</a>');
                  $(".newbook_book3 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");
                  $(".newbook_book3 > .box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
            }

        });

        $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"에세이" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {

          // for문 (4개)
            var box = $(".newbook_book4 > .box");
            
            for(var i=0; i<box.length; i++){
 
                  $(".newbook_book4 > .box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+'</a>');
                  $(".newbook_book4 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");
                  $(".newbook_book4 > .box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
            }

        });

        $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"심리" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {

          // for문 (4개)
            var box = $(".newbook_book5 > .box");
            
            for(var i=0; i<box.length; i++){
 
                  $(".newbook_book5 > .box").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+'</a>');
                  $(".newbook_book5 > .box").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");
                  $(".newbook_book5 > .box").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
            }

        });