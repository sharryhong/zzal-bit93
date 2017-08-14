/* 핸들바스 사용시 사용 함수
 * 매개변수 el : 핸들바스 적용 id
 * 매개변수 target : 들어갈 위치
 * 사용 예
 * $.getJSON('mainSlide.json', function(result) {
 *    generateHandlebars(result, $('#main-slide-template'), $('#mainSlide));
 *  })
 */
var templateFn = null;
var generatedHTML = null;
// 일반 핸들바스사용
function generateHandlebars(result, el, target) {
//	console.log('generateHandlebars()')
    templateFn = Handlebars.compile(el.text())
    generatedHTML = templateFn(result.data)
    target.text('')
    target.html(generatedHTML)
}
// 무한 스크롤시 핸들바스 사용
function generateHandlebarsInfinity(result, el, target) {
//	console.log('generateHandlebarsInfinity()')
    templateFn = Handlebars.compile(el.text())
    generatedHTML = templateFn(result.data)
    target.append(generatedHTML)
}

// 짤강 클릭시 조회수 + 1
if ($('.zzal-lect')) {
	$(document).on("click", ".zzal-lect", function() {
		$.post('zzal/hitCountUpdate.json', {'zzno': $(this).attr('data-zzno')}, function(result) {
	    }, 'json')
	})
}

// <a href="#"> 방지
function prevent_a() {
    $(document).on('click', 'a[href="#"]', function(e){
        e.preventDefault();
    });
}
prevent_a()

$(document).ready(function() {
	//각 카테고리 클릭시
	$(document.body).on('click', '.nav-menu', function(event) {
	  location.href = 'category.html?cno=' + $(this).attr('data-cno')
	  event.preventDefault()
	})

	// 클릭시 해당 짤강 페이지로
	$(document.body).on('click', '.zzal-lect', function(event) {
	  location.href = 'detailpage.html?zzno=' + $(this).attr('data-zzno') // 짤강 detail 완성 후  링크수정
	  event.preventDefault()
	})

	// 로그인, 회원가입
	var fiEmail = $('#fi-email'),
		fiPassword = $('#fi-password'),
		joinEmail = $('#join-email'),
		joinPw = $('#join-pw'),
		joinNick = $('#join-nick')

/*	$('#login-btn').click(function() {
		console.log('login-btn')
		$.post(contextRoot + '/auth/login.json', {
	      'email': fiEmail.val(),
	      'password': fiPassword.val()
	    }, function(result) {
	       location.href = 'index.html'
	    }, 'json')
	})*/

/*	$('#join-btn').click(function() {
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
	})*/

	// 메뉴선택시 on붙이기 (해당 url일때)
	let href = location.href;
	let pageurl = href.substr(href.lastIndexOf('/') + 1);
	var url = window.location.pathname,
    urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
	// console.log(pageurl)
	var cno = 0
	try {
	  cno = location.href.split('?')[1].split('=')[1]
	} catch (err) {}

    $('.nav a').each(function(){
    	$('.nav-menu[data-cno="'+cno+'"]').addClass('on')
        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            $(this).addClass('on');
        }
    });
    $('.mobile-nav a').each(function(){
    	$('.nav-menu[data-cno="'+cno+'"]').addClass('on')
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

});
