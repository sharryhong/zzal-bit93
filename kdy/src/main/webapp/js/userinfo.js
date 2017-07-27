// 로그인 사용자 정보를 가져온다.
$.getJSON(contextRoot + '/auth/userinfo.json', function(result) {
  if (result.data) {
	  console.log(result.data)
      // 로그인 전 후          
	  $('.header .before-login').css('display', 'none')
	  $('.header .after-login').css('display', 'block')
	  
	  // 마이페이지 memb 사진, 닉네임 출력 
	  var nickname = result.data.nick
	  var userPic = result.data.membpic
	  $('.profile-wrap .phot').css({"background-image": "url(image/"+userPic+")"});
	  $('.user-name').text(nickname)
	  
	  //프호필 수정페이지	
	  $('.profile-picture').css({"background-image": "url(image/"+userPic+")"});
	  $('#profile-name').val(nickname);
  }
}) 

// 로그아웃
$(document.body).on('click', '#logout-link', function(event) {
  $.getJSON(contextRoot + '/auth/logout.json', function(result) {
    location.href = contextRoot + '/index.html'
  })
})