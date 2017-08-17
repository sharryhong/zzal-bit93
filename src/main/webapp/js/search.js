(function($) {
	'use strict';

	var availableTags=[];
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


		e.preventDefault();
	});
	// var InitSearchPack = function (){
	// 	this.setSpack=function(obj){
	// 		this.zzalNo=obj.szzalno,
	// 		this.nick=obj.snick,
	// 		this.userPic=obj.smpic,
	// 		this.mainPic=obj.szmpic,
	// 		this.title=obj.stitle,
	// 		this.hitcnt=obj.shitcnt,
	// 		this.lcnt=obj.slcnt,
	// 		this.replcnt=obj.sreplcnt,
	// 		this.catgName=obj.scategoryName
	// 	}
	// }



	// 검색후 엔터 키보드 눌렀을 때, 과거에 검색한 결과 리스트추가.
	// ver search 기능의 적용!
	$(".search-line").keydown(function(key) {


		if (key.keyCode == 13) {
			console.log($('#searchcon').val())
			if($('#searchcon').val() != ""){
				// location.href='/zzal-bit93/searchresult.html'
			}
		}



	});
	function autocon(){
		$.ajax({
			url:'/zzal-bit93/search/found.json',
			method:'POST',
			success : function(data){console.log(data,"성공 객체임")

				availableTags=data.data.zzalList



			console.log(availableTags[0])

			$('#searchcon').autocomplete({
				source:availableTags,
				minLength:0,
				appendTo : ".suggest-all-line",
				select: function(event,ui){

					$('#searchcon').val(ui.item.label)
					return false;
				}
//			select: function(event, ui){
//			console.log(ui)
//			}
			}).autocomplete("instance")._renderItem = function(ul, item){
				console.log(item)
				templateFn = Handlebars.compile($('#search-template').text())
					//
					// <ul>
					// 	<li class='suggest-in-line'><a href='#' class='link-search'><div class="left-zzal"></div></a>
					// 		<div class="search-mid-con">
					// 			<span class="info user-info"><img class="user-pic" src="image/sul.jpg" /><span class="name">유끼만두냔</span></span>
					// 			<span class="info cata-name">음식,먹방</span>
					// 			<span class="info lect-titl">만두만두 맛나게 먹기!</span>
					// 			<span class="info cdt">2017-08-16</span>
					// 		</div>
					// 		<div class="detail-info">
					// 			<ul>
					// 				<li><span class="left"><i class='fa fa-heart-o name' aria-hidden='true'></i></span><span class="right">121212</span></li>
					// 				<li><span class="left"><i class='fa fa-commenting-o' aria-hidden='true'></i></span><span class="right">121212</span></li>
					// 				<li><span class="left"><i class='fa fa-eye' aria-hidden='true'></i></span><span class="right">121212</span></li>
					// 			</ul>
					// 		</div>
					// 	 <a href='#' class='btn-key'><i class='fa fa-times'aria-hidden='true'></i></a>
					//  </li>
				  // </ul>

					/*"<li class = 'suggest-in-line'>"
													+"<a href='#' class='link-search'></a>"
													+"<a href='#' class='btn-key'><i class='fa fa-rocket' aria-hidden='true'></i></a>"
								  +"</li>"*/
				
				return $(templateFn(item)).appendTo(ul);
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
