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
var swiper2 = new Swiper(detailSwipeSmall,detailSwipeSmallInfo);


$.ajaxPrefilter(function( options, originalOptions, jqXHR ) { options.async = true; });



var douSubscribe =false;
var isPlay = false
var islike;
var rulogin;

var zzno = location.href.split('?')[1].split('=')[1]


var memberno =0 ;
console.log(memberno)
$.getJSON('auth/userinfo.json',function(result){
// console.log(typeof(result.data.no),"auth")
 try{
   if(result.data.no){
     rulogin=true;
     console.log(rulogin,'63')
   }
   memberno=result.data.no
 }catch(e){
   rulogin = false;
 }

    console.log(memberno)
    console.log(zzno)
    $.getJSON('zzallike/doulike.json',{'mno':memberno,'zzno':zzno},function(result){
      islike=Boolean(result.data.doit)
      // console.log(result.data.doit)
    buttonChecker();
    })


    if (rulogin) {
      $('#like-btn').on('click',function(){
        console.log('좋아요 안이야! buttonChecker')

      //  leftBtnFunc(this, islike);

        let up = $(this)[0].children[0]
        let off = $(this)[0].children[1]


       if(!islike){
         $.post('zzallike/loveu.json',{'mno':memberno, 'zzno':zzno},function(result){
           console.log(result)
         },"json")
         console.log(islike)
         innerFuncion(up,off)
          event.preventDefault()
         return islike=true;
       }else{
         $.post('zzallike/notloveu.json',{'mno':memberno, 'zzno':zzno},function(result){
           console.log(result)
         },"json")
         console.log(islike)
         innerFuncion(off,up)
          event.preventDefault()
         return  islike=false;
       }

      })



      function innerFuncion(up,off){
        $(up).removeClass('off-btn')
        $(off).addClass('off-btn')

      }

      //
      // $('#m-like-btn').on('click',function(event){
      //   console.log('좋아요 안이야! 114')
      //
      // //  leftBtnFunc(this, islike);
      //
      //   let up = $(this)[0].children[0]
      //   let off = $(this)[0].children[1]
      //  if(!islike){
      //    console.log(islike)
      //    $(up).removeClass('off-btn')
      //    $(off).addClass('off-btn')
      //    return islike=true;
      //  }else{
      //    console.log(islike)
      //    $(off).removeClass('off-btn')
      //    $(up).addClass('off-btn')
      //    return islike=false;
      //  }
      //
      // })





      console.log('재생 안이야! 117')
      $('#subscribe-btn').on('click',function(event){

      //	leftBtnFunc(isvolumeOn)
         let up = $(this)[0].children[0]
         let off = $(this)[0].children[1]
         event.preventDefault()
        if(!douSubscribe){
          console.log(douSubscribe)
          $(up).removeClass('off-btn')
          $(off).addClass('off-btn')
          return douSubscribe=true;
        }else{
          console.log(douSubscribe)
          $(off).removeClass('off-btn')
          $(up).addClass('off-btn')
          // event.preventDefault()
          return douSubscribe=false;
        }
      })

      $('#m-subscribe-btn').on('click',function(event){

      //	leftBtnFunc(isvolumeOn)
         let up = $(this)[0].children[0]
         let off = $(this)[0].children[1]
        if(!douSubscribe){
          console.log(douSubscribe)
          $(up).removeClass('off-btn')
          $(off).addClass('off-btn')
          event.preventDefault()
          return douSubscribe=true;
        }else{
          console.log(douSubscribe)
          $(off).removeClass('off-btn')
          $(up).addClass('off-btn')
          event.preventDefault()
          return douSubscribe=false;
        }
      })


      //login 시에만
    } else {
      console.log(rulogin,'186')
      $('.upper-upper #like-btn, #subscribe-btn').on('click',function(){
        alert('로그인 하세요!')
        event.preventDefault()
      })
    }


})






//
function buttonChecker(){
  if(islike){
    console.log(islike)
    $($('.heart')[0]).removeClass('off-btn')
    $($('.heart')[1]).addClass('off-btn')
    // $('.heart')[0]
    // $('.heart')[1]

  }else{
    $($('.heart')[1]).removeClass('off-btn')
    $($('.heart')[0]).addClass('off-btn')
  }

  // if(douSubscribe){
  //   $('#subscribe-btn')
  //   $('#m-subscribe-btn')
  // }
  //
  // if(isPlay){
  //   $('#play-btn')
  //   $('#m-play-btn')
  // }
}




$('#play-btn').on('click',function(event){
//	leftBtnFunc(isPlay)
   let up = $(this)[0].children[0]
   let off = $(this)[0].children[1]
  if(!isPlay){
    console.log(isPlay)
    $(up).removeClass('off-btn')
    $(off).addClass('off-btn')
    event.preventDefault()
    return isPlay=true;
  }else{
    console.log(isPlay)
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
    console.log(isPlay)
    $(up).removeClass('off-btn')
    $(off).addClass('off-btn')
    event.preventDefault()
    return isPlay=true;
  }else{
    console.log(isPlay)
    $(off).removeClass('off-btn')
    $(up).addClass('off-btn')
    event.preventDefault()
    return isPlay=false;
  }
})



//
// $('.detail-funcbtn-a').on('click', function(e){
//     let layer =$(this).attr('href')
//     $(layer).fadeIn()
// })




$.getJSON('zzal/list.json',{'zzno': zzno},function(result){
  console.log(result)
  console.log(result.data.list[0])
  let usedata = result.data.list[0];
  let str = usedata.cdt
  let res = str.split(" ");
  console.log(res[0])
  generateHandlebars(result, $('#detail-swipeslide-template'), $('#zzalswipe-tg'))

  $(document).ready(function() {

  		$('#main-date').text(res[0])

  	});



})

function generateHandlebars(result, el, target) {
  templateFn = Handlebars.compile(el.text())
  generatedHTML = templateFn(result.data)
  // console.log(generatedHTML)
  target.text('')
  target.html(generatedHTML)
}
