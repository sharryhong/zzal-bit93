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
  try {
    no = location.href.split('?')[1].split('=')[1]
  } catch (err) {}
  
	
$.getJSON('member/detail.json', {'no': no}, function(result) {
	  $('.user-name').text(result.data.nick)
    $('.profile-wrap .phot').css({"background-image": "url(image/"+result.data.membpic+")"});
  })
  
  
  // collect.list
  let mycollection = $('#my-collection');
  //내 컬렉션 title pic
  $(document.body).on('click', '.select_info #collect-setting', function(event) {
	  console.log('내 컬렉션')
	$.getJSON(contextRoot + '/collect/list.json', {'no': no}, function(result) {
		if (result.data) {
			console.log(result.data)
		}
			// 템플릿을 실행하는 함수 리턴
			let templateFn = Handlebars.compile($('#my-collection-template').text())
			let generatedHTML = templateFn(result.data)
			mycollection.text('')
			mycollection.html(generatedHTML)
    })
	
  });
  
  $(document.body).on('click', '.mycollectlist', function(event) {
	  /*console.log($(this).attr('data-no'))*/
	  location.href = 'collectdetail.html?cono=' + $(this).attr('data-no')
	  event.preventDefault()
  });
  
})(jQuery);