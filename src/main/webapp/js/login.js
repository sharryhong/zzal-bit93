(function($) {
	$('.before-login').click(function() {
		console.log('로그인!')

		$.get("login.html", function(data) {
			$(".container").html(data);

		});
	})
})(jQuery);
