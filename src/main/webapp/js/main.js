(function($){
	'use strict';
	
	// scrollbar
    $(window).on("load",function(){
        $(".mobile-nav").mCustomScrollbar({
            axis:"x",
            theme:"dark-thin",
            autoHideScrollbar: true
        });
    });
    
    // 핸들바스를 이용한 html 템플릿 
    let zzalList1 = $('#zzal-list1');
    let zzalList2 = $('#zzal-list2');
    let zzalWeekList= $('#zzal-week-list');
    var templateFn = null;
    var generatedHTML = null;
    
    $.getJSON('mainList.json', function(result) {
	  // 템플릿을 실행하는 함수 리턴
      generateHandlebars(result, $('#main-template1'), zzalList1);
      generateHandlebars(result, $('#main-template2'), zzalList2);
	})
	  
    $.getJSON('mainWeekList.json', function(result) {
      generateHandlebars(result, $('#main-week-template'), zzalWeekList);
    })
    
    function generateHandlebars(result, el, target) {
      templateFn = Handlebars.compile(el.text())
  	  generatedHTML = templateFn(result.data)
  	  target.text('')
  	  target.html(generatedHTML)
    }
    
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
    $('.index-page .bxslider').bxSlider({
    	auto: true,
    	mode: 'fade',
    	speed: 300,
    	captions: true,
    	pager: false
	});
    
})(jQuery);