(function($){
	'use strict';
	
	var fififilename = $('.fifi-filename');	
	var no = 0
	try {
	  no = location.href.split('?')[1].split('=')[1]
	} catch (err) {}	
      	

	/*$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		 if (result.data) {
			 $('.user-info-face .user-name').text(result.data.nick)
			 $('.profile-wrap .phot').css({"background-image": "url(image/"+result.data.membpic+")"});
		 }
	})*/
	//업데이트페이지에서 등록된 제목, 설명, 사진, 공개여부, 뿌리기
	$.getJSON('collect/detail.json', {'no': no}, function(result) {
			$("#collect-add-title").attr("value", result.data.title);
			$('#collect-add-content').attr("value", result.data.content);
			$("#myonoffswitch").attr('checked', result.data.isPublic);
			/*$('#collect-add-title').text(result.data.title)
			$('#collect-add-content').text(result.data.content) 값은 들어오는데 input 태그에 입력이안됨*/
			console.log(result.data.title)
			console.log(result.data.content)
			console.log(result.data.isPublic)
			$('.collect-photo').css({"background-image": "url(upload/"+result.data.picture+")"})
	 });
	// 컬렉션 삭제 버튼클릭시 삭제
	$('#collect-delete').click(function() {
		  $.getJSON('collect/delete.json', {'no': no}, function(result) {
		    location.href= 'mypage.html'
		  })
	})
	// 사진파일,제목,설명,공개여부 업데이트 저장후 마이페이지 이동 
	var	picture = $('#collect-cover-picture'),
	title = $('#collect-add-title'),
	content = $('#collect-add-content'),
	isPublic =$('#myonoffswitch'),
	Num = 0;
	
	$.getJSON('collect/detail.json', {'no': no}, function(result) {
		console.log(result.data)
		Num= result.data.no;
		console.log(Num)
		$('#collect-savebtn').click(function() {
			$.post(contextRoot + '/collect/update.json', {
				'no' : Num,
				'title' : $(title).val(),
				'content' : $(content).val(),
				'isPublic' : $(isPublic).prop("checked"),
				'picture' : $(fififilename).val()
			}, function(result) {
				console.log(result)
				location.href = 'mypage.html'
			},'json')
		}) 
	});
	// 사진파일 업데이트 
	var collectPhotoUpLoad

	collectPhotoUpLoad = $('.collectPhoto-upload-btn')

	$(collectPhotoUpLoad).on('click',function(){
		console.log(this,'clickbox')

		$(this).fileupload({
			url: '/zzal-bit93/collect/upload.json',
			dataType: 'json',
			imageMaxWidth: 1127,
			disableImageResize: /Android(?!.)|Opera/
				.test(window.navigator && navigator.userAgent),
				previewMaxWidth: 1127,   // 미리보기 이미지 너비
				previewMaxHeight: 250,  // 미리보기 이미지 높이
				previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
				done: function (e, data) {
					console.log('done()...');
					console.log(data.result,'data-result얌');
					var filenames = data.result.data;
					console.log(filenames,'filenames얌');
					$(fififilename).val(filenames)
					for (var i = 0; i < filenames.length; i++) {
			$('.collect-photo').css("background-image", 'url(' + data.files[i].preview.toDataURL() +')');
					}
				}
		});
	});
	
})(jQuery);
