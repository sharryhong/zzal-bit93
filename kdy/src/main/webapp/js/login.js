(function($) {
	$('.login').click(function() {
		console.log('lolols')

		$(".login-curtain").show();
		$(".login-container").show();
		$("body").css("overflow", "hidden");
			
	});
	
	$('.close-btn').click(function() {
		console.log('closebtn click!!!')
		$(".login-curtain").hide();
		$(".login-container").hide();
		$(".signup-container").hide();
		$(".findId-container").hide();
		$(".findId-sendEmail-container").hide();

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
	
	$('.findId').click(function(){
		console.log('span findId click^^!')
		$(".login-container").hide();
		$(".findId-container").show();
		$("body").css("overflow", "hidden");
	});
	
	

	// 비밀번호 찾기 창에서, 엔터키로 확인누르기. 
	$(".input-findId").keydown(function(key) {
		if (key.keyCode == 13) {

			$(function() {
				console.log('findIdConBtn click!!!')
				$(".findId-container").hide();
				$(".findId-sendEmail-container").show();
				$("body").css("overflow", "visible");

			});
		}
	});
	
	// 비밀번호 찾기 창에서, 마우스로 확인누르기. 
	$('.findIdConBtn').click(function() {
		console.log('findIdConBtn click!!!')
		$(".findId-container").hide();
		$(".findId-sendEmail-container").show();
		$("body").css("overflow", "visible");
	});

	$('.submitBtn').click(function() {
		console.log('closebtn click!!!')
		$(".findId-sendEmail-container").hide();
		$("body").css("overflow", "visible");
		$(".login-curtain").hide();

	});


})(jQuery);
