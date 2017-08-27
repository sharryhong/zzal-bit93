var templateFn = null;
var generatedHTML = null;
// 일반 핸들바스사용 
function generateHandlebars(result, el, target) {
    templateFn = Handlebars.compile(el.text())
    generatedHTML = templateFn(result.data)
    target.text('')
    target.html(generatedHTML)
}

/*swiper 초기화들*/
// 짤강의 swiper
var detailSwipeBig = '.detail-siwpe.swiper-container';
var detailSwipeBigInfo = {
                          nextButton: '.detail-siwpe.swiper-container .swiper-button-next',
                          prevButton: '.detail-siwpe.swiper-container .swiper-button-prev',
                          pagination: '.detail-siwpe.swiper-container .swiper-pagination',
                          paginationType: 'fraction',
                          onSlideChangeEnd: function(swiper){
                        	let indexNum = parseInt(swiper.realIndex);
              				let swiperConLength = $('.swiper-slide .contents').length
              				$('.swiper-slide .contents').css('height', '100vmax')
              				if (indexNum == swiperConLength-1) {
              					$('.swiper-slide .last-user-page').css('height', 'inherit')
              				}
              			  }
                       }

var swiper1 = new Swiper(detailSwipeBig,detailSwipeBigInfo)

// 구함수 디프리케이트 오류문구 안올라 오게 함
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) { options.async = true; });

var douSubscribe; // 구독 하냐?! 묻는 플레그
var isPlay = false  // 자동 재생 스와이퍼에 프로퍼티 추가 오어 함수 있음
var islike;       // 좋아요 하냐?! 묻는 플레그
var rulogin;      // 로긴햇냥 ?! 묻는 플레그

var zzno = location.href.split('?')[1].split('=')[1]

var memberno = 0 ; // 로그인한 멤버
var collectno = 0;

var zzalEachPage = '',
	zzalmno = 0,	// 해당 짤강 쓴 멤버 
	zzalcono = 0,
	coverImage = '',
	doSubBtn = $('.do-subc'),
	noSubBtn = $('.no-subc')
	
function checkLikeSub() {
	 //좋아요임?!
	 $.getJSON('zzallike/doulike.json',{'mno':memberno,'zzno':zzno},function(result){
		 
		 islike=Boolean(result.data.doit)
		 buttonChecker();
	 })
	 
	 //구독하심?
	 $.getJSON('subs/getcono.json',{'zzno': zzno},function(result){
		 if (result.data.list.collectNo != undefined) {
			 zzalcono = result.data.list.collectNo
			 $.getJSON('subs/list.json',{'mno':memberno,'cono':zzalcono},function(result){
				 console.log('memberno', memberno, 'zzalcono', zzalcono, 'result', result)
				 if(result.data.list) {
					 douSubscribe = true
				 } else {
					 douSubscribe = false
				 }
				 buttonChecker();
			 })
		 }
	 })
 }

