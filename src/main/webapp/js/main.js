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
    
    $.getJSON('mainList.json', function(result) {
	  // 템플릿을 실행하는 함수 리턴
	  let templateFn1 = Handlebars.compile($('#main-template1').text())
	  let generatedHTML1 = templateFn1(result.data)
	  zzalList1.text('')
	  zzalList1.html(generatedHTML1)
	    
	  let templateFn2 = Handlebars.compile($('#main-template2').text())
	  let generatedHTML2 = templateFn2(result.data)
	  zzalList2.text('')
	  zzalList2.html(generatedHTML2)
	})
	  
    $.getJSON('mainWeekList.json', function(result) {
      console.log(result.data.weekList)
      let templateFn = Handlebars.compile($('#main-week-template').text())
	  let generatedHTML = templateFn(result.data)
	  zzalWeekList.text('')
	  zzalWeekList.html(generatedHTML)
    })
    
})(jQuery);