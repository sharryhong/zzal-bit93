(function($){
	'use strict';
	
	var fififilename = $('.fifi-filename');	
	var cono = 0
	var mno = 0;
	try {
		cono = location.href.split('?')[1].split('=')[1]
	} catch (err) {}	
      	
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		if (result.data) {
			mno = result.data.no
		}
	})
	
	//업데이트페이지에서 등록된 제목, 설명, 사진, 공개여부, 뿌리기
	$.getJSON('collect/detail.json', {'no': cono}, function(result) {
			$("#collect-add-title").attr("value", result.data.title);
			$('#collect-add-content').attr("value", result.data.content);
			$("#myonoffswitch").attr('checked', result.data.isPublic);
			console.log(result.data.title)
			console.log(result.data.content)
			console.log(result.data.isPublic)
			$('.collect-photo').css({"background-image": "url(upload/"+result.data.picture+")"})
			$('input[type="hidden"]')[0].value=result.data.picture;
	 });
	
	// 사진파일,제목,설명,공개여부 업데이트 저장후 마이페이지 이동 
	var	picture = $('#collect-cover-picture'),
		title = $('#collect-add-title'),
		content = $('#collect-add-content'),
		isPublic =$('#myonoffswitch'),
		Num = 0;
	
	$.getJSON('collect/detail.json', {'no': cono}, function(result) {
		console.log(result.data)
		Num= result.data.no;
		console.log(Num)
	$('#collect-savebtn').click(function() {
		$.ajax ({
			type: 'POST',
			url: 'collect/update.json',
			data: {
				'no' : Num,
				'title' : $(title).val(),
				'content' : $(content).val(),
				'isPublic' : $(isPublic).prop("checked"),
				'picture' : $(fififilename).val()
			}, 
			async: false,
			success: function(result) {
				swal({
					title: "변경 완료",
					type: "success",
					timer: 1000,
					showConfirmButton: false,
					showCancelButton: false,
					closeOnConfirm: true
				},
				function(){
					setTimeout(function(){
						location.href = 'mypage.html';
					});
				});
			}
		});
	});	
}); // detail, update
	/*$('#collect-savebtn').click(function() {
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
		})*/ 
	
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
	}); // 업로드
	/*$.getJSON('collect/delete.json', {'no': cono}, function(result) {
		
		
	    location.href= 'mypage.html'
	  })  */
	// 컬렉션 삭제 버튼클릭시 삭제
	$('#collect-delete').click(function(event) {
		swal({
	        title: "정말 삭제하시겠습니까?",
	        type: "warning",
	        showCancelButton: true,
	        confirmButtonColor: "#DD6B55",
	        confirmButtonText: "삭제",
	        cancelButtonText: "취소",
	        closeOnConfirm: false
	     }, function(){
//		  $.getJSON('collect/delete.json', {'cono': cono, 'mno' : Num}, function(result) {
//		    location.href= 'mypage.html'
//		  })
		  $.ajax ({
				type: 'POST',
				url: 'collect/delete.json',
				data: {
					'memberno' : mno,
					'collectNo': cono
				}, 
				async: false,
				success: function(result) {
				console.log(result)
				
				location.href= 'mypage.html'
				}
			});
		  
		  
	   })
	})
})(jQuery);
