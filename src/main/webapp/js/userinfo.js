// 로그인 사용자 정보를 가져온다.
$.getJSON(contextRoot + '/auth/userinfo.json', function(result) {
  if (result.data) {
	  console.log(result.data)
               
	  /*$('.header .before-login').css('display', 'none')
	  $('.header .after-login').css('display', 'block')*/
  }
}) // getJSON()

$(document.body).on('click', '#logout-link', function(event) {
  $.getJSON(contextRoot + '/auth/logout.json', function(result) {
    location.href = contextRoot + '/index.html'
  })
})