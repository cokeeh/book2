//*음반 두번째 목록 제이슨*//
$(function(){

    $.ajax({

      url: "./json/cd2_info.json",

      dataType: "json",

      success : function(data){

        if(data.length>0){

          for(var i in data){

            $(".cd2 > .box").eq(i).append('<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>');
            $(".cd2 > .box > .text_box").eq(i).append("<h4>"+data[i].category+"</h4>");
            
          }
        }
      }
    });
  });