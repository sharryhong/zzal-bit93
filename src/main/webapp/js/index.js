/* 핸들바스 사용시 사용 함수 
 * 매개변수 el : 핸들바스 적용 id
 * 매개변수 target : 들어갈 위치
 * 사용 예 
 * $.getJSON('mainSlide.json', function(result) {
 *    generateHandlebars(result, $('#main-slide-template'), $('#mainSlide));
 *  })
 */
var templateFn = null;
var generatedHTML = null;
// 일반 핸들바스사용 
function generateHandlebars(result, el, target) {
//	console.log('generateHandlebars()')
    templateFn = Handlebars.compile(el.text())
    generatedHTML = templateFn(result.data)
    target.text('')
    target.html(generatedHTML)
}
// 무한 스크롤시 핸들바스 사용
function generateHandlebarsInfinity(result, el, target) {
//	console.log('generateHandlebarsInfinity()')
    templateFn = Handlebars.compile(el.text())
    generatedHTML = templateFn(result.data)
    target.append(generatedHTML)
}
$(document).ready(function(){ 
	// index.html 짤강의 리스트뿌리기
	var pageNo = 1
	    pageSize = 6
	var checkLast = true
	zzalListMain(pageNo, pageSize)
	function zzalListMain(pageNo, pageSize) {
		$.getJSON('zzal/zzalListWithCount.json',{'pageNo': pageNo, 'pageSize': pageSize}, function(result) {
			console.log(result.data)
			var foundRows = result.data.foundRows
			var lastPageNo = parseInt(foundRows / pageSize) 
			generateHandlebarsInfinity(result, $('#main-template'), $('#zzal-list'))
		    
		    if (pageNo < lastPageNo) { // 마지막 이후에는 무한스크롤 실행되지 않게 하기 
		       checkLast = true
		    }
		})
	}
	
	/*무한 스크롤*/
	var $scrollToTop = $('.scroll-to-top')
	$(document).scroll(function() {
		/*
		 * $(window).scrollTop() : scroll의 top위치  
		 * $(window).height() : 현재 보이는 window의 height 
		 * $(document).height() : 현재 document전체 height
		 */
		if ($(window).scrollTop() > 300) {
			$scrollToTop.fadeIn()
		} else {
			$scrollToTop.fadeOut()
		}
	    if (checkLast == true && ($(window).scrollTop() + 50) >= $(document).height() - $(window).height()) {
	      checkLast = false
	      ++pageNo
	      console.log(pageNo)
	      zzalListMain(pageNo, pageSize)
	    }
	});
	$scrollToTop.click(function() {
		$('html, body').animate({scrollTop: 0}, 200)
		return false
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
				'<li><a href="#" class="zzal-lect" data-zzno="'+zzal[i].zzno+'"><span class="ranking">'+(i+1) +'</span><span class="user-name"> ['+zzal[i].member.nick+'] </span><span class="zzal-title">'+zzal[i].title+'</span></a></li>'
			].join('')
			
			newSlideEl += [
				'<li class="swiper-slide"><a href="#" class="zzal-lect" data-zzno="'+zzal[i].zzno+'"><img src="upload/'+zzal[i].mainPic+'"><p class="title">'+zzal[i].title+'</p><span class="rank">'+(i+1)+'</span></a></li>'
			]
		}
		$target.html(newEl)
		$targetSlide.html(newSlideEl)
		
		swiperFn()
	})
	
	function swiperFn() {
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

