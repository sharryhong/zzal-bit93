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
		  selectzzalList()
	  }
	})
  // collect.list 내컬렉션 클릭시 컬렉션 리스트 가져오기
  //내 컬렉션 title pic
  $(document.body).on('click', '.select_info #collect-setting', function(event) {
	  console.log('내 컬렉션')
	$.getJSON(contextRoot + '/collect/list.json', {'no': no}, function(result) {
		if (result.data) {
			console.log(result.data)
			generateHandlebars(result, $('#my-collection-template'), $('#my-collection01'))
		}
			
    })
  });
  // 구독한 컬렉션
  var subsUser = 0;
  $(document.body).on('click', '.zzal-menu02 #subs-btn', function(event) {
	  $.getJSON(contextRoot + '/collect/subslist.json', {'mno': no}, function(result) {
		  if(result.data){
			  console.log(result.data)
			  var passdata = result.data.list[0]
			  console.log(passdata)
			  subsUser = passdata.memNo
			  console.log(subsUser)
			  generateHandlebars(result, $('#my-collection-template'), $('#my-collection02'))
			  $('#my-collection02 .editerbtn').css('display', 'none')
		  }
	  })
	  
  })
  // 비공개 컬렉션 리스트
  $(document.body).on('click', '.zzal-menu02 #public-collect-list', function(event) {
	  $.getJSON(contextRoot + '/collect/publiclist.json', {'no': no}, function(result) {
		  if(result.data){
			  console.log(result.data)
			  generateHandlebars(result, $('#my-collection-template'), $('#my-collection03'))
		  }
	  })
  })
  // 짤리스트 뿌리기 or 임시 짤강 리스트
  function selectzzalList() {
	 $.getJSON('collect/selectzzalList.json', {'mno': no}, function(result) {
		  if(result.data){
			  console.log(result.data)
			  generateHandlebars(result, $('#my-zzallist-template'), $('#zzal-handle'))
		  }
	 }) 
	  $(document.body).on('click', '#temp-zzal', function(event) {
		  $.getJSON('collect/temporaryzzalList.json', {'mno': no}, function(result) {
			  if(result.data){
				  console.log(result.data)
				  generateHandlebars(result, $('#my-zzallist-template'), $('#tmpor-zzal'))
			  }
		  })
	  })
  }
  // 좋아요한 짤강 리스트
   $(document.body).on('click', '#ilike-zzal', function(event) {
	   
	  $.getJSON('collect/likezzal.json',{'mno' : no}, function(result) {
		  if(result.data){
			  console.log(result.data)
		  generateHandlebars(result, $('#my-zzallist-template'), $('#ilike-zzallist'))
		  }
	  })
   })
  //내컬렉션 컬렉션  클릭시 컬렉션 data-no
  $(document.body).on('click', '.mycollectlist', function(event) {
	  location.href = 'collectdetail.html?cono=' + $(this).attr('data-no')
	  event.preventDefault()
  });
  // 편집 버튼 클릭시 컬렉션 data-no
  $(document.body).on('click', '.editerbtn', function(event) {
	  location.href = 'collectupdate.html?cono=' + $(this).attr('data-no')
	  event.preventDefault()
  });
  // 구독한 컬렉션 클릭시 
  $(document.body).on('click', '#my-collection02 .mycollectlist', function(event) {
	  location.href = 'someonepage.html?collection=' + subsUser
	  event.preventDefault()
  });	 
})(jQuery);