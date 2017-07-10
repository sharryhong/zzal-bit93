(function($){
	'use strict';
	
    $(window).on("load",function(){
        $(".mobile-nav").mCustomScrollbar({
            axis:"x",
            theme:"dark-thin",
            autoHideScrollbar: true
        });
    });
    
    $.getJSON('mainList.json', function(result) {
        console.log(result.data.mainList)
        
      }) // getJSON()
    
    
    
})(jQuery);