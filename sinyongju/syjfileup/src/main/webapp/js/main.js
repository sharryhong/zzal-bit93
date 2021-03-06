(function($, window){
	'use strict';
	
	var fiEmail = $('#fi-email'),
		fiPassword = $('#fi-password'),
		joinEmail = $('#join-email'),
		joinPw = $('#join-pw'),
		joinNick = $('#join-nick')
	
	$('#login-btn').click(function() {
		console.log('login-btn')
		$.post(contextRoot + '/auth/login.json', {
	      'email': fiEmail.val(),
	      'password': fiPassword.val()
	    }, function(result) {
	       location.href = 'index.html'
	    }, 'json')
	})
	
	$('#join-btn').click(function() {
		console.log('join-btn')
		$.post(contextRoot + '/member/add.json', {
	      'email': joinEmail.val(),
	      'password': joinPw.val(),
	      'nick': joinNick.val(),
	      'membpic': 'anonymous.png'
	    }, function(result) {
	    	console.log(result)
	        location.href = 'index.html'
	    }, 'json')
	})
	
	// 메뉴선택시 on붙이기 (해당 url일때)
	let href = location.href;
	let pageurl = href.substr(href.lastIndexOf('/') + 1);
	var url = window.location.pathname, 
    urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
	//console.log(pageurl)
    $('.nav a').each(function(){
        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            $(this).addClass('on');
        }
    });
    $('.mobile-nav a').each(function(){
        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            $(this).addClass('on');
        }
    });
    // 홈인 경우
    if (pageurl == '' || pageurl == "index.html") { 
		$('.nav .home').addClass('on');
		$('.mobile-nav .home').addClass('on');
	}
    
    // 모바일화면 헤더에 title 붙이기 
    var pageTitle = ''
    if (pageurl.includes("notice")) { pageTitle = '알림' }
    else if (pageurl.includes("mypage")) { pageTitle = '마이페이지' }
    else if (pageurl.includes("collectadd")) { pageTitle = '컬렉션 만들기' }
    else if (pageurl.includes("collectdetail")) { pageTitle = '내 컬렉션' }
    $('.header .page-right .title').text(pageTitle)
	
	// 모바일화면 메뉴 swiper적용
	let swiper = new Swiper('#header .swiper-container', {
		scrollbar: '.swiper-pagination',
        slidesPerView: 'auto',
        spaceBetween: 0,
        grabCursor: true
    });
    
    // incluses polyfill
    if (!String.prototype.includes) {
	  String.prototype.includes = function(search, start) {
	    'use strict';
	    if (typeof start !== 'number') {
	      start = 0;
	    }
	    
	    if (start + search.length > this.length) {
	      return false;
	    } else {
	      return this.indexOf(search, start) !== -1;
	    }
	  };
	}
    
})(jQuery, window);