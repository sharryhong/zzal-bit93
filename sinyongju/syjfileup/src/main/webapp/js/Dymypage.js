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
    var no = location.href.split('?')[1].split('=')[1]
  } catch(err) {} // 에러가나도 멈추지 않게함
  
  
  $.getJSON('dymember/detail.json', {"no": no}, function(result) {
	  var nickname = result.data.nick
	  var userPic = result.data.userPic
	  console.log(nickname)
	  console.log(userPic)
	  
	  jQuery('.profile-wrap .phot').css({"background-image":"url(image/"+userPic+")"});
	  $('.user-name').html(nickname)
  })
  
  
})(jQuery);