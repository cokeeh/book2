//메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임

      $(function(){

        $.get("./txt/book_introduce.txt", function(data) {

          $("#book_introduce").html(data);

        })     



     });

       $(function(){

        $.get("./txt/author_introduce.txt", function(data) {

          $("#author_introduce > .text_box").html(data);

        })     



     });


     $(function(){

        $.get("./txt/index.txt", function(data) {

          $("#index").html(data);

        })     



     });  