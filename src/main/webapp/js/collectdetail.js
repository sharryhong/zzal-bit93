(function($){
	'use strict';
	var templateFn = null;
	var generatedHTML = null;
	function generateHandlebars(result, el, target) {
		templateFn = Handlebars.compile(el.text())
		generatedHTML = templateFn(result.data)
		target.text('')
		target.html(generatedHTML)
	}
	var urls = ''	
		var cono = 0,
		mno = 0
		urls = location.href.split('?')[1]
	try {
		//urls = location.href.split('?')[1].split('=')[1]		
		cono = urls.split('&')[0].split('=')[1]
		mno = urls.split('&')[1].split('=')[1]
		console.log(mno)

	} catch (err) {}	
	
	cono=urls.split('=')[1]
	// 유저 닉네임 프로필 사진
	var no = 0
	
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		if (result.data) {
			no = result.data.no
			selectzzalList() 
			someoneZzal() // 다른유저 페이지에서 컬렉션 클릭시 컬렉션에 담겨있는 짤리스트
			
		}
	})
	
	// 컬렉션 디테일페이지/편집 버튼 클릭시 업데이트 페이지로 이동후 사진,제목,설명 보이기 ,cono=? cono &mno=?
	$.getJSON('collect/detail.json', {'no': cono}, function(result) {
		$('.category-explain').text(result.data.content)
		$('.category-title').text(result.data.title)
		$('.collect-photo').css({"background-image": "url(upload/"+result.data.picture+")"})
		let memno=result.data.memNo
		if(memno!=no){
			$('.btn.btn-info').css('display','none')
		}	
		$.getJSON('collect/selectuser.json', {'cono': cono}, function(result) {
			if(result.data){
				var someOneNo = result.data.selectzzalList
				var somenick = someOneNo.membe
				$('.user-info-face .user-name').text(somenick.nick)
				$('.profile-wrap .spicture').css({'background-image': 'url(upload/'+someOneNo.picture+')'});
				$('.profile-wrap .someone-phot').css({'background-image': 'url(upload/'+someOneNo.picture+')'}); //다른사람페이지 컬렉션 클릭시 그사람 nick,pic
				
				$(document.body).on('click', '.collect-someone', function(event) {
					/*console.log($(this).attr('data-no'))*/
					location.href = 'someonepage.html?writer=' + someOneNo.memNo
					event.preventDefault()
				});
				
				
				let cnts = result.data.selectcnts
				
				$('.zcnt').text(cnts.zcnt)
				$('.scnt').text(cnts.scnt)
			}
		})
		$(document.body).on('click', '.btn-info', function(event) {
			/*console.log($(this).attr('data-no'))*/
			location.href = 'collectupdate.html?cono=' + result.data.no
			event.preventDefault()
		});
	});
	
	// 내짤강 리스트
	function selectzzalList() {
		$.getJSON('collect/detialzzalList.json', {'cono': cono}, function(result) {
			if(result.data){
				generateHandlebars(result, $('#collect-zzallist-template'), $('#zzal-list1'))
			}
		})
	}  
	
	function someoneZzal(){
		// 다른유저 페이지에서 컬렉션 클릭시 컬렉션에 담겨있는 짤리스트
		$.getJSON('collect/detialzzalList.json', {'cono': cono}, function(result) {
			if(result.data){
				console.log(result.data)
				generateHandlebars(result, $('#someone-zzallist-template'), $('#someone-zzal-list1'))
			}
		})
	}  
	
	

})(jQuery);
