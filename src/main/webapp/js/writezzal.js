(function($){
	'use strict';

    // $(window).on("load",function(){
    //     $(".mobile-nav").mCustomScrollbar({
    //         axis:"x",
    //         theme:"dark-thin",
    //         autoHideScrollbar: true
    //     });
    // });

    let userpic1 = $('#user-pic1');
    $.getJSON('writezzal.json', function(result) {
			console.log("hi")
	  // 템플릿을 실행하는 함수 리턴
	  let templateFn1 = Handlebars.compile($('#writeuser-template1').text())
	  let generatedHTML1 = templateFn1(result.data)
	  userpic1.text('')
	  userpic1.html(generatedHTML1)
	})

	
	$(document).ready(function(){
        $("#header").load("search.html")
       /* id 지정을 통해서도 가능합니다. 
        $("#header").load("header.html #navbar")
        */       
     })


})(jQuery);
