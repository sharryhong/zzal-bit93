(function($) {
  'use strict';

  //로그인
    $('.login').click(function() {
    	console.log('로그인!')
    $.get("login.html", function(data) {
  	  $(".container").html(data);
    });
  });
  
})(jQuery);
