(function($) {
	'use strict';

	var availableTags;
	var fisearchvalue;
	//$(window).on("load", function() {

	//검색버튼(돋보기버튼)이나, 검색창 클릭하면 검색헤더로 변하게 만들기.
	$('.search').click(function(e) {

		$(".opacity-curtain").show();
		$(".header").hide();

		$(".suggest-search").show();
		$(".inner-head").show();
		/* $("body").css("overflow", "hidden");*/
		autocon()



	});




	// 검색후 엔터 키보드 눌렀을 때, 과거에 검색한 결과 리스트추가.
	// ver search 기능의 적용!
	$(".search-line").keydown(function(key) {
//		$('#searchcon').attr('autocomplete', 'on');

//		$(':input').live('focus',function(){
//		$(this).attr('autocomplete', 'off');
//		});

//		fisearchvalue = $('#searchcon').val()  
		
			if (key.keyCode == 13) {
				console.log($('#searchcon').val())    	      	  
				if($('#searchcon').val() != ""){	
//
//					$.ajax({
//						method:"GET",
//						url:'/zzal-bit93/search/found.json',
//						data:{'keyword': $('#searchcon').val()},
//						success : function(data){console.log(data,"검색 객체임")
//						}  			 
//					})  
					location.href='/zzal-bit93/searchresult.html'
				}
			}



	});
function autocon(){
	$.ajax({
		url:'/zzal-bit93/search/autosearch.json',
		method:'POST',
		success : function(data){console.log(data,"성공 객체임")

			availableTags=data.data.zzalList;
		    console.log(availableTags)

		$('#searchcon').autocomplete({	    		  
			source:availableTags,
			minLength:0,
			appendTo : ".suggest-all-line",
			select: function(event,ui){
				
				$('#searchcon').val(ui.item.label)
				return false;
			}
//		select: function(event, ui){
//		console.log(ui)
//		}
		}).autocomplete("instance")._renderItem = function(ul, item){
		    	return $("<li class = 'suggest-one-line'><a href='#' class='link-search'>"+item.value+"</a><a href='#' class='btn-key'><i class='fa fa-rocket' aria-hidden='true'></i></a></li>")
		    			.appendTo(ul);
		  }
		
		},
		dataType: 'json'
	})
}//autocon

	// 검색헤더 상태에서 취소버튼 누르면 일반 헤더로 전환됨
	$('.cancle-btn').click(function() {
		$(".inner-head").hide();
		$(".suggest-search").hide();
		$(".header").show();
		$(".opacity-curtain").hide();

	});


})(jQuery);
