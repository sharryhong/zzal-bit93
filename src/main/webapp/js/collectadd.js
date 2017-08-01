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
var no = 0
try {
	no = location.href.split('?')[1].split('=')[1]
} catch (err) {}

if (no == 0){ // 새 학생 등록
	var	picture = $('#collectPhoto'),
	title = $('#collect-add-title'),
	content = $('#collect-add-content'),
	isPublic =$('#myonoffswitch')

	var testNum = 0;
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		console.log(result.data.no)
		testNum= result.data.no;
		console.log(testNum)
		$('#collect-addbtn').click(function() {
			console.log('collect-addbtn')
			console.log($(title).val())
			console.log($(isPublic).val())
			$.post(contextRoot + '/collect/add.json', {
				'memNo' : testNum,
				'title' : $(title).val(),
				'content' : $(content).val(),
				'isPublic' : $(isPublic).prop("checked"),
				'picture' : 'anonymous.png'
			}, function(result) {
				console.log(result)
				location.href = 'mypage.html'
			},'json')
		}) // add.click()
	});
}

})(jQuery);
