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
                             pagination: '.swiper-pagination',
                             slidesPerView: 2.5,
                             paginationClickable: true,
                             setWrapperSize : true,
                             nextButton: '.swiper-button-next',
                             prevButton: '.swiper-button-prev',
                             nested : true,
                             autoplay: 2500
                          }
var swiper = new Swiper(detailSwipeSmall,detailSwipeSmallInfo );


$('#like-btn').on('click',function(event){
  console.log('좋아요 안이야!')
  let checker = $('.changeH.fa.fa-heart').css('color')
    console.log(checker)
   if(checker=='rgb(51, 51, 51)'){
     $('.changeH.fa.fa-heart').css({'color':'red'})

    }else {
     $('.changeH.fa.fa-heart').css({'color':'rgb(51, 51, 51)'})

   }
  return false;
})

$('.detail-funcbtn-a').on('click', function(e){
    let layer =$(this).attr('href')
    $(layer).fadeIn()
})


console.log($('.detail-siwpe'))
