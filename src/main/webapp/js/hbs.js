(function($){
	'use strict';
	
    // 핸들바스를 이용한 html 템플릿 
    let zzalList1 = $('#zzal-list1');
    let zzalList2 = $('#zzal-list2');
    let zzalWeekList= $('#zzal-week-list');
    let mainSlide = $('#main-slide');
    let templateFn = null;
    let generatedHTML = null;
    
    $.getJSON('mainList.json', function(result) {
	  // 템플릿을 실행하는 함수 리턴
      generateHandlebars(result, $('#main-template1'), zzalList1);
      generateHandlebars(result, $('#main-template2'), zzalList2);
	})
	  
    $.getJSON('mainWeekList.json', function(result) {
      generateHandlebars(result, $('#main-week-template'), zzalWeekList);
    })
    
    $.getJSON('mainSlide.json', function(result) {
      generateHandlebars(result, $('#main-slide-template'), mainSlide);
    })
    
    function generateHandlebars(result, el, target) {
      templateFn = Handlebars.compile(el.text())
  	  generatedHTML = templateFn(result.data)
  	  target.text('')
  	  target.html(generatedHTML)
    }
    
})(jQuery);