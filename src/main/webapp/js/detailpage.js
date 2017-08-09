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
                          nextButton: '.swiper-button-next',
                          prevButton: '.swiper-button-prev',
                          pagination: '.swiper-pagination',
                          paginationType: 'fraction'
                         }

var swiper1 = new Swiper(detailSwipeBig,detailSwipeBigInfo)

// zzaler의 다른짤강 swiper
var detailSwipeSmall='.swiper-container.lects-units';
var detailSwipeSmallInfo={
                            //  pagination: '.swiper-pagination',
                             slidesPerView: 2.5,
                             paginationClickable: true,
                             setWrapperSize : true,
                             nextButton: '.swiper-button-next',
                             prevButton: '.swiper-button-prev',
                             nested : true,
                             autoplay: 2500
                          }
var swiper2 = new Swiper(detailSwipeSmall,detailSwipeSmallInfo);

// 구함수 디프리케이트 오류문구 안올라 오게 함
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) { options.async = true; });

var douSubscribe; // 구독 하냐?! 묻는 플레그
var isPlay = false  // 자동 재생 스와이퍼에 프로퍼티 추가 오어 함수 있음
var islike;       // 좋아요 하냐?! 묻는 플레그
var rulogin;      // 로긴햇냥 ?! 묻는 플레그

var zzno = location.href.split('?')[1].split('=')[1]

var memberno = 0 ;
var collectno = 0;

// 컬렉션 넘버 받기 위함 (나중에 수정)
$.getJSON('auth/userinfo.json',function(result){
 try{
   if(result.data.no){
     rulogin=true;
   }
   memberno=result.data.no
   collectno =4;
 }catch(e){
   rulogin = false;
 }

    //좋아요임?!
    $.getJSON('zzallike/doulike.json',{'mno':memberno,'zzno':zzno},function(result){
      islike=Boolean(result.data.doit)
      buttonChecker();
    })

    //구독하심?
    $.getJSON('subs/list.json',{'mno':memberno,'cono':collectno},function(result){
      douSubscribe =Boolean(result.data.list)
      buttonChecker();
    })

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
      
      $('#subscribe-btn').on('click',function(event){

         let up = $(this)[0].children[0]
         let off = $(this)[0].children[1]
         event.preventDefault()
         if(!douSubscribe){
           $.post('subs/insert.json',{'mno':memberno, 'cono':collectno},function(result){
             console.log(result)
           },"json")
           innerFuncion(up,off)
            event.preventDefault()
           return douSubscribee=true;
         }else{
           $.post('subs/delete.json',{'mno':memberno, 'cono':collectno},function(result){
             console.log(result)
           },"json")
           innerFuncion(off,up)
            event.preventDefault()
           return  douSubscribe=false;
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
        alert('로그인 하세요!')
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
  if(islike){
    $($('.heart')[0]).removeClass('off-btn')
    $($('.heart')[1]).addClass('off-btn')

  }else{
    $($('.heart')[1]).removeClass('off-btn')
    $($('.heart')[0]).addClass('off-btn')
  }

  if(douSubscribe){
    $($('.subs')[2]).removeClass('off-btn')
    $($('.subs')[3]).addClass('off-btn')

  }else{
    $($('.subs')[3]).removeClass('off-btn')
    $($('.subs')[2]).addClass('off-btn')
  }

}



$('#play-btn').on('click',function(event){
//	leftBtnFunc(isPlay)
   let up = $(this)[0].children[0]
   let off = $(this)[0].children[1]
  if(!isPlay){
    $(up).removeClass('off-btn')
    $(off).addClass('off-btn')
    event.preventDefault()
    return isPlay=true;
  }else{
    $(off).removeClass('off-btn')
    $(up).addClass('off-btn')
    event.preventDefault()
    return isPlay=false;
  }
})


$('#m-play-btn').on('click',function(event){
//	leftBtnFunc(isPlay)
   let up = $(this)[0].children[0]
   let off = $(this)[0].children[1]
  if(!isPlay){
    $(up).removeClass('off-btn')
    $(off).addClass('off-btn')
    event.preventDefault()
    return isPlay=true;
  }else{
    $(off).removeClass('off-btn')
    $(up).addClass('off-btn')
    event.preventDefault()
    return isPlay=false;
  }
})


// 메인 화면 뿌려주는 함수
var zzalmno = 0
$(document).on('ready',function(e){
  $.getJSON('zzal/list.json',{'zzno': zzno},function(result){
	if (result.data) {
	    console.log(result.data.list[0])
	    var date = new Date(result.data.list[0].cdt)
	    zzalDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()
	    zzalmno = result.data.list[0].mno
    	generateHandlebars(result, $('#detail-swipeslide-template'), $('#zzalswipe-tg'))
    	generateHandlebars(result, $('#writer-info-template'), $('#writer-info'))
    	$('#main-date').text(zzalDate)
    	$('.date-num').text(zzalDate)
    }
  })
})

// 짤강 작성자 클릭시 
$(document).on('click', '.zzalwriternick', function() {
	location.href = 'someonepage.html?writer=' + zzalmno
})

// 오른쪽 스크롤바
$(window).on("load",function(){
    $(".detail-right").mCustomScrollbar({
    	theme: "dark-thin",
    	scrollInertia: 1000,
    	scrollButtons: { enable: true }
    });
});