// 컬렉션 넘버 받기 위함 (나중에 수정)
$.getJSON('auth/userinfo.json',function(result){
 try{
   if(result.data.no){
     rulogin=true;
   }
   memberno=result.data.no
	   $.getJSON('subs/getcono.json',{'zzno': zzno},function(result){
		   		console.log(result.data.list,"cono")
		   		if(result.data.list==undefined){
		   			return $('.subs-null').css('display','none')
		   		}
		   		
	   		    return collectno=result.data.list.collectNo
             });
 }catch(e){
   rulogin = false;
   doSubBtn.css('display', 'inline-block')
   doSubBtn.on('click', function() {
	   swal({
			  title: "로그인이 필요합니다.",
			  timer: 1000,
			  showConfirmButton: true
			});
	        $.getScript('js/login.js',function(data, textStatus, jqxhr){

	            $(".login-curtain").show();
	            $(".login-container").show();
	            $("body").css("overflow", "hidden");

	            event.preventDefault()
	        })//getScript
	        event.preventDefault()
   })
 }

 

    if (rulogin) {
      $('#like-btn').on('click',function(){

        let up = $(this)[0].children[0]
        let off = $(this)[0].children[1]

       if(!islike){
         $.post('zzallike/loveu.json',{'mno':memberno, 'zzno':zzno},function(result){
         },"json")
         innerFuncion(up,off)
          event.preventDefault()
         return islike=true;
       }else{
         $.post('zzallike/notloveu.json',{'mno':memberno, 'zzno':zzno},function(result){
         },"json")
         innerFuncion(off,up)
          event.preventDefault()
         return  islike=false;
       }

      })

      // inner 버튼 체인저
      function innerFuncion(up,off){
        $(up).removeClass('off-btn')
        $(off).addClass('off-btn')
      }
      
      $('.subscribe-btn').on('click',function(event){

         let up = $(this)[0].children[0]
         let off = $(this)[0].children[1]
         event.preventDefault()
         if(!douSubscribe){
        	 console.log(result, 'memberno', memberno, 'collectno', collectno)
           $.post('subs/insert.json',{'mno':memberno, 'cono':collectno},function(result){
             doSubBtn.css('display', 'none')
             noSubBtn.css('display', 'inline-block')
           },"json")
           innerFuncion(up,off)
           checkLikeSub()
           getCono()
            event.preventDefault()
//            douSubscribee=true;
         } else{
        	 console.log(result, 'memberno', memberno, 'collectno', collectno)
           $.post('subs/delete.json',{'mno':memberno, 'cono':collectno},function(result){
             doSubBtn.css('display', 'inline-block')
             noSubBtn.css('display', 'none')
           },"json")
           innerFuncion(off,up)
           checkLikeSub()
           getCono()
            event.preventDefault()
//            douSubscribe=false;
         }
      })

      $('#m-subscribe-btn').on('click',function(event){

         let up = $(this)[0].children[0]
         let off = $(this)[0].children[1]
        if(!douSubscribe){
          $(up).removeClass('off-btn')
          $(off).addClass('off-btn')
          event.preventDefault()
          return douSubscribe=true;
        }else{
          $(off).removeClass('off-btn')
          $(up).addClass('off-btn')
          event.preventDefault()
          return douSubscribe=false;
        }
      })
      //login 시에만
    } else {

      $('.upper-upper #like-btn, #subscribe-btn').on('click',function(){
        swal({
		  title: "로그인이 필요합니다.",
		  timer: 1000,
		  showConfirmButton: true
		});
        $.getScript('js/login.js',function(data, textStatus, jqxhr){

            $(".login-curtain").show();
            $(".login-container").show();
            $("body").css("overflow", "hidden");

            event.preventDefault()
        })//getScript
        event.preventDefault()
      })
    }
})

//버튼 상태를 체크하는 함수
function buttonChecker(){
	console.log('douSubscribe', douSubscribe)
  if(islike){
    $($('.heart')[0]).removeClass('off-btn')
    $($('.heart')[1]).addClass('off-btn')

  }else{
    $($('.heart')[1]).removeClass('off-btn')
    $($('.heart')[0]).addClass('off-btn')
  }

  if(douSubscribe){
	  doSubBtn.css('display', 'none')
	  noSubBtn.css('display', 'inline-block')
  }else{
	  doSubBtn.css('display', 'inline-block')
	  noSubBtn.css('display', 'none')
  }
}

$(document).on('ready',function(e){
  $.getJSON('zzal/list.json',{'zzno': zzno},function(result){
	if (result.data) {
		var realData = result.data.list[0]
	    console.log(realData)
	    coverImage = realData.mainPic
	    var lastPageEl = $('.last-user-reply')
	    var cdt = realData.cdt
	    var date = new Date(cdt.replace(/ /g,'T'))
	    zzalDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()
	    zzalmno = realData.mno
    	generateHandlebars(result, $('#detail-swipeslide-template'), $('.zzalswipe-tg'))
    	generateHandlebars(result, $('#writer-info-template'), $('#writer-info'))
    	generateHandlebars(result, $('#writer-info-template'), $('#writer-info2'))
    	$('#main-date').text(zzalDate)
    	$('.date-num').text(zzalDate)
    	$('.writer').text(realData.member.nick)
    	$('.likenumber').text(realData.likeCount)
    	lastPageEl.css('display', 'none')
    	ZzalPages(zzno, lastPageEl)
    	otherZzals()
    	getCono()
    	checkLikeSub()
    }
  })
})

