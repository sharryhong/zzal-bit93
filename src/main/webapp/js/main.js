(function($){
	'use strict';
	
    $(window).on("load",function(){
        $(".mobile-nav").mCustomScrollbar({
            axis:"x",
            theme:"dark-thin",
            autoHideScrollbar: true
        });
    });
    
    var zzalList = $('#zzal-list');
    
    $.getJSON('mainList.json', function(result) {
        console.log(result.data.mainList)
        // 템플릿을 실행하는 함수 리턴
	    var templateFn = Handlebars.compile($('#main-template').text())
	    console.log(templateFn)
	    var generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 html을 생성한다.
	    zzalList.text('')
	    zzalList.html(generatedHTML)
      }) // getJSON()
    
    
    
})(jQuery);