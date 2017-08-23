// 로그인 사용자 정보를 가져온다.
$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
  if (result.data) {
	  console.log(result.data)
	  
	  // 마이페이지 memb 사진, 닉네임 출력 
	  if (result.data) {
		  $('.profile-wrap .phot').css({"background-image": "url(upload/"+result.data.membpic+")"});
	  }
	  
      // 로그인 전 후          
	  $('.header .before-login').css('display', 'none')
	  $('.header .after-login').css('display', 'block')
	  
	  
	  /*$(document.body).on('click', '#header .mypage', function(event) {
		  location.href = 'mypage.html?no=' + result.data.no 
		  event.preventDefault()
		})

	  $(document.body).on('click', '.mypage .setting', function(event) {
		  location.href = 'profilemodify.html?no=' + result.data.no 
		  event.preventDefault()
		})*/
	  let mno = result.data.no

	  
		  
	  $.ajax({
			url:'/zzal-bit93/notice/count.json',
			method:'GET',
			data: {'mno': mno },
			success : function(result){			
				let str = result.data 
				
				console.log('userinfo',str)
				if(str!=0){
					$('.after-login .num-box')[0].innerHTML=str					
					$('.after-login .num-box').css('display','block')
				}
				
				
			$(".notice").click(function(){
				
				$.ajax({
					url:'/zzal-bit93/notice/update.json',
					method: 'POST',
					data: {'mno':mno},
					success : function(data){console.log(data,"우앙 왔당!")
			        }
				})	

		   })
		}//성공
	
		
  })//노티스 파운드 ajax
  
  
  
  }//맨위 이프
}) 



// 로그아웃
$(document.body).on('click', '#logout-link', function(event) {
  $.getJSON(contextRoot + '/auth/logout.json', function(result) {
    location.href = contextRoot + '/index.html'
  })
})