//*스토리k 제이슨 파일*//
$(function(){

    $.ajax({

      url: "./json/story.json",

      dataType: "json",

      success : function(data){

        if(data.length>0){

          for(var i in data){

            $(".story_list > .box > .img_box").eq(i).append('<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>');
            $(".story_list > .box > .img_box").eq(i).append("<span>"+data[i].category+"</span>");
            $(".story_list > .box ").eq(i).append('<a href="#">'+"<h4>"+data[i].title+"</h4>"+'</a>');
            $(".story_list > .box ").eq(i).append("<span>"+data[i].summary+"</span>");
          }
        }
      }
    });
  });