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
  
  var photUrl = parseInt(document.location.href.split('?')[1].split('=')[1]);

  console.log(typeof(photUrl))
 
  
  
  $.getJSON('member/detail.json',{'no':photUrl},function(result){
	  let str = result.data.membpic
	  console.log(str)
	  console.log(result.data)
	  $('.profile-wrap .phot').css('background-image','url('+str+')')
	  
	  console.log($('.profile-wrap .phot').css('background-image'))
  });
  //3 | 짤렉트라1 | zzal03@test.com | *89C6B530AA78695E257E55D63C00A6EC9AD3E977 | NULL  | NULL  | image/sul.jpg
  //입력 방식은 이렇게 할것!
})(jQuery);