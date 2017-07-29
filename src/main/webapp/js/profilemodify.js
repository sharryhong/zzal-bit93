$(document).ready(function(){ 
	var profileName = $('#profile-name'),
		profilePw = $('#profile-pw'),
		profilePwNew = $('#profile-pw-new'),
		profilePwRe = $('#profile-pw-re')
		
	$('#profile-modify-btn').click(function() {
      $.post(contextRoot + '/member/update.json', {
        'nick': profileName.val(),
        'password': profilePwNew.val()
      }, function(result) {
    	  location.href = 'mypage.html' 
      }, 'json')
    })
    
    $.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
	  if (result.data) {
		  profileName.val(result.data.nick)
		  $('.profile-picture').css({"background-image": "url(image/"+result.data.membpic+")"});
	  }
	})
	
});
