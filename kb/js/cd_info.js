//*음반 첫번째 목록 제이슨*//
$(function(){

    $.ajax({

      url: "./json/cd_info.json",

      dataType: "json",

      success : function(data){

        if(data.length>0){

          for(var i in data){

            $(".cd1 > .box").eq(i).append('<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>');
            $(".cd1 > .box > .text_box").eq(i).append("<h4>"+data[i].category+"</h4>");
            
          }
        }
      }
    });
  });