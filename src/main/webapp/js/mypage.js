(function($){
	'use strict';
	var templateFn = null;
	var generatedHTML = null;
	function generateHandlebars(result, el, target) {
		templateFn = Handlebars.compile(el.text())
		generatedHTML = templateFn(result.data)
//		target.text('')
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
	
	// 데이터 없을 때, 없다는 배경 뜨게 하기 
	function nothingData(data, el, bg) {
		if(data == 0) {
			el.css('background', 'center center url('+ bg +') no-repeat')
		} else {
			el.css('background', 'center center no-repeat')
		}
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
	// 내짤강 리스트, 좋아요 리스트 , 비공개 리스트
	function selectzzalList() {
		$.getJSON('collect/selectzzalList.json', {'mno': mno}, function(result) {
			nothingData(result.data.selectzzalList.length, $('.zzal-con01'), "./image/nothing-bg02.png")
			generateHandlebars(result, $('#my-zzallist-template'), $('#zzal-handle'))
		}) 
		$(document.body).on('click', '#zzal-setting, #my-zzal', function(event) {
			$('.zzal-wrap.zzal-cons .menu').removeClass('on')
			$('.zzal-wrap.zzal-cons .menu:nth-of-type(1)').addClass('on')
			$('.zzal-wrap.zzal-cons .zzal-con01').css('display','none')
			$('.zzal-wrap.zzal-cons .zzal-con01:nth-of-type(1)').css('display','block')
			$.getJSON('collect/selectzzalList.json', {'mno': mno}, function(result) {
				nothingData(result.data.selectzzalList.length, $('.zzal-con01'), "./image/nothing-bg02.png")
				generateHandlebars(result, $('#my-zzallist-template'), $('#zzal-handle'))
			}) 
		})
		$(document.body).on('click', '#temp-zzal', function(event) {
			$.getJSON('collect/temporaryzzalList.json', {'mno': mno}, function(result) {
				nothingData(result.data.selectzzalList.length, $('.zzal-con01'), "./image/nothing-bg02.png")
				generateHandlebars(result, $('#my-zzallist-template'), $('#tmpor-zzal'))
			})
		})
		$(document.body).on('click', '#ilike-zzal', function(event) {
			$.getJSON('collect/likezzal.json',{'mno' : mno}, function(result) {
				nothingData(result.data.selectzzalList.length, $('.zzal-con01'), "./image/nothing-bg02.png")
				generateHandlebars(result, $('#my-like-zzallist-template'), $('#ilike-zzallist'))
			})
		})
	
	}//selectzzalList 짤강관리!!
	
	// collect.list 내컬렉션 클릭시 컬렉션 리스트 가져오기, 내 컬렉션 title pic
	
	$(document.body).on('click', '#collect-setting, #my-collect-list', function(event) {
		console.log('내 컬렉션')
		$('.zzal-collection .menu').removeClass('on')
		$('.zzal-collection .menu:first-child').addClass('on')
		$('.zzal-collection .zzal-con02').css('display','none')
		$('.zzal-collection .zzal-con02:nth-of-type(1)').css('display','block')
		
		$.getJSON('collect/list.json', {'no': mno}, function(result) {
//			if (result.data) {
				console.log(result.data)
				console.log('내컬렉션', result.data.list.length)
				nothingData(result.data.list.length, $('.zzal-collection .collections'), "./image/nothing-bg04.png")
//			    $('#my-collection01').html('')
				generateHandlebars(result, $('#my-collection-template'), $('#my-collection01'))
				let list = result.data.list
				for(var i = 0; i < list.length; i++){
					selectuser(list[i].no,i,$('#my-collection01 .sfont .zzal-cnt'),$('#my-collection01 .sfont .subs-cnt')) // 컬렉션에 담겨있는 짤강 수 와, 구독한 수
					
				} // for문
//			} // result.data
		}) //내 컬렉션
	}); //내컬렉션 관리
		
        // 구독 한 컬렉션 리스트
		$(document.body).on('click', '.zzal-menu02 #subs-btn', function(event) {
			$.getJSON('collect/subslist.json', {'mno': mno}, function(result) {
//				if(result.data){
					console.log('구독컬렉션', result.data.list.length)
					nothingData(result.data.list.length, $('.zzal-collection .collections'), "./image/nothing-bg04.png")
					let list = result.data.list
					generateHandlebars(result, $('#my-collection-template'), $('#my-collection02'))
					let btnlst = $('#my-collection02 .editerbtn')
					for(var i = 0; i < list.length; i++){
						console.log(list[i].no)
						selectuser(list[i].no,i,$('#my-collection02 .sfont .zzal-cnt'),$('#my-collection02 .sfont .subs-cnt')) // 컬렉션에 담겨있는 짤강 수 와, 구독한 수
						
						$(btnlst[i]).removeClass('editerbtn').addClass('zzsubbtn').text('구독취소').attr('data-stype',true)
					}
//				}
			})
		}) //구독
		
		//비공개 컬렉션
		$(document.body).on('click', '.zzal-menu02 #public-collect-list', function(event) {
			$.getJSON('collect/publiclist.json', {'no': mno}, function(result) {
//				if (result.data) {
					console.log('비공개컬렉션', result.data.list.length)
					nothingData(result.data.list.length, $('.zzal-collection .collections'), "./image/nothing-bg04.png")
					generateHandlebars(result, $('#my-collection-template'), $('#my-collection03'))
					let list = result.data.list
					for(var i = 0; i < list.length; i++){
						selectuser(list[i].no,i,$('#my-collection03 .sfont .zzal-cnt'),$('#my-collection03 .sfont .subs-cnt')) // 컬렉션에 담겨있는 짤강 수 와, 구독한 수
					}
//				}
			})
		}) //비공개
		
	
	
	
	function selectuser(cono,index,el,el2) {
		
		
		$.getJSON('collect/selectuser.json', {'cono': cono}, function(result) { //collect cono
			if(result.data){
				let collectCnt = result.data.selectcnts
				
				el[index].innerHTML=collectCnt.zcnt
				el2[index].innerHTML=collectCnt.scnt
			}
		})
		
	}
	//내컬렉션 컬렉션  클릭시 컬렉션 detail 구독 ,임시
	$(document.body).on('click', '.mycollectlist', function(event) {
		console.log(this)
		location.href = 'collectdetail.html?cono=' + $(this).attr('data-no')
		event.preventDefault()
	});
	// 편집 버튼 클릭시 컬렉션 data-no
	$(document.body).on('click', '.editerbtn', function(event) {
		location.href = 'collectupdate.html?cono=' + $(this).attr('data-no')
		event.preventDefault()
	});
	
	$(document.body).on('click', '.zzsubbtn', function(event) {
		
		let str =$(this).attr('data-stype')
		let con = $(this).attr('data-no')
		let bool = true
		if(str==='true'){
			
			$(this).removeClass('btn-info').addClass('btn-default')
			bool=false;
			DoYouSubscribe(bool,mno,con,this)
			
			return $(this).attr('data-stype',false).text('구독하기')
		}else{
			
			$(this).removeClass('btn-default').addClass('btn-info')
			console.log(bool, '구독다시!')
			DoYouSubscribe(bool,mno,con,this)
			
			return $(this).attr('data-stype',true).text('구독취소')
		}
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
	 
	  
	 function DoYouSubscribe(bool,mno,cono,el){
		let els=$(el).prevAll('span')
		
		 $.ajax({
				url: bool ? 'subs/insert.json':'subs/delete.json',
				method:'POST',
				data: {'mno': mno,'cono': cono},
				success : function(result){console.log(result.data,"성공 객체임")
				
					$.getJSON('collect/selectuser.json', {'cono': cono}, function(result) { //collect cono
						if(result.data){
						
							let collectCnt = result.data.selectcnts
							
							$(els[0]).find('span')[0].innerHTML=collectCnt.scnt			
							$(els[1]).find('span')[0].innerHTML=collectCnt.zcnt
						}
					})
					
				},
				dataType: 'json'
			})
		 
	 }
	 
	 
	 
	
})(jQuery);