// 컬렉트 번호받고 구독 관련
function getCono() {
	$.getJSON('subs/getcono.json',{'zzno': zzno},function(result){
		console.log('로그인 누구?', memberno, '이 컬렉션은 누구꺼??', zzalmno)
   		if(result.data.list){
   			$('.zzal-collection').css('display','block')
   			zzalcono = result.data.list.collectNo
   			$('.mycollectlist, .collect-title').on('click', function() {
   				if (memberno == zzalmno) { 
   					location.href = 'collectdetail.html?cono=' + zzalcono	
   				} else {
   					location.href = 'someonedetail.html?cono=' + zzalcono
   				}
   			})
	   		// 구독 관련 
	   			$.getJSON('collect/detail.json', {'no': zzalcono}, function(result) {
	   				console.log(result.data)
	   				$('.mycollectlist').css({"background-image": "url(upload/"+result.data.picture+")"})
	   				$('.collect-title').text(result.data.title)
	   				$.getJSON('collect/selectuser.json', {'cono': zzalcono}, function(result) {
	   					if(result.data){
	   						let realData = result.data.selectcnts
	   						$('.zzal-cnt').text(realData.zcnt)
	   						$('.subs-cnt').text(realData.scnt)
	   					}
	   				})
	   			});
   		}
     });
}

// 짤강의 페이지들
var isMobile = false
function ZzalPages(zzno, lastPageEl) {
  $.getJSON('zzal/selectListPages.json', {'zzno': zzno}, function(result){
	  // 동영상, 이미지일 때 구분해주기 위한 핸들바스의 헬퍼함수 
	  Handlebars.registerHelper('isImage', function(isImg, options) {
	    if (isImg == "false") { 
	      return options.fn(this);
	    } else { 
	      return options.inverse(this);
	    }
	  });
	  console.log(result.data)
	  for (let i = 0; i < result.data.list.length; i++) {
		  // text에 링크가 있을 때 
		  result.data.list[i].page.ConTextZ = result.data.list[i].page.ConTextZ.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function(text, link) {
			   return '<a href="'+ link +'" target="_blank">'+ link +'</a>'
		  })
		  // 이미지나 동영상이 없을 때 
		  if (result.data.list[i].page.pagePic == "") {
			  result.data.list[i].page.conTypeZ = true
			  result.data.list[i].page.pagePic = coverImage
		  }
	  }
	  var templatetmpFn = Handlebars.compile($('#pages-swipeslide-template').text())
	  swiper1.appendSlide(templatetmpFn(result.data))
	  // 모바일에서 마지막에 last page 나오게 하기 
	  if(window.innerWidth < 925 && isMobile == false) {
		  lastPageEl.css('display', 'block')
		  swiper1.appendSlide(lastPageEl)
		  isMobile = true
	  } else if (window.innerWidth > 926 && isMobile == true) {
		  lastPageEl.css('display', 'none')
		  isMobile = false
	  }
	  // 브라우저 창 크기 바뀔 때
	  $(window).resize(function(){
		  // 데스크탑이 아니면 (or 창이 줄어들면)
		  if(window.innerWidth < 925 && isMobile == false) {
			  isMobile = true
			  lastPageEl.css('display', 'block')
			  swiper1.appendSlide(lastPageEl)
		  } else if (window.innerWidth > 926 && isMobile == true) {
			  lastPageEl.css('display', 'none')
			  isMobile = false
		  }
	  });
	  zzalEachPages()
	  autoPlayZzal()
	  imgHeight()
  })
}

// 글자 길이에 따라 이미지 높이 다르게하기 
function imgHeight() {
	var $pageTexts = $('.detail-siwpe .text'),
	    $pageImgs = $('.detail-siwpe .images-wrapper')
	    $pages = $('.detail-page-swipe .swiper-slide')
	$pages.each(function(i, e) {
		if($(this).find('.text').height() >= 200) {
			if(window.innerWidth < 925) {
				$(this).find('.pages.images-wrapper').css('max-height', 'calc(100vmax - 350px)')
			} else {
				$(this).find('.pages.images-wrapper').css('max-height', 'calc(100vh - 350px)')
			}
		}
	})
}



