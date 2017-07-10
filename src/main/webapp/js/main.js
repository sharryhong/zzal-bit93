(function($){
	'use strict';
	
    $(window).on("load",function(){
        $(".mobile-nav").mCustomScrollbar({
            axis:"x",
            theme:"dark-thin",
            autoHideScrollbar: true
        });
    });
    
    var zzalList1 = $('#zzal-list1');
    
    $.getJSON('mainList.json', function(result) {
        console.log(result.data.mainList)
        // 템플릿을 실행하는 함수 리턴
	    var templateFn = Handlebars.compile($('#main-template').text())
	    console.log(templateFn)
	    var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 html을 생성한다.
	    zzalList1.text('')
	    zzalList1.html(generatedHTML)
      }) // getJSON()
    
    
    
})(jQuery);