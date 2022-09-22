/*사이드 책 순위*/
     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"버티기" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {

          // for문 (4개)
            var box = $("#best > .box");
            
            for(var i=0; i<box.length; i++){
 
                  $("#best > .box > .img").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+'</a>');
              		$("#best > .box > .text").eq(i).append("<h6>"+msg.documents[i].title+"</h6>");
                  $("#best > .box > .text").eq(i).append("<p>"+msg.documents[i].authors+"</p>");
                  $("#best > .box > .text").eq(i).append("<b>"+msg.documents[i].price+"원"+"</b>");
            }

        });     

         $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"용기" },
        headers:{Authorization: "KakaoAK b1221897c57ad322f3b2b8824f778d22"}
      })
        .done(function( msg ) {

          // for문 (4개)
            var box = $("#new > .box");
            
            for(var i=0; i<box.length; i++){
 
                  $("#new > .box > .img").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+'</a>');
              		$("#new > .box > .text").eq(i).append("<h6>"+msg.documents[i].title+"</h6>");
                  $("#new > .box > .text").eq(i).append("<p>"+msg.documents[i].authors+"</p>");
                  $("#new > .box > .text").eq(i).append("<b>"+msg.documents[i].price+"원"+"</b>");
            }

        });     
