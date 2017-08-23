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

	let index = null
	let $zzalWrap = $('.zzal-wrap')
	let $zzalCon01 = $('.zzal-con01')
	let $zzalCon02 = $('.zzal-con02')

	tabMenu($('.select_info .menu'), $zzalWrap)
	tabMenu($('.zzal-menu01 .menu'), $zzalCon01)
	tabMenu($('.zzal-menu02 .menu'), $zzalCon02)

	setTab($zzalWrap)
	setTab($zzalCon01)
	setTab($zzalCon02)

	function setTab(els) {
		els.css("display", "none")
		els.eq(0).css("display", "block")
	}

	//매개변수 : 탭메뉴들, 메뉴 누르면 나오는 컨텐츠들
	function tabMenu(els, con) {
		els.click(function() {
			els.removeClass('on')
			$(this).addClass('on')
			index = $(this).index()
			con.css("display", "none")
			con.eq(index).css("display", "block")
		})
	}
	var mno = 0

	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		if (result.data) {
			mno = result.data.no
			$('.user-info-face .user-name').text(result.data.nick)
			$('.profile-wrap .phot').css({"background-image": "url(upload/"+result.data.membpic+")"});
			selectzzalList()
		}
	})

	function selectzzalList() {
		$.getJSON('collect/selectzzalList.json', {'mno': mno}, function(result) {
			if(result.data){
				console.log(result.data)
				generateHandlebars(result, $('#my-zzallist-template'), $('#zzal-handle'))
			}
		}) 
		$(document.body).on('click', '#temp-zzal', function(event) {
			$.getJSON('collect/temporaryzzalList.json', {'mno': mno}, function(result) {
				if(result.data){
					console.log(result.data)
					generateHandlebars(result, $('#my-zzallist-template'), $('#tmpor-zzal'))
				}
			})
		})


		$(document.body).on('click', '#ilike-zzal', function(event) {
			$.getJSON('collect/likezzal.json',{'mno' : mno}, function(result) {
				if(result.data){
					console.log(result.data)
					generateHandlebars(result, $('#my-like-zzallist-template'), $('#ilike-zzallist'))
				}
			})
		})
	
	}//selectzzalList 짤강관리!!
	var cono =0;
	// collect.list 내컬렉션 클릭시 컬렉션 리스트 가져오기, 내 컬렉션 title pic
	$(document.body).on('click', '.select_info #collect-setting', function(event) {
		console.log('내 컬렉션')
		$.getJSON('collect/list.json', {'no': mno}, function(result) {
			if (result.data) {
				console.log(result.data)
				generateHandlebars(result, $('#my-collection-template'), $('#my-collection01'))
			}
				
		}) //내 컬렉션

		$(document.body).on('click', '.zzal-menu02 #subs-btn', function(event) {
			$.getJSON('collect/subslist.json', {'mno': mno}, function(result) {
				if(result.data){
					console.log(result.data,"its mine")
					generateHandlebars(result, $('#my-collection-template'), $('#my-collection02'))
					$('#my-collection02 .editerbtn').text('구독취소')
				}
			})

		}) //구독

		$(document.body).on('click', '.zzal-menu02 #public-collect-list', function(event) {
			$.getJSON('collect/publiclist.json', {'no': mno}, function(result) {
				if(result.data){
					console.log(result.data)
					generateHandlebars(result, $('#my-collection-template'), $('#my-collection03'))
				}
			})
		}) //비공개
		
		$.getJSON('collect/selectuser.json', {'cono': cono}, function(result) { //collect cono
				if(result.data){
					console.log(result.data)
					let collectCnt = result.data.selectcnts
					console.log(collectCnt)
					$('.sfont .zzal-cnt').text(collectCnt.zcnt)
					$('.sfont .subs-cnt').text(collectCnt.scnt)
				}
		})
	}); //내컬렉션 관리
	
	
	
	//내컬렉션 컬렉션  클릭시 컬렉션 detail 구독 ,임시
	$(document.body).on('click', '.mycollectlist', function(event) {
		location.href = 'collectdetail.html?cono=' + $(this).attr('data-no')
		event.preventDefault()
	});
	// 편집 버튼 클릭시 컬렉션 data-no
	$(document.body).on('click', '.editerbtn', function(event) {
		location.href = 'collectupdate.html?cono=' + $(this).attr('data-no')
		event.preventDefault()
	});
	
	// 짤강 편집 클릭시 
	$(document.body).on('click', '.modify-zzal', function(event) {
		location.href = 'updatezzal.html?zzno=' + $(this).closest('li').find('.zzal-lect').attr('data-zzno')
		event.preventDefault()
	});
	
	 $(document.body).on('click', '.delete-zzal', function(event) {
	     var no = $(this).closest('li').find('.zzal-lect').attr('data-zzno')
	     swal({
	        title: "정말 삭제하시겠습니까?",
	        type: "warning",
	        showCancelButton: true,
	        confirmButtonColor: "#DD6B55",
	        confirmButtonText: "삭제",
	        cancelButtonText: "취소",
	        closeOnConfirm: false
	     }, function(){
	         $.getJSON('zzal/delete.json', {'no': no}, function(result) {
	            location.href="mypage.html"
	        })
	     })
	 })
	
})(jQuery);