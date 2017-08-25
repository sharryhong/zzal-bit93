(function($) {
	'use strict';

	var availableTags;

//	$(window).on("load", function() {

//	검색버튼(돋보기버튼)이나, 검색창 클릭하면 검색헤더로 변하게 만들기.
	$('.search').click(function(e) {

		$(".opacity-curtain").show();
		$(".header").hide();

		$(".suggest-search").show();
		$(".inner-head").show();
		$("body").css("overflow-y","hidden")

		searchDisplay();
		e.preventDefault()
	});



	var searchpageNo;
	var lastSearchPageNo;
	var lastLiNo;


	var indexNum=0;
	function searchMover(key){
		let el=$('.suggest-in-line'),
		elchild=$(el[indexNum]),
		elchildPre=$(el[indexNum-1]),
		elchildNext=$(el[indexNum+1]);
		
		
		if(indexNum==el.length){
			// indexNum 마지막가면 안됨 그래서 여기서 처리함 
			indexNum=indexNum-1
			$(el[indexNum]).removeClass("on")
		    $(el[indexNum-1]).addClass("on")
		    return
		}

		if(key==40){	
			console.log(indexNum)
			if(indexNum>0){
				elchildPre.removeClass("on")
			}

			elchild.addClass("on")
			if(indexNum>0&&indexNum%4==0){

				$(".search-zzallect").animate({scrollTop:$(".suggest-in-line.on")[0].offsetTop-70},150)
//				console.log(elchild[0].getBoundingClientRect().top)
			}
			++indexNum
			return 
		}else{
			console.log(indexNum)
			
			if(indexNum < 0){
			return indexNum=0
//			
			}
//			
			
			indexNum=indexNum-1

			if(indexNum>0){
				$(el[indexNum]).removeClass("on")
			}
			
			
			$(el[indexNum-1]).addClass("on")

			if(indexNum>0&&indexNum%3==0){
			
				if(indexNum-3>0){
					$(".search-zzallect").animate({scrollTop:$(".suggest-in-line")[indexNum-3].offsetTop+70},150)					
					return
				} // 태그 5개 남았을 때 적용
			   
				
				$(".search-zzallect").animate({scrollTop:0},150)
//		
//			   console.log(elchild[0].getBoundingClientRect().top) //client에서 좌표값 알 아 볼때 쓰던거!! viewport에 대하여 알아보기!!
			   // document 객체가 문서 전체를 
			   // window객체가 현제 내가 보는 화면!
			}


			return


		}

	}






	function searchDisplay(){


		console.log(searchpageNo,"디스플레이")
//		검색후 엔터 키보드 눌렀을 때, 과거에 검색한 결과 리스트추가.
//		ver search 기능의 적용!
//		$(".search-line").keydown(function(e) {		
		$('.opacity-curtain').on('keydown',".search-line","search-zzallect",function(e){	
			if(e.keyCode==13){
				console.log("enter!")
				return location.href='detailpage.html?zzno='+$(".suggest-in-line.on").attr('data-szzalNo')
			}// enterevent를 사용하려다가 걍 keyevent하나로 해결 하려함
			
			
			if(e.keyCode==38|| e.keyCode==40){
				setTimeout(searchMover(e.keyCode), 300);
				return 
			}//keyboard event를 받아서 위 아래로 목록 이동을 위함

			


			setTimeout(() => {
				console.log("들어옴")
				if($(".search-line").val()!=""){

					$('#how-search-man').html("");
					searchpageNo=1;
					searchListMaker(searchpageNo)
					return indexNum=0;
				}
			}, 150);


			console.log("비동기 진행")	


		}); // setTimeout으로 사용자가 입력하는 값이 어느 정도 되었을때  searchListMaker ajax


		$(".search-zzallect").scroll(function() {

			var elem = $(".search-zzallect");
			console.log(elem.outerHeight(),'outer')
			console.log(parseInt(elem[0].scrollHeight-elem.scrollTop()),'sum')
//			console.log( == elem.outerHeight())
					
//			if(parseInt(elem[0].scrollHeight-elem.scrollTop()) == elem.outerHeight()) {
		    
			if(elem.outerHeight()-parseInt(elem[0].scrollHeight-elem.scrollTop())<16) {
				console.log('scroll man!!!호우2')
				++searchpageNo;
				return searchListMaker(searchpageNo)

			}

		});	//무한 스크롤링


	}//searchDisplay


	


	function searchListMaker(searchpageNo){		
		$.ajax({
			url:'/zzal-bit93/search/found.json',
			method:'GET',
			data:{'keyword':$(".search-line").val(),'pageNo':searchpageNo},
			success : function(result){
				console.log(result)
				console.log(searchpageNo,"메이커")
				console.log(result.data.totNum)

				let stemplateRn=Handlebars.compile($('#search-template').text())
				let generatedHTML = stemplateRn(result.data)
				$('#how-search-man').append(generatedHTML)

				lastSearchPageNo=((result.data.totNum % 7) > 0 ? 1 : 0)+1


				lastLiNo=result.data.totNum


				return 
			}//success
		})	


	}

$('.btn-delete').on('click',function(e){
	$('#searchcon').val('')
	e.preventDefault()
})
	
	

//	검색헤더 상태에서 취소버튼 누르면 일반 헤더로 전환됨
	$('.cancle-btn').click(function() {
		$('#how-search-man').html("");
		$(".inner-head").hide();
		$(".suggest-search").hide();
		$(".header").show();
		$(".opacity-curtain").hide();
		$("body").css("overflow-y","scroll")

	});


})(jQuery);
