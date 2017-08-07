$(document).ready(function(){ 
	var pageNo = 1
    pageSize = 12
	var checkLast = true
	zzalListMain(pageNo, pageSize)
	function zzalListMain(pageNo, pageSize) {
		$.getJSON('zzal/zzalListNew.json',{'pageNo': pageNo, 'pageSize': pageSize}, function(result) {
			console.log(result.data)
			var foundRows = result.data.foundRows
			var lastPageNo = parseInt(foundRows / pageSize) 
			generateHandlebarsInfinity(result, $('#main-template'), $('#zzal-list'))
		    
		    if (pageNo < lastPageNo) { // 마지막 이후에는 무한스크롤 실행되지 않게 하기 
		       checkLast = true
		    }
			$("time.timeago").timeago();
		})
	}
	
	/*무한 스크롤*/
	var $scrollToTop = $('.scroll-to-top')
	$(document).scroll(function() {
		if ($(window).scrollTop() > 300) {
			$scrollToTop.fadeIn()
		} else {
			$scrollToTop.fadeOut()
		}
	    if (checkLast == true && ($(window).scrollTop() + 50) >= $(document).height() - $(window).height()) {
	      checkLast = false
	      ++pageNo
	      console.log(pageNo)
	      zzalListMain(pageNo, pageSize)
	    }
	});
	$scrollToTop.click(function() {
		$('html, body').animate({scrollTop: 0}, 200)
		return false
	})
});

