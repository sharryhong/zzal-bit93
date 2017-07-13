(function($){
  'use strict';

  tabMenu($('.select_info .menu'))
  tabMenu($('.zzal-menu .menu'), $('.zzal-con'))
  var index = null
  
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