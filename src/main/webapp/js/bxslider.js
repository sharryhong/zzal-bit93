(function($, window){
	'use strict';
	
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
    
})(jQuery, window);