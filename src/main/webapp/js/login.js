(function($) {
	$('.login').click(function() {
		console.log('lolol')

		$(".login-curtain").show();
		$(".login-container").show();
		$("body").css("overflow", "hidden");
			
	});
	
	$('.close-btn').click(function() {
		console.log('closebtn click!!!')
		$(".login-curtain").hide();
		$(".login-container").hide();
		$(".signup-container").hide();
	    $("body").css("overflow", "visible");
	});
	
	$('.sign-in').click(function() {
		console.log('sign-in click!!!')
		$(".login-container").hide();
		$(".signup-container").show();
		$(".login-logo").hide();
		$(".mini-logo").hide();
		$("body").css("overflow", "hidden");
	});
	

})(jQuery);
