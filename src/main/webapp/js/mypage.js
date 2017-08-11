(function($){
  'use strict';
 
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
  
  var no = 0
  
  $.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
	  if (result.data) {
		  no = result.data.no
		  $('.user-info-face .user-name').text(result.data.nick)
		  $('.profile-wrap .phot').css({"background-image": "url(upload/"+result.data.membpic+")"});
	  }
	})
  
  
  // collect.list 내컬렉션 클릭시 컬렉션 리스트 가져오기
  let mycollection = $('#my-collection');
  //내 컬렉션 title pic
  $(document.body).on('click', '.select_info #collect-setting', function(event) {
	  console.log('내 컬렉션')
	$.getJSON(contextRoot + '/collect/list.json', {'no': no}, function(result) {
		if (result.data) {
			console.log(result.data)
		}
			let templateFn = Handlebars.compile($('#my-collection-template').text())
			let generatedHTML = templateFn(result.data)
			mycollection.text('')
			mycollection.html(generatedHTML)
    })
  });
  //내컬렉션 컬렉션  클릭시 컬렉션 data-no
  $(document.body).on('click', '.mycollectlist', function(event) {
	  /*console.log($(this).attr('data-no'))*/
	  location.href = 'collectdetail.html?cono=' + $(this).attr('data-no')
	  event.preventDefault()
  });
  
  // 편집 버튼 클릭시 컬렉션 data-no
  $(document.body).on('click', '#my-collection.collection-view .btn-info', function(event) {
	  /*console.log($(this).attr('data-no'))*/
	  location.href = 'collectupdate.html?cono=' + $(this).attr('data-no')
	  event.preventDefault()
  });
  
  //detailpage.html 에서 다른유저 프로필 클릭시 프로필 닉네임 가져오기
  var zzno = location.href.split('?')[1].split('=')[1]
  
	  $.getJSON('zzal/list.json',{'zzno': zzno}, function(result){
	  if (result.data) {
		  var someone = result.data.list[0]
		  /*console.log(someone)*/
		  var sodata = someone.member
		  console.log(sodata)
		  $('.user-info-face .user-name').text(sodata.nick)
		  $('.profile-wrap .someone-phot').css({"background-image": "url(upload/"+ sodata.membpic +")"});
		  // someonepage.html phot -> someone-phot로 변경후 css 적용했음
	  }
  })
  
  let someonecollection = $('#someone-collection');
  //다른유저 컬렉션
  $(document.body).on('click', '#someone-collect-btn', function(event) {
	$.getJSON(contextRoot + '/collect/list.json', {'no': zzno}, function(result) {
		if (result.data) {
			console.log(result.data)
		}
			let templateFn = Handlebars.compile($('#someone-collection-template').text())
			let generatedHTML = templateFn(result.data)
			someonecollection.text('')
			someonecollection.html(generatedHTML)
    })
  });
  
})(jQuery);