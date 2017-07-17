

function funLoad(){
  var Cheight = $('.contents-images-zzals').height();
  $('#imagetest').css({'height':Cheight+'px'});
}
window.onload = funLoad;
window.onresize = funLoad;
// 이미지 크기 조절 스크립트

// flages

var diduseaMobBanner = areuViewingConts =  areuLastPage = false


//diduseaMobBanner mobile에서 zzallect-starter를 swipe 했을 경우 true
console.log(diduseaMobBanner , areuViewingConts ,areuLastPage, "1")

let pagenum = parseInt($('#pageNum')[0].innerHTML),
    pagesize = parseInt($('#pageSize')[0].innerHTML);

let mpagenum= $('#mobile-pageNum'),
    mpagesize= $('#mobile-pageSize');
// pagesize=3;
console.log(pagenum,pagesize)
console.log(mpagenum,mpagesize)

mpagenum[0].innerHTML = pagenum;
mpagesize[0].innerHTML =pagesize;
// pagenum을 받아가 입력 시킬꺼얌

console.log(pagenum,pagesize)
console.log(mpagenum,mpagesize)
// illLectStart();
iamViewingLect()
iamLastpage();

// areuLastPage=true


// webToMobStyleController();

function LectStarting() {
    return diduseaMobBanner=true;
}

function iamViewingLect() {
  console.log('실행')
  if (diduseaMobBanner||(pagenum > 1))return areuViewingConts = true;
}

function iamLastpage() {
    if(pagesize == pagenum)return areuLastPage = true;
}

console.log(diduseaMobBanner , areuViewingConts ,areuLastPage, "2")

webToMobStyleController();


var recnt = 0;

$(window).resize(function() {
  recnt++
  console.log(recnt)
	if(this.resizeTO) {
    console.log('clearTimeout중')
		clearTimeout(this.resizeTO);
	}
	this.resizeTO = setTimeout(function() {
    console.log('setTimeout중')
		$(this).trigger('resizeEnd');
	}, 100);
});

$(window).on('resizeEnd', function() {
    // 실행 코드 들어가는 곳
    recnt++
    console.log(recnt)
    console.log('resize인식완료!')
    console.log($('.in-mobile-detail.mobile-content-box'))
      funLoad();
      webToMobStyleController();

});


var el = document.querySelector('#m-zzallect-starter')
// var mc = new Hammer.Manager(el);
var mc = new Hammer.Manager(el, {
    recognizers: [
    // // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
    // [Hammer.Rotate],
    // [Hammer.Pinch, { enable: false }, ['rotate']],
    [Hammer.Swipe,{ direction: Hammer.DIRECTION_HORIZONTAL }],
    ]
});



// function mobileFuncMachine() {

mc.on('swipeleft',function(e){

      console.log('호우')
      LectStarting();
      iamViewingLect();
      webToMobStyleController();


  console.log(diduseaMobBanner , areuViewingConts ,areuLastPage, "swipe")
 })
// }
// if(diduseaMobBanner&&areuViewingConts){
//   $('.mobile-detail-footer').removeClass('mobile-detail-footer in-mobile-detail')
//                             .addClass('mobile-detail-footer m-det-contents-footer in-mobile-detail')
//   console.log('이제 전환 1')
//   $('#m-zzallect-starter').hide();
//   $('.mobile-detail-main-header').hide();
//   $('#m-detpg-header').show();
//   $('.in-mobile-detail .mobile-content-box').show();
//   $('.mobile-detailpage-left-footer').show();



