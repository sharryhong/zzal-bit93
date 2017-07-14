console.log("이미지 높이!")



function funLoad(){
var Cheight = $('.contents-images-zzals').height();
$('#imagetest').css({'height':Cheight+'px'});
}
window.onload = funLoad;
window.onresize = funLoad;

// console.log($('#m-zzallect-starter'));
// console.log($('#m-detpg-header'),"호우")

if (window.innerWidth < 761){

var diduSeaBanner = false
let pagenum = parseInt($('#mobile-pageNum')[0].innerHTML),
    pagesize = parseInt($('#mobile-pageSize')[0].innerHTML);


detailMobileMainController()
console.log(diduSeaBanner,'나 아직 시작 안했어')
function detailMobileMainController() {
if (!diduSeaBanner) {
  $('#m-zzallect-starter').on('swipeleft swiperight',function(event){
    console.log(event)
    console.log(diduSeaBanner,"나 메인 지나 갈꺼얌")
  // console.log(cnt)
           if(event.type=='swipeleft') {
            //header's
            $('#m-detpg-header').removeClass('mobile-contents-header m-dis-depg')
                                .addClass('header mobile-contents-header m-det-main-pg');

            $('.mobile-detail-main-header').addClass('using-detail-main mobile-detail-main-header  m-dis-depg');

            $('#m-zzallect-starter').addClass('mobile-detail-main-mid m-dis-depg');
            $('.mobile-main-midbot-con.m-dis-depg').removeClass('mobile-main-midbot-con m-dis-depg')
                                                   .addClass('mobile-main-midbot-con');
            $('.mobile-detailpage-left-footer.m-dis-depg').removeClass('mobile-detailpage-left-footer m-dis-depg')
                                                          .addClass('mobile-detailpage-left-footer');
            $('.mobile-detail-footer').removeClass('mobile-detail-footer')
                                                          .addClass('mobile-detail-footer m-det-contents-footer');

            $('.content-box').attr('id','page-mover');
            console.log(diduSeaBanner,'나 바뀔듯')
            console.log(cnt,'cnt')
            return diduSeaBanner=true,console.log(diduSeaBanner,'나 바뀜'),detailMobileContentsController();
          }
   })
 }
}
//
}//조건

var cnt =0

function detailMobileContentsController() {
  if(diduSeaBanner) {
    console.log("나 컨텐츠 안이야")
      $('.content-box').on('swipeleft swiperight',function(event){
          if(event.type=='swipeleft'){
            // console.log(pagenum)
            // console.log(pagesize)
            cnt++
            console.log(event, '나 컨텐츠 박스야')
            console.log("---------------------")
            console.log(cnt,'cnt')
            if(pagenum == pagesize) {
              return detailMobileLastPage();
            }else{
              pagenum=(pagenum+1)
              return $('#mobile-pageNum')[0].innerHTML=pagenum,console.log(pagenum,'pagenum'),console.log(pagesize,'pagesize');
            }
            detailMobileMainController();
          }
      })
  }
}


function detailMobileLastPage() {
  console.log('끝')
  $('.mobile-main-midbot-con').css({'display':'none'});
  $('.header.m-dis-depg').addClass('header')
}
