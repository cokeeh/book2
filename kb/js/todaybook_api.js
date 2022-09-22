        //*오늘의 책 목록*//
        $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"박문호 박사의 빅히스토리 공부" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {
            
            $(".todaybook_box1").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+'</a>');

        });

        $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"류" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {
            
            $(".todaybook_box2").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+'</a>');

        });

        $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"인류애가 제로가 되었다" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {
            
            $(".todaybook_box3").append('<a href="#">'+"<img src='"+msg.documents[0].thumbnail+"'/>"+'</a>');

        });
		