function webToMobStyleController(){

funLoad();
if (window.innerWidth < 761){
 if(!areuLastPage){
     $('.mobile-lect-right-info-detail').hide();
     $('.mobile-detail-last-replyinfo').hide();
     // $('.in-web-detail').hide();
     // return
   }else {
     $('.mobile-lect-right-info-detail').show();
     $('.mobile-detail-last-replyinfo').show();
     // console.log("어쩔")
     return
   }
}else {
  $('.mobile-lect-right-info-detail').hide();
  $('.mobile-detail-last-replyinfo').hide();
}




if(diduseaMobBanner&&areuViewingConts) {
  if (window.innerWidth < 761){
    $('.mobile-detail-footer').removeClass('mobile-detail-footer in-mobile-detail')
                              .addClass('mobile-detail-footer m-det-contents-footer in-mobile-detail')
    console.log('resize에서의 변환 1')
    $('#m-zzallect-starter').hide();
    $('.mobile-detail-main-header').hide();
    $('#m-detpg-header').show();
    $('#showmdet').show();
    $('.mobile-detailpage-left-footer').show();
    return
  }else {
    $('.mobile-detail-footer').removeClass('mobile-detail-footer m-det-contents-footer in-mobile-detail')
                              .addClass('mobile-detail-footer in-mobile-detail')
    console.log('resize에서의 변환 1')
    $('#m-zzallect-starter').hide();
    $('.mobile-detail-main-header').hide();
    $('#m-detpg-header').hide();
    $('#showmdet').hide();
    $('.mobile-detailpage-left-footer').hide();
    return
  }
}


if(!diduseaMobBanner){
  if (window.innerWidth < 761){
    console.log('mobile실행')
    $('in-web-detail .content-box').hide();
    $('.mobile-detail-main-header').show();
    $('.mobile-detailpage-left-footer').hide();
    // mobileFuncMachine()
  }else{
    console.log('다시 롤백!')
    $('.mobile-detail-main-header').hide();
    $('.content-box').show();
    $('.mobile-detailpage-left-footer').show();
  }
}

}


// console.log($('#m-zzallect-starter'));
// console.log($('#m-detpg-header'),"호우")


// var diduSeaBanner = false
// let pagenum = parseInt($('#mobile-pageNum')[0].innerHTML),
//     pagesize = parseInt($('#mobile-pageSize')[0].innerHTML);
//
//
// detailMobileMainController()
// console.log(diduSeaBanner,'나 아직 시작 안했어')
// function detailMobileMainController() {
// if (!diduSeaBanner) {
//   $('#m-zzallect-starter').on('swipeleft swiperight',function(event){
//     console.log(event)
//     console.log(diduSeaBanner,"나 메인 지나 갈꺼얌")
//   // console.log(cnt)
//            if(event.type=='swipeleft') {
//             //header's
//             $('#m-detpg-header').removeClass('mobile-contents-header m-dis-depg')
//                                 .addClass('header mobile-contents-header m-det-main-pg');
//
//             $('.mobile-detail-main-header').addClass('using-detail-main mobile-detail-main-header  m-dis-depg');
//
//             $('#m-zzallect-starter').addClass('mobile-detail-main-mid m-dis-depg');
//             $('.mobile-main-midbot-con.m-dis-depg').removeClass('mobile-main-midbot-con m-dis-depg')
//                                                    .addClass('mobile-main-midbot-con');
//             $('.mobile-detailpage-left-footer.m-dis-depg').removeClass('mobile-detailpage-left-footer m-dis-depg')
//                                                           .addClass('mobile-detailpage-left-footer');
//             $('.mobile-detail-footer').removeClass('mobile-detail-footer')
//                                                           .addClass('mobile-detail-footer m-det-contents-footer');
//
//             $('.content-box').attr('id','page-mover');
//             console.log(diduSeaBanner,'나 바뀔듯')
//             console.log(cnt,'cnt')
//             return diduSeaBanner=true,console.log(diduSeaBanner,'나 바뀜'),detailMobileContentsController();
//           }
//    })
//  }
// }
// //
// }//조건
//
// var cnt =0
//
// function detailMobileContentsController() {
//   if(diduSeaBanner) {
//     console.log("나 컨텐츠 안이야")
//       $('.content-box').on('swipeleft swiperight',function(event){
//           if(event.type=='swipeleft'){
//             // console.log(pagenum)
//             // console.log(pagesize)
//             cnt++
//             console.log(event, '나 컨텐츠 박스야')
//             console.log("---------------------")
//             console.log(cnt,'cnt')
//             if(pagenum == pagesize) {
//               return detailMobileLastPage();
//             }else{
//               pagenum=(pagenum+1)
//               return $('#mobile-pageNum')[0].innerHTML=pagenum,console.log(pagenum,'pagenum'),console.log(pagesize,'pagesize');
//             }
//             detailMobileMainController();
//           }
//       })
//   }
// }
//
//
// function detailMobileLastPage() {
//   console.log('끝')
//   $('.mobile-main-midbot-con').css({'display':'none'});
//   $('.header.m-dis-depg').addClass('header')
// }
