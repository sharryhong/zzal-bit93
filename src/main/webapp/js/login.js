(function($) {
	var that;
	var dbNick = new Array();
	var dbEmail = new Array();
	var regex_id=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	var regex_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
	var isOk="yes";
	
	
	function wrongValueChecker () {
		/*  1단계. 공백여부 검증*/
		// 회원가입 시 이메일 입력 여부 검증.
		if ($("#join-email").val()=="") {
			$(".wrong-email").text('이메일을 입력해주세요.')
			isOk = "no";
			} else if(regex_id.test($("#join-email").val()) === false) {
			$(".wrong-email").text('잘못된 이메일 형식입니다.')
			isOk="no"
		} else {
			$(".wrong-email").empty()
		}
		
		// 회원가입 시 암호 입력 여부 검증.
		if ($("#join-pw").val()=="") {
			$(".wrong-password").text('암호를 입력해주세요.')
			isOk = "no";
		} else if (regex_pwd.test($("#join-pw").val()) === false) {
			$(".wrong-password").text('비밀번호를 확인하세요(영문,숫자 혼합 6~20자 이내)')
		} else {
			$(".wrong-password").empty()
		}
		
		// 회원가입 시 재확인 암호 입력 여부 검증.
		if ($("#join-pw-re").val()=="") {
			$(".wrong-password-re").text('재확인 암호를 입력해주세요.')
			isOk = "no";
		} else if ($("#join-pw").val() != $("#join-pw-re").val()){
			$(".wrong-password-re").text('재확인 암호가 일치하지 않습니다')
			isOk="no"
		} else {
			$(".wrong-password-re").empty()
		}
		
		// 회원가입 시 닉네임 입력 여부 검증.
		if ($("#join-nick").val()=="") {
			$(".wrong-nick").text('닉네임을 입력해주세요.')
			isOk = "no";
		} else {
			$(".wrong-nick").empty()
		}
		
		// 약관동의 체크 여부 검증
		if(that.closest(".login-normal").find("#agree-chk").prop('checked') == false) {
/*			swal({
				title: "회원가입 실패",
				text: "약관에 동의하셔야 가입 가능합니다.",
				type: "error",
				confirmButtonText: "확인",
				customClass: 'login-failed'
			});*/
			$(".wrong-agree").text('약관에 동의해야 가입할 수 있습니다.')
			isOk = "no";
		} else {
			$(".wrong-agree").empty()
		}

		
		/* 2단계. DB중복 데이터(email, nickname) 여부 검증 */
		$.getJSON('member/list.json',  function(result) {
			for (var i = 0 ; i < (result.data.list).length; i++) {
				dbNick.push(result.data.list[i].nick);
				dbEmail.push(result.data.list[i].email);
				
				if ($("#join-email").val() == dbEmail[i]) {
					$(".wrong-email").text("이미 사용중인 이메일입니다.")
					isOk = "no";
				} 
				
				if ($("#join-nick").val() == dbNick[i]) {
					$(".wrong-nick").text("이미 사용중인 닉네임입니다.")
					isOk = "no";
				} 
			}
		}) // member list ajax()
	} //wrongValueCheck ()

	
	
	/* 3단계 최종 DB저장 */ 
	$(document).on("click", '#join-btn', function() {
		that = $(this)
		wrongValueChecker ()
		if (isOk=="yes") {
			$.ajax ({
				type: 'POST',
				url: contextRoot + '/member/add.json',
				data: {
					email: joinEmail.val(),
					password: joinPw.val(),
					nick: joinNick.val(),
					membpic: 'anonymous.png'
				}, 
				async: false,
				success: function(result) {
					swal({
						title: "가입을 환영합니다",
						text: "짤스쿨의 유쾌하고 즐거운 강의들을 경험해보세요",
						type: "success",
						showCancelButton: false,
						closeOnConfirm: true,
//						  showLoaderOnConfirm: true,
					},
					function(){
						setTimeout(function(){
							location.href="index.html"
						});
					});
				}
			}); // member add ajax()
		} else {
			isOk="yes";
		}
	}) // on click joinBtn 
	
	
	
	
	
	$('.login').click(function() {
		$(".login-curtain").show();
		$(".login-container").show();
		$("body").css("overflow", "hidden");
	});
	
	$('.login-form .close-btn').click(function() {
		console.log('closebtn click!!!')
		$(".login-curtain").hide();
		$(".login-container").hide();
		$(".signup-container").hide();
		$(".findId-container").hide();
		$(".findId-sendEmail-container").hide();
	    $("body").css("overflow", "visible");
	    
		$(".wrong-email").empty()
		$(".wrong-password").empty()
		$(".wrong-password-re").empty()
		$(".wrong-nick").empty()
		$(".wrong-agree").empty()

	});
	
	$('.sign-in').click(function() {
		console.log('sign-in click!!!')
		$(".login-container").hide();
		$(".signup-container").show();
		$(".login-logo").hide();
		$(".mini-logo").hide();
		$("body").css("overflow", "hidden");
	});
	
	$('.findId').click(function(){
		console.log('span findId click^^!')
		$(".login-container").hide();
		$(".findId-container").show();
		$("body").css("overflow", "hidden");
	});
	
	

	// 비밀번호 찾기 창에서, 엔터키로 확인누르기. 
	$(".input-findId").keydown(function(key) {
		if (key.keyCode == 13) {

			$(function() {
				console.log('findIdConBtn click!!!')
				$(".findId-container").hide();
				$(".findId-sendEmail-container").show();
				$("body").css("overflow", "visible");

			});
		}
	});
	
	// 비밀번호 찾기 창에서, 마우스로 확인누르기. 
	$('.findIdConBtn').click(function() {
		$(".findId-container").hide();
		$(".findId-sendEmail-container").show();
		$("body").css("overflow", "visible");
	});

	$('.submitBtn').click(function() {
		$(".findId-sendEmail-container").hide();
		$("body").css("overflow", "visible");
		$(".login-curtain").hide();

	});
	
			/* 로그인 */
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
		
	

	
	
	

	
})(jQuery);
