(function($, window){
	'use strict';
	
	// 메뉴선택시 on붙이기 (해당 url일때)
	let href = location.href;
	let pageurl = href.substr(href.lastIndexOf('/') + 1);
	var url = window.location.pathname, 
    urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
	//console.log(pageurl)
    $('.nav a').each(function(){
        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            $(this).addClass('on');
        }
    });
    $('.mobile-nav a').each(function(){
        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            $(this).addClass('on');
        }
    });
    // 홈인 경우
    if (pageurl == '' || pageurl == "index.html") { 
		$('.nav .home').addClass('on');
		$('.mobile-nav .home').addClass('on');
	}
    
    // 모바일화면 헤더에 title 붙이기 
    var pageTitle = ''
    if (pageurl.includes("notice")) { pageTitle = '알림' }
    else if (pageurl.includes("mypage")) { pageTitle = '마이페이지' }
    $('.header .page-right .title').text(pageTitle)
	
	// 모바일화면 메뉴 swiper적용
	let swiper = new Swiper('#header .swiper-container', {
		scrollbar: '.swiper-pagination',
        slidesPerView: 'auto',
        spaceBetween: 0,
        grabCursor: true
    });
    
    // 각 카테고리 상단 슬라이더 
    $('.main-content.category-con .bxslider').bxSlider({
    	auto: true,
    	speed: 300,
    	slideWidth: 280,
        minSlides: 2,
        maxSlides: 4,
        moveSlides: 1,
        controls: false
	});
    // 메인페이지 상단 슬라이더
    $('.index-page .bxslider').bxSlider({
    	auto: true,
    	mode: 'fade',
    	speed: 300,
    	captions: true,
    	pager: false
	});
    
    // incluses polyfill
    if (!String.prototype.includes) {
	  String.prototype.includes = function(search, start) {
	    'use strict';
	    if (typeof start !== 'number') {
	      start = 0;
	    }
	    
	    if (start + search.length > this.length) {
	      return false;
	    } else {
	      return this.indexOf(search, start) !== -1;
	    }
	  };
	}
    
})(jQuery, window);