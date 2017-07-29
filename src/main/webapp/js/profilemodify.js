$(document).ready(function(){ 
	var profileName = $('#profile-name'),
		profilePw = $('#profile-pw'),
		profilePwNew = $('#profile-pw-new'),
		profilePwRe = $('#profile-pw-re')
	    
	/*var no = 0
	try {
	  no = location.href.split('?')[1].split('=')[1]
	} catch (err) {}*/
	
	var no = 0 	
    $.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
	  if (result.data) {
		  no = result.data.no
		  profileName.val(result.data.nick)
		  $('.profile-picture').css({"background-image": "url(image/"+result.data.membpic+")"});
	  }
	})

	$('#profile-modify-btn').click(function() {
      $.post(contextRoot + '/member/update.json', {
        'no': no,
        'nick': profileName.val(),
        'password': profilePwNew.val()
      }, function(result) {
    	  location.href = 'mypage.html?no=' + no 
      }, 'json')
    })
    
    /*$.getJSON('member/detail.json', {'no': no}, function(result) {
	    profileName.val(result.data.nick)
	    $('.profile-picture').css({"background-image": "url(image/"+result.data.membpic+")"});
	})*/
    
    
	
});
