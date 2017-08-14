(function($){
	'use strict';

var urls = ''	
var cono = 0,
    mno = 0
	try {
		//urls = location.href.split('?')[1].split('=')[1]
		urls = location.href.split('?')[1]
		console.log(urls)
		cono = urls.split('&')[0].split('=')[1]
		console.log(cono)
		mno = urls.split('&')[1].split('=')[1]
		console.log(mno)
	} catch (err) {}	
	// 유저 닉네임 프로필 사진
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		 if (result.data) {
			 $('.user-info-face .user-name').text(result.data.nick)
			 $('.profile-wrap .phot').css({"background-image": "url(image/"+result.data.membpic+")"});
		 }
	})
	// 컬렉션 디테일페이지/편집 버튼 클릭시 업데이트 페이지로 이동후 사진,제목,설명 보이기
	$.getJSON('collect/detail.json', {'no': cono}, function(result) {
			$('.category-explain').text(result.data.content)
			$('.category-title').text(result.data.title)
			$('.collect-photo').css({"background-image": "url(upload/"+result.data.picture+")"})
		$(document.body).on('click', '.btn-info', function(event) {
			console.log($(this).attr('data-no'))
			location.href = 'collectupdate.html?cono=' + result.data.no
			event.preventDefault()
		});
	 });
	
	/*var somcollect = location.href.split('?')[1].split('=')[1]
	console.log('somcollect', somcollect)*/
	$.getJSON('zzal/list.json',{'zzno': mno}, function(result){
	  if (result.data) {
		  var someone = result.data.list[0]
		  console.log(someone)
		  var sodata = someone.member
		  console.log(sodata)
		  $('.user-info-face .user-name').text(sodata.nick)
		  $('.profile-wrap .someone-phot').css({"background-image": "url(upload/"+ sodata.membpic +")"});
	  }
	 
	})
})(jQuery);
