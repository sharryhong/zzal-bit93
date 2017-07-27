(function($){
	'use strict';
	
	var no = 0
	try {
	  no = location.href.split('?')[1].split('=')[1]
	} catch (err) {}
	
	/*$.getJSON('/member/detail.json', {'no': no}, function(result) {
      console.log(result)
    })*/
    
})(jQuery);