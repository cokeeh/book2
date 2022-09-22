/*구매수량 증가 감소*/
	$(function(){
		var i = 1 //기본 수량
		$(".plus").click(function(){
			i++;
			$("#count").val(i);	//증가한 값 대입
		});
		$(".minus").click(function(){
			i--;
			if(i<1){		//0보다 작으면 1로 돌아옴
				i=1;
			}
            $("#count").val(i); //감소한 값 대입
		});
	});