//만들어진 짤강의 (커버 + 각 페이지 등)
function zzalEachPages() {
	zzalEachPage = $('.detail-page-swipe .swiper-slide')
}

// zzaler의 다른짤강
function otherZzals() {
  $.getJSON('zzal/zzalListOthers.json', {"mno" : zzalmno}, function(result){
	  console.log(result.data)
	  generateHandlebars(result, $('#writer-otherzzal-template'), $('#writer-otherzzal'))
	  generateHandlebars(result, $('#writer-otherzzal-template'), $('#writer-otherzzal2'))
	  // zzaler의 다른짤강 swiper
	  var detailSwipeSmall='.user-lects-units .swiper-container.lects-units';
	  var detailSwipeSmallInfo={
	                               slidesPerView: 2,
	                               paginationClickable: true,
	                               nextButton: '.user-lects-units .swiper-button-next',
	                               prevButton: '.user-lects-units .swiper-button-prev',
	                               loop: true
	                            }
	  var swiper2 = new Swiper(detailSwipeSmall,detailSwipeSmallInfo);
  })
}

// 짤강 작성자 클릭시 
$(document).on('click', '.zzalwriternick, .more-view', function() {
	location.href = 'someonepage.html?writer=' + zzalmno
})

// 댓글 작성자 클릭시 
$(document).on('click', '.reply-user-phot, .reply-con .name', function() {
	var replymno = $(this).attr('data-mno')
	location.href = 'someonepage.html?writer=' + replymno
})

// 오른쪽 스크롤바
$(window).on("load",function(){
    $(".detail-right").mCustomScrollbar({
    	theme: "dark-thin",
    	scrollInertia: 1000,
    	scrollButtons: { enable: true }
    })
})

function autoPlayZzal() {
	var autoPlay = '',
	    toFirst = '',
	    faPause = $('.auto-play .fa-pause'),
	    faPlay = $('.auto-play .fa-play'),
	    autoPlayBtn = $('.auto-play'),
		isLast = false,
		swiperBtn = $('.detail-siwpe.swiper-container .swiper-button-next.web-swiper-btn')[0],
		swiperLeftBtn = $('.detail-siwpe.swiper-container .swiper-button-prev.web-swiper-btn')[0];
	  
	function autoZzalPlay() {
		var zzals = $('.swiper-pagination-total').text() - $('.swiper-pagination-current').text() - 1
		console.log(zzals)
		swiperBtn.click()
		if (zzals <= 0) {
			console.log('마지막!')
			faPause.css('display','none')
			faPlay.css('display','inline-block')
			clearInterval(autoPlay)
			isLast = true
		}
		zzals--
	}
	
	var settimeSec = 0
	var goFirst = $('.swiper-pagination-total').text() - 2
	function toFirstZzal() {
		/*var thisSec = $(this).closest('.auto-play').find('.settime-sec')
		var	settimeSec = thisSec.val() * 1000*/
		console.log(settimeSec)
		swiperLeftBtn.click()
		if (goFirst <= 0) {
			console.log('커버!')
			clearInterval(toFirst)
			autoPlay = window.setInterval(autoZzalPlay, settimeSec)
		}
		goFirst--
	}
	
	$('.auto-play .fa-play').on('click', function() {
		var thisSec = $(this).closest('.auto-play').find('.settime-sec')
		settimeSec = thisSec.val() * 1000
		var zzals = $('.swiper-pagination-total').text() - $('.swiper-pagination-current').text()
		console.log(zzals)
		faPlay.css('display','none')
		faPause.css('display','inline-block')
		swiperBtn.click()
		if (isLast || zzals == 0) { // 마지막 페이지 일 때, 커버로 가기 
			goFirst = $('.swiper-pagination-total').text() - 2
			clearInterval(autoPlay)
			toFirst = window.setInterval(toFirstZzal, 50)
			isLast = false
		} else {
			autoPlay = window.setInterval(autoZzalPlay, settimeSec)
		}
	})
	$('.auto-play .fa-pause').on('click', function() {
		faPause.css('display','none')
		faPlay.css('display','inline-block')
		clearInterval(autoPlay)
	})
	$('.detail-siwpe.swiper-container .swiper-button-prev').on('click', function() {
		isLast = false
	})
}



