(function($){
	'use strict';

var fififilename = $('.fifi-filename');	
var no = 0
try {
	no = location.href.split('?')[1].split('=')[1]
} catch (err) {}

if (no == 0){ // 새 컬렉션 등록
	var	picture = $('#collect-cover-picture'),
	title = $('#collect-add-title'),
	content = $('#collect-add-content'),
	isPublic =$('#myonoffswitch'),
	collectNum = 0;
	// member 번호 구분  컬렉션 등록 사진파일 업로드,제목,설명, 공개/비공개
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		console.log(result.data.no)
		collectNum = result.data.no;
		console.log(collectNum)
		$('#collect-addbtn').click(function() {
			console.log($(isPublic).val())
			$.post(contextRoot + '/collect/add.json', {
				'memNo' : collectNum,
				'title' : $(title).val(),
				'content' : $(content).val(),
				'isPublic' : $(isPublic).prop("checked"),
				'picture' : $(fififilename).val() ? $(fififilename).val():'co-bg.png'
			}, function(result) {
				console.log(result)
				location.href = 'mypage.html'
			},'json')
		}) // add.click()
	});
}
// 파일업로드
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
