(function($) {
	$('.login').click(function() {
		console.log('lolol')

		$(".login-curtain").show();
		$(".container").show();
		$("body").css("overflow", "hidden");
			
	});
	
	$('.close-btn').click(function() {
		console.log('closebtn click!!!')
		$(".login-curtain").hide();
		$(".container").hide();
	    $("body").css("overflow", "visible");


	});
	

})(jQuery);
