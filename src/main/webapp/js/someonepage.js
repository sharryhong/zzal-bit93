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
		}
	})

	//someonepage.html
	//detailpage.html 에서 다른유저 프로필 클릭시 프로필이미지, 닉네임, 가져오기
	var someoneNo = location.href.split('?')[1].split('=')[1]

	var somno = 0;
	$.getJSON('member/detail.json',{'no': someoneNo}, function(result){
		if (result.data) {
			console.log(result.data)
			var someone = result.data
			console.log(someone)
			var sodata = someone.no
			console.log(sodata)
			$('.user-info-face .user-name').text(someone.nick)
			$('.profile-wrap .someone-phot').css({"background-image": "url(upload/"+ someone.membpic +")"});
			selectzzalList()
			// someonepage.html phot -> someone-phot로 변경후 css추가/적용했음	  
		}
		// 짤강 리스트
		function selectzzalList() { 
			$.getJSON('collect/selectzzalList.json', {'mno': sodata}, function(result) {
				if(result.data){
					generateHandlebars(result, $('#someone-zzal-template'), $('#someone-zzal-list1'))	
				}
			})
		}
	})




	//다른유저 컬렉션
	$(document.body).on('click', '#someone-collect-btn', function(event) {
		$.getJSON(contextRoot + '/collect/list.json', {'no': someoneNo}, function(result) {
			if (result.data) {

				console.log(result.data,'멀가져오냥')

				/*$('#someone-collection').html('')*/
				generateHandlebars(result, $('#someone-collection-template'), $('#someone-collection'))
				console.log($('.sfont .zzal-cnt'))
				let list2 = result.data.list
				let subsBtn = $('#someone-collection .btn-take')
				console.log(mno)
				for(var o = 0; o < list2.length; o++){
					dousubscribe(mno,list2[o].no,o,subsBtn)
					
				}
				
				
				for(var i = 0; i < list2.length; i++){
				    selectuser(list2[i].no,i,$('#someone-collection .sfont .zzal-cnt'),$('#someone-collection .sfont .subs-cnt'))				
					

//					$(subsBtn[i]).removeClass('btn-take').addClass('someonesubbtn').attr('data-stype',)
				}
			}
		})
	});

	function dousubscribe(mno,no,i,subsBtn){		     
		console.log(mno,no)
		$.getJSON(contextRoot + '/subs/list.json', {'mno':mno,'cono':no}, function(result) {
			console.log(result,'원하는거!')
//			console.log(this,'원하는거!')
			let subsstr	= result.data.list;
			 if(subsstr){
				console.log('있')
				$(subsBtn[i]).removeClass('btn-take').addClass('someonesubbtn').attr('data-stype',true); 
			 }else{					
				$(subsBtn[i]).removeClass('btn-take').addClass('someonesubbtn').attr('data-stype',false);
			}	
			 subbtnControl(subsBtn[i])
		})
	}//subs;	




	function selectuser(cono,index,el,el2) {

		$.getJSON('collect/selectuser.json', {'cono': cono}, function(result) { //collect cono
			if(result.data){
				let collectCnt = result.data.selectcnts

				el[index].innerHTML=collectCnt.zcnt
				el2[index].innerHTML=collectCnt.scnt
			}
		})
	}

	$(document.body).on('click', '.someonesubbtn', function(event) {

		console.log(mno)
		subbtnControl(this)
		event.preventDefault()
	});
	
	function subbtnControl(el){
		let str =$(el).attr('data-stype')
		let con = $(el).attr('data-no')
		let bool = false
		if(str==="true"){
			$(el).removeClass('btn-info').addClass('btn-default')
			bool=true;
			Subscribe(bool,mno,con,el)

			return $(el).attr('data-stype',false).text('구독취소')
		}else{
			$(el).removeClass('btn-default').addClass('btn-info')
			Subscribe(bool,mno,con,el)

			return $(el).attr('data-stype',true).text('구독하기')
		}
	}
	
	
	

	function Subscribe(bool,mno,cono,el){
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

	//다른유저 컬렉션 클릭시 디테일  
	$(document.body).on('click', '.mycollectlist', function(event) {
		console.log($(this).attr('data-no'))
		location.href = 'someonedetail.html?cono=' + $(this).attr('data-no')
		event.preventDefault()
	});



})(jQuery);