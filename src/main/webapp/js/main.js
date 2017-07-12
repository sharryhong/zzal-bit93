(function($){
	'use strict';
	
    $(window).on("load",function(){
        $(".mobile-nav").mCustomScrollbar({
            axis:"x",
            theme:"dark-thin",
            autoHideScrollbar: true
        });
    });
    
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
    
})(jQuery);