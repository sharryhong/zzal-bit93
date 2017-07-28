var detailSwipeBig = '.detail-siwpe.swiper-container';
var detailSwipeBigInfo = {
                          nextButton: '.swiper-button-next',
                          prevButton: '.swiper-button-prev',
                          pagination: '.swiper-pagination',
                          paginationType: 'fraction'
                         }

var swiper = new Swiper(detailSwipeBig,detailSwipeBigInfo)



// <!-- <script src="js/slide.js"></script> -->
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
var swiper = new Swiper(detailSwipeSmall,detailSwipeSmallInfo );

var islike = false;

$('#like-btn').on('click',function(event){
  console.log('좋아요 안이야! 114')
  let up = $(this)[0].children[0]
  let off = $(this)[0].children[1]
 if(!islike){
   console.log(islike)
   $(up).removeClass('off-btn')
   $(off).addClass('off-btn')
   return islike=true;
 }else{
   console.log(islike)
   $(off).removeClass('off-btn')
   $(up).addClass('off-btn')
   return islike=false;
 }

})

var isvolumeOn = false;

console.log('재생 안이야! 117')
$('#volume-btn').on('click',function(event){
   let up = $(this)[0].children[0]
   let off = $(this)[0].children[1]
  if(!isvolumeOn){
    console.log(isvolumeOn)
    $(up).removeClass('off-btn')
    $(off).addClass('off-btn')
    return isvolumeOn=true;
  }else{
    console.log(isvolumeOn)
    $(off).removeClass('off-btn')
    $(up).addClass('off-btn')
    return isvolumeOn=false;
  }
})

var isPlay = false

$('#play-btn').on('click',function(event){
   let up = $(this)[0].children[0]
   let off = $(this)[0].children[1]
  if(!isPlay){
    console.log(isPlay)
    $(up).removeClass('off-btn')
    $(off).addClass('off-btn')
    return isPlay=true;
  }else{
    console.log(isPlay)
    $(off).removeClass('off-btn')
    $(up).addClass('off-btn')
    return isPlay=false;
  }
})



$('.detail-funcbtn-a').on('click', function(e){
    let layer =$(this).attr('href')
    $(layer).fadeIn()
})


//
// var lstPagenOm = $('.detail-page-swipe .det-lect'),
//     lstPagenUm= ($('.detail-page-swipe .det-lect').length)-1;

// console.log($(lstPagenOm[lstPagenUm]))
var testnum =$('.swiper-wrapper.detail-page-swipe .swiper-pagination.main-disabled.swiper-pagination-fraction')


$.getJSON('detailpage.json',function(result){
  console.log(result)
  let templateFn = Handlebars.compile($('#detailright-user-template').text())
  let generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
  console.log(generatedHTML)
  $('#detailright-info').text('') // tbody의 기존 tr 태그들을 지우고
  $('#detailright-info').html(generatedHTML) // 새 tr 태그들로 설정한다.
  //
  // templateFn = Handlebars.compile($('#mypagemid-template').text())
  // generatedHTML = templateFn(result.data)
  // $('#mypage-mid').text('')
  // $('#mypage-mid').html(generatedHTML)
  //
  // templateFn = Handlebars.compile($('#mypagebot-template').text())
  // generatedHTML = templateFn(result.data)
  // $('#mypage-bot').text('')
  // $('#mypage-bot').html(generatedHTML)
})
