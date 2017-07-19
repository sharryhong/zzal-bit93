(function($) {
	$('.login').click(function() {
		console.log('lolol')

		$(".login-curtain").show();
		$(".container").show();
		$("body").css("overflow", "hidden");
			
	});
	
	$('.close-btn').click(function() {
		$(".login-curtain").show();

	});
	

})(jQuery);
