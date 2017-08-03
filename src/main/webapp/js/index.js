$(document).ready(function(){ 
	// index.html 짤강의 리스트뿌리기
	$.getJSON('zzal/zzalListWithCount.json', function(result) {
		console.log(result)
		generateHandlebars(result, $('#main-template'), $('#zzal-list'));
	})
	
	// index.html 금주의 인기짤강 & 슬라이드에 뿌리기 
	$.getJSON('zzal/zzalBestList.json', function(result) {
		console.log(result.data)
		
		var zzal = result.data.zzalList
		var $target = $('#best-week-zzal'),
		    $targetSlide = $('#main-slide')
		var newEl = '',
		    newSlideEl = ''
		for (let i = 0; i < result.data.zzalList.length; i++) {
			newEl += [
				'<li data-zzno="'+zzal[i].zzno+'"><a href="#"><span class="ranking">'+(i+1)+'</span><span class="user-name"> ['+zzal[i].member.nick+'] </span><span class="zzal-title">'+zzal[i].title+'</span></a></li>'
			].join('')
			
			newSlideEl += [
				'<li class="swiper-slide"><img src="upload/'+zzal[i].mainPic+'"><p class="title">'+zzal[i].title+'</p><span class="rank">'+(i+1)+'</span></li>'
			]
		}
		$target.html(newEl)
		$targetSlide.html(newSlideEl)
		
		swiperFn()
	})
	
	function swiperFn() {
		/*$('.index-page .bxslider').bxSlider({
	    	auto: true,
	    	mode: 'fade',
	    	speed: 300,
	    	captions: true,
	    	pager: false
		});*/
		var swiper = new Swiper('.slider .swiper-container', {
	        pagination: '.swiper-pagination',
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        paginationClickable: true,
	        centeredSlides: true,
	        autoplay: 2500,
	        autoplayDisableOnInteraction: false,
	        effect: 'fade',
	        loop: true
	    });
	}
	
});

