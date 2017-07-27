var detailSwipeBig = '.detail-siwpe.swiper-container';
var detailSwipeBigInfo = {
                          nextButton: '.swiper-button-next',
                          prevButton: '.swiper-button-prev',
                          pagination: '.swiper-pagination',
                          paginationType: 'fraction'
                         }

var swiper1 = new Swiper(detailSwipeBig,detailSwipeBigInfo)



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
var swiper2 = new Swiper(detailSwipeSmall,detailSwipeSmallInfo );




//function leftBtnFunc(p,isBool){
//	let up = $(p)[0].children[0]
//	let off = $(p)[0].children[1]
//	if(!isBool){
//		console.log(isBool)
//		$(up).removeClass('off-btn')
//		$(off).addClass('off-btn')
//		return isBool=true;
//	}else{
//		console.log(isBool)
//		$(off).removeClass('off-btn')
//		$(up).addClass('off-btn')
//		return isBool=false;	
//	} 
//
//}
//



let islike = false;

$('#like-btn').on('click',function(event){
  console.log('좋아요 안이야! 114')
  
//  leftBtnFunc(this, islike);
  
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


$('#m-like-btn').on('click',function(event){
  console.log('좋아요 안이야! 114')
  
//  leftBtnFunc(this, islike);
  
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

//	leftBtnFunc(isvolumeOn)
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
//	leftBtnFunc(isPlay)
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


$('#m-play-btn').on('click',function(event){
//	leftBtnFunc(isPlay)
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



var zzno=1
$.getJSON('zzal/list.json',{'zzno': zzno},function(result){
  console.log(result)
  let usedata = result.data.list[0];
  let str = usedata.cdt
  let res = str.split(" "); 
  console.log(res[0])

})
