$(document).ready(function(){
	var profileName = $('#profile-name'),
		profilePw = $('#profile-pw'),
		profilePwNew = $('#profile-pw-new'),
		profilePwRe = $('#profile-pw-re'),
	    memberpicfilename = $('.memberpic-filename');
	/*var no = 0
	try {
	  no = location.href.split('?')[1].split('=')[1]
	} catch (err) {}*/
	
	var no = 0 	
    $.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
	  if (result.data) {
		  no = result.data.no
		  profileName.val(result.data.nick)
		  $('.profile-picture').css({"background-image": "url(upload/"+result.data.membpic+")"});
	  }
	})

	$('#profile-modify-btn').click(function() {
      $.post(contextRoot + '/member/update.json', {
        'no': no,
        'nick': profileName.val(),
        'password': profilePwNew.val(),
        'membpic': $(memberpicfilename).val()
      }, function(result) {
    	  location.href = 'mypage.html?no=' + no 
      }, 'json')
    })
    
    /*$.getJSON('member/detail.json', {'no': no}, function(result) {
	    profileName.val(result.data.nick)
	    $('.profile-picture').css({"background-image": "url(image/"+result.data.membpic+")"});
	})*/
    
    var memberPhotoUpLoad

    memberPhotoUpLoad = $('.memberPhoto-upload-btn')

	$(memberPhotoUpLoad).on('click',function(){
		console.log(this,'clickbox')

		$(this).fileupload({
			url: '/zzal-bit93/member/upload.json',
			dataType: 'json',
			imageMaxWidth: 200,
			disableImageResize: /Android(?!.)|Opera/
				.test(window.navigator && navigator.userAgent),
				previewMaxWidth: 200,   // 미리보기 이미지 너비
				previewMaxHeight: 200,  // 미리보기 이미지 높이
				previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
				done: function (e, data) {
					console.log('done()...');
					console.log(data.result,'data-result얌');
					var filenames = data.result.data;
					console.log(filenames,'filenames얌');
					$(memberpicfilename).val(filenames)
					for (var i = 0; i < filenames.length; i++) {
			$('.profile-picture').css("background-image", 'url(' + data.files[i].preview.toDataURL() +')');
					}
				}
		});
	});
	
});
