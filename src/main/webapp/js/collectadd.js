(function($){
	'use strict';
	/*
let	collectadd1 = $('#collectaddPhoto');
let collectadd2 = $('#collect-add1');



$.getJSON('collectadd.json',function(result){
  console.log(result)

  let templateFn1 = Handlebars.compile($('#collectadd1-template1').text())
  let generatedHTML1 = templateFn1(result.data)
  console.log(generatedHTML1)
  collectadd1.text('')
  collectadd1.html(generatedHTML1)

	let templateFn2 = Handlebars.compile($('#collectadd2-template2').text())
	let generatedHTML2 = templateFn2(result.data)
	console.log(generatedHTML2)
	collectadd2.text('')
	collectadd2.html(generatedHTML2)
	})
	 */
var fififilename = $('.fifi-filename');	
var no = 0
try {
	no = location.href.split('?')[1].split('=')[1]
} catch (err) {}

if (no == 0){ // 새 학생 등록
	var	picture = $('#collect-cover-picture'),
	title = $('#collect-add-title'),
	content = $('#collect-add-content'),
	isPublic =$('#myonoffswitch'),
	collectNum = 0;
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		console.log(result.data.no)
		collectNum = result.data.no;
		console.log(collectNum)
		$('#collect-addbtn').click(function() {
			console.log('collect-addbtn')
			console.log($(title).val())
			console.log($(isPublic).val())
			$.post(contextRoot + '/collect/add.json', {
				'memNo' : collectNum,
				'title' : $(title).val(),
				'content' : $(content).val(),
				'isPublic' : $(isPublic).prop("checked"),
				'picture' : $(fififilename).val()
			}, function(result) {
				console.log(result)
				location.href = 'mypage.html'
			},'json')
		}) // add.click()
	});
}

$.getJSON()

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
