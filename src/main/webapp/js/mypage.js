(function($){
  'use strict';

 /* let $zzalMenu = $('.zzal-menu')
  let $zzalWrap = $('.zzal-wrap')
  let $zzalCon = $('.zzal-con')
  let index = null
  
  $zzalMenu.css("display", "none")
  $zzalMenu.eq(0).css("display", "block")
  $zzalWrap.css("display", "none")
  $zzalWrap.eq(0).css("display", "block")
  
  tabMenu($('.select_info .menu'), $zzalMenu)
  tabMenu($('.zzal-menu .menu'), $zzalWrap)
  
  // 매개변수 : 탭메뉴들, 메뉴 누르면 나오는 컨텐츠들
  function tabMenu(els, con) {
	els.click(function() {
	  els.removeClass('on')
	  $(this).addClass('on')
	  index = $(this).index()
	  con.css("display", "none")
	  con.eq(index).css("display", "block")
	})
  }*/
  
  let index = null
  let $zzalWrap = $('.zzal-wrap')
  tabMenu($('.select_info .menu'), $zzalWrap)
  
  $zzalWrap.css("display", "none")
  $zzalWrap.eq(0).css("display", "block")
  
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
  
})(jQuery);