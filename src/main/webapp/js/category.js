$(document).ready(function(){ 
	var cno = 0
	try {
	  cno = location.href.split('?')[1].split('=')[1]
	} catch (err) {}
	
	$categoryTitle = $('.category-con .titles-wrap .title')
	if (cno == 1) { $categoryTitle.text('음악') }
	if (cno == 2) { $categoryTitle.text('사진 · 여행') }
	if (cno == 3) { $categoryTitle.text('예술 · 문화') }
	if (cno == 4) { $categoryTitle.text('연애 · 가족') }
	if (cno == 5) { $categoryTitle.text('요리') }
	if (cno == 6) { $categoryTitle.text('경제') }
	if (cno == 7) { $categoryTitle.text('IT') }
	if (cno == 8) { $categoryTitle.text('직업 · 진로') }
	if (cno == 9) { $categoryTitle.text('패션 · 뷰티') }
	
	// 상단 슬라이드 
	$.getJSON('zzal/zzalBestCategoryList.json', {'cno': cno}, function(result) {
		console.log(result.data)
		generateHandlebars(result, $('#category-slide-template'), $('.category-con .swiper-wrapper'))
		
		var slidesPer = null,
			checkMobile = true
		if(window.innerWidth > 766){
			slidesPer = 4
			swiperFn(slidesPer)
			checkMobile = false
		} else {
			slidesPer = 2
			swiperFn(slidesPer)
			checkMobile = true
		}
		
		$(window).resize(function(){
			var slidesPer = null
			if(window.innerWidth > 766 && checkMobile == false){
				checkMobile = true
				console.log('>>>')
				slidesPer = 4
				swiperFn(slidesPer)
			} else if(window.innerWidth < 766 && checkMobile == true) {
				checkMobile = false
				console.log('<<<')
				slidesPer = 2
				swiperFn(slidesPer)
			}
		});
	})
	
	function swiperFn(slidesPer) {
		var swiper = new Swiper('.category-con .swiper-container', {
			pagination: '.swiper-pagination',
			slidesPerView: slidesPer,
			paginationClickable: true,
			autoplay: 2500,
			autoplayDisableOnInteraction: false
		});
	}
	
	// category-music.html 짤강의 리스트뿌리기
	var pageNo = 1
	    pageSize = 6
	var checkLast = true
	zzalListMain(pageNo, pageSize)
	function zzalListMain(pageNo, pageSize) {
		$.getJSON('zzal/zzalListCategory.json',{'pageNo': pageNo, 'pageSize': pageSize, 'cno': cno}, function(result) {
			console.log(result.data)
			var foundRows = result.data.foundRows
			var lastPageNo = parseInt(foundRows / pageSize) 
			generateHandlebarsInfinity(result, $('#category-template'), $('#zzal-list'))
		    
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
	
});

