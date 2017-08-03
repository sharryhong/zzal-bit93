(function($){
	'use strict';


	
/*$.getJSON('member/detail.json', {'no': no}, function(result) {
	$('.user-name').text(result.data.nick)
    $('.profile-wrap .phot').css({"background-image": "url(image/"+result.data.membpic+")"});
}) */
var no = 0
	try {
		no = location.href.split('?')[1].split('=')[1]
	} catch (err) {}	
	
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		 if (result.data) {
			 $('.user-info-face .user-name').text(result.data.nick)
			 $('.profile-wrap .phot').css({"background-image": "url(image/"+result.data.membpic+")"});
		 }
	})

	$.getJSON('collect/detail.json', {'no': no}, function(result) {
			$('.category-explain').text(result.data.content)
			$('.category-title').text(result.data.title)
			$('.collect-photo').css({"background-image": "url(upload/"+result.data.picture+")"})
		$(document.body).on('click', '.btn-info', function(event) {
			/*console.log($(this).attr('data-no'))*/
			location.href = 'collectupdate.html?cono=' + result.data.no
			event.preventDefault()
		});
	 });
	
})(jQuery);
