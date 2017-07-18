(function($){
	'use strict';
	
	// 메뉴선택시 on붙이기
	let href = location.href;
	let pageurl = href.substr(href.lastIndexOf('/') + 1);
	var url = window.location.pathname, 
    urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
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
    if (pageurl == '' || pageurl == "index.html") { // 홈인 경우
		$('.nav .home').addClass('on');
		$('.mobile-nav .home').addClass('on');
	}
	
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
    
})(jQuery);