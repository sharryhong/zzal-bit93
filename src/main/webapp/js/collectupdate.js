(function($){
	'use strict';

/*let	maincollectdetail1 = $('#main-collectdetail1');
let maincollectdetail2 = $('#main-collectdetail2');
let maincollectdetail3 = $('#main-collectdetail3');


$.getJSON('collectdetail.json',function(result){
  console.log(result)

  let templateFn1 = Handlebars.compile($('#collectdetail-template1').text())
  let generatedHTML1 = templateFn1(result.data)
  console.log(generatedHTML1)
  maincollectdetail1.text('')
  maincollectdetail1.html(generatedHTML1)

	let templateFn2 = Handlebars.compile($('#collectdetail-template2').text())
	let generatedHTML2 = templateFn2(result.data)
	console.log(generatedHTML2)
	maincollectdetail2.text('')
	maincollectdetail2.html(generatedHTML2)
	})
$.getJSON('collectdetail.json',function(result){
  console.log(result)

  let templateFn3 = Handlebars.compile($('#collectdetail-template3').text())
  let generatedHTML3 = templateFn3(result.data)
  console.log(generatedHTML3)
  maincollectdetail3.text('')
  maincollectdetail3.html(generatedHTML3)
	})*/
	var no = 0
	try {
	  no = location.href.split('?')[1].split('=')[1]
	} catch (err) {}	
      	
	/*var picture = $('#collectPhoto'),
	title = $('#collect-title'),
	content = $('#collect-content')
	
	$.getJSON('collect/detail.json', {'no': no}, function(result) {
		var data = result.data
		picture.val(data.picture)
		title.val(data.title)
		content.val(data.content)   
	});*/
	
/*$.getJSON('member/detail.json', {'no': no}, function(result) {
	$('.user-name').text(result.data.nick)
    $('.profile-wrap .phot').css({"background-image": "url(image/"+result.data.membpic+")"});
}) */
	
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		 if (result.data) {
			 $('.user-info-face .user-name').text(result.data.nick)
			 $('.profile-wrap .phot').css({"background-image": "url(image/"+result.data.membpic+")"});
		 }
	})

	$.getJSON('collect/detail.json', {'no': no}, function(result) {
			$("#collect-add-title").attr("placeholder", result.data.title);
			$('#collect-add-content').attr("placeholder", result.data.content);
			/*$('#collect-add-title').text(result.data.title)
			$('#collect-add-content').text(result.data.content) 값은 들어오는데 input 태그에 입력이안됨*/
			console.log(result.data.title)
			console.log(result.data.content)
			$('.collect-photo').css({"background-image": "url(image/"+result.data.picture+")"})
	 });
	
	$('#collect-delete').click(function() {
		  $.getJSON('collect/delete.json', {'no': no}, function(result) {
		    location.href= 'mypage.html'
		  })
		})
})(jQuery);
