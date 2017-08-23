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
  
  var no = 0
  
  $.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
	  if (result.data) {
		  no = result.data.no
		  $('.user-info-face .user-name').text(result.data.nick)
		  $('.profile-wrap .phot').css({"background-image": "url(upload/"+result.data.membpic+")"});
	  }
	})
  
  //someonepage.html
  //detailpage.html 에서 다른유저 프로필 클릭시 프로필이미지, 닉네임, 가져오기
  var someoneNo = location.href.split('?')[1].split('=')[1]
  
  var somno = 0;
	  $.getJSON('zzal/list.json',{'zzno': someoneNo}, function(result){
	  if (result.data) {
		  var someone = result.data.list[0]
		  console.log(someone)
		  var sodata = someone.member
		  somno = someone.mno
		  console.log(somno,'memberNo')
		  console.log(sodata)
		  $('.user-info-face .user-name').text(sodata.nick)
		  $('.profile-wrap .someone-phot').css({"background-image": "url(upload/"+ sodata.membpic +")"});
		  selectzzalList()
		  // someonepage.html phot -> someone-phot로 변경후 css추가/적용했음
	  }
  })
  
  //다른유저 컬렉션
  $(document.body).on('click', '#someone-collect-btn', function(event) {
	$.getJSON(contextRoot + '/collect/list.json', {'no': someoneNo}, function(result) {
		if (result.data) {
			console.log(result.data)
		}
		generateHandlebars(result, $('#someone-collection-template'), $('#someone-collection'))
    })
  });
  
	//다른유저 컬렉션 클릭시 디테일  
	 $(document.body).on('click', '.mycollectlist', function(event) {
		  console.log($(this).attr('data-no'))
		  console.log(somno)
		  location.href = 'someonedetail.html?cono=' + $(this).attr('data-no') /*+ '&mno=' + somno*/
		  event.preventDefault()
	  });
	
	 // 짤강 리스트
	 function selectzzalList() { 
		  $.getJSON('collect/selectzzalList.json', {'mno': somno}, function(result) {
			  if(result.data){
				  console.log(result.data)
				  generateHandlebars(result, $('#someone-zzal-template'), $('#someone-zzal-list1'))	
			  }
		  })
	  }
})(jQuery);