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
		$(".signup-container").hide();
	    $("body").css("overflow", "visible");
	});
	
	$('.sign-in').click(function() {
		console.log('sign-in click!!!')
		$(".container").hide();
		$(".signup-container").show();
		$(".logo").hide();
		$(".mini-logo").hide();


		$("body").css("overflow", "hidden");

	});
	

})(jQuery);
