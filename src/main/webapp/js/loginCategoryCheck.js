		// 로그인, 회원가입
	var fiEmail = $('#fi-email'),
		fiPassword = $('#fi-password'),
		joinEmail = $('#join-email'),
		joinPw = $('#join-pw'),
		joinNick = $('#join-nick')
	
		$('#login-btn').click(function() {
			console.log('login-btn')
			$.post(contextRoot + '/auth/login.json', {
		      'email': fiEmail.val(),
		      'password': fiPassword.val()
		    }, function(result) {
		    	$.getJSON(contextRoot + '/auth/userinfo.json', function(result) {
		    		if (result.data.auth == false) {
		    			location.href='choicecategory.html'
		    		} else if (result.data.auth == true) {
		    			location.href = 'index.html'
		    		}
		    	})
		    	if (result.data == "fail") {
		    		swal({
		    			  title: "로그인 실패",
		    			  text: "아이디와 비밀번호를 확인해주세요",
		    			  type: "error",
		    			  confirmButtonText: "확인",
		    			  customClass: 'login-failed'
		    			});
		    		} else {
		    	location.href = 'index.html'
		    		}
		    }, 'json')
		})