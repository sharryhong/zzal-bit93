(function($) {
//	var s = document.createElement("script"); 
//	s.src = "https://developers.kakao.com/sdk/js/kakao.min.js"; 
//	$("head").append(s);
	var that;
	var dbNick = new Array();
	var dbEmail = new Array();
	var regex_id=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	var regex_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
	var isOk="yes";
	
	var fiEmail = $('#fi-email'),
	fiPassword = $('#fi-password'),
	joinEmail = $('#join-email'),
	joinPw = $('#join-pw'),
	joinRePw = $('#join-pw-re'),
	joinNick = $('#join-nick'),
	joinSignType = "zzal";
	
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
			$(".wrong-password").text('영문, 숫자 혼합 6~20자로 설정해주세요')
			isOk="no";
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

				
				
				if ($("#join-nick").val() == dbNick[i]) {
					$(".wrong-nick").text("이미 사용중인 닉네임입니다.")
					isOk = "no";
				} 
			}
		}) // member list ajax()
		$.ajax ({ //이메일 중복여부 검사
			type: 'POST',
			url: contextRoot + '/auth/loginoverlap.json',
			data: {
				email: joinEmail.val(),
				signtype: joinSignType
			}, 
			async: false,
			success: function(result) {
				console.log(result)
				if(result.data.email == $("#join-email").val() ) {
					$(".wrong-email").text("이미 사용중인 이메일입니다.")
					isOk = "no";
				}
			}
		}); // member ajax()
	} //wrongValueChecker ()

	
	
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
					membpic: 'anonymous.png',
					signtype: joinSignType
				}, 
				async: false,
				success: function(result) {
					swal({
						title: "가입을 환영합니다",
						text: "짤스쿨의 유쾌하고 즐거운 강의들을 경험해보세요",
						type: "success",
						showCancelButton: false,
						closeOnConfirm: true,
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
	
	
	// ----------------------------------------------------------------------- //
	
	
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

		$(".signup-container .form-group, .signup-container .method2").not(".div-join-nickname").show();
		$("#join-email").val('')
		$("#join-pw").val('')
		$("#join-pw-re").val('')
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
		$('#login-btn').click(function() {
			console.log('login-btn')
			$.post(contextRoot + '/auth/login.json', {
		      'email': fiEmail.val(),
		      'password': fiPassword.val(),
		      'signtype': 'zzal'
		    }, function(result) {
		    	$.getJSON(contextRoot + '/auth/userinfo.json', function(result) {
//		    		console.log(result)
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
	// ----------------------------------------------------------------------- //
/*	 //카카오톡으로 로그인
	// 카카오 서버에 등록받은 어플리케이션 ID 넣기. 
	// 카톡 로그인 1. - 카카오 로그인 서버 접속
	Kakao.init("18483a72f0b203373e0201a0fa7fd0b2");
	Kakao.Auth.logout();
	$(".login-container .kakao-btn").click(function() {
		Kakao.Auth.login({
			persistAccessToken: true,
			persistRefreshToken: true,
			success: function(authObj) {
				getKakaotalkUserProfile(); //회원 정보 알아오는 function.
			},
			fail: function(err) {
				console.log(err);
			}
		});
	});
	// 카톡 로그인 2.- 카카오 아이디 로그인이 완료된후, api로 회원의 email과 아이디 그리고 idnumber를 알아온다.
	function getKakaotalkUserProfile(){
		Kakao.API.request({
			url: '/v1/user/me', // 이게 달라지면 리퀘스트 오류가 난다. 
			success: function(res) {
				$.post(contextRoot + '/auth/login.json', {
					'email': res.kaccount_email,
					'password': "sns1234",
					'signtype' : "kakao"
				}, function(result) {
					if (result.data == "success") {
						$.getJSON(contextRoot + '/auth/userinfo.json', function(result) {
							if (result.data.auth == false) {
								location.href='choicecategory.html'
							} else if (result.data.auth == true) {
								location.href = 'index.html'
							}
						})
					}
					if (result.data == "fail") {
						swal({
							title: "로그인 실패T^T",
							text: "카카오톡으로 가입한 아이디가 존재하지 않습니다",
							type: "error",
							confirmButtonText: "확인",
							customClass: 'login-failed'
						});
					} else {
						location.href = 'index.html'
					}
				}, 'json')
//				Kakao.init("18483a72f0b203373e0201a0fa7fd0b2");
//				Kakao.Auth.logout(function(){console.log('hihi')});
		
			}, // success
			fail: function(error) {
				console.log(error);
			} // fail
		});
	} // getKakaotalkUserProfile()
	// 카톡 회원가입 1. - 카카오 로그인 서버 접속  
	$(".signup-container .kakao-btn").click(function() {
		Kakao.Auth.login({
			persistAccessToken: true,
			persistRefreshToken: true,
			success: function(authObj) {
				getKakaotalkUserProfileSignUp(); //회원 정보 알아오는 function.
				$(".signup-container .form-group, .signup-container .method2").not(".div-join-nickname").hide();
			},
			fail: function(err) {
				console.log(err);
			}
		});
		Kakao.Auth.logout();
	});

	// 카톡 회원가입 2. 
	function getKakaotalkUserProfileSignUp(){
		Kakao.API.request({
			url: '/v1/user/me', // 이게 달라지면 리퀘스트 오류가 난다. 
			success: function(res) {
				joinEmail.val(res.kaccount_email),
				joinPw.val("sns1234"),
				joinRePw.val("sns1234"),
				joinSignType = "kakao"
					$.ajax ({ //이메일 중복여부 검사
						type: 'POST',
						url: contextRoot + '/auth/loginoverlap.json',
						data: {
							email: joinEmail.val(),
							signtype: joinSignType
						}, 
						async: false,
						success: function(result) {
							console.log(result)
							if(result.data.email == $("#join-email").val() ) {
								swal({
									title: "이미 카톡으로 가입하셨네요",
									text: "아이디와 이메일을 확인해주세요",
									type: "error",
									showCancelButton: false,
									closeOnConfirm: true,
								},
								function(){
									setTimeout(function(){
										$(".wrong-email").empty()
										$(".wrong-password").empty()
										$(".wrong-password-re").empty()
										$(".wrong-nick").empty()
										$(".wrong-agree").empty()
										$(".signup-container .form-group, .signup-container .method2").not(".div-join-nickname").show();
										$("#join-email").val('')
										$("#join-pw").val('')
										$("#join-pw-re").val('')
									});
								});
							}
						}
					}); // member ajax()
			}, // kakao api success
			fail: function(error) {
				console.log(error);
			} // fail
		}); // Kakao.API.request
	} // getKakaotalkUserProfile()
//	$("#logout-link").click(function() {
//		Kakao.init("18483a72f0b203373e0201a0fa7fd0b2");
//		Kakao.Auth.logout(function(){console.log('hihi')});
//	})
//	
*/	// ----------------------------------------------------------------------- //
	// 페이스북 로그인 
	$(".login-container .fcbk-btn").click(function(){ //페이스북 로그인
		fbLogin()
		console.log('hihis')
	})
	$(".signup-container .fcbk-btn").click(function(){ //페이스북 회원가입
		$(".signup-container .form-group, .signup-container .method2").not(".div-join-nickname").hide();
		joinSignType:"facebook"
			fbSignUp()
	})
//	$("#logout-link.logout").click(function(){
//		setTimeout(fbLogout(), 2000);
//		console.log('로그로그아웃')
//	})
	

	// 페북 로그아웃 함수
	function fbLogout(){
		FB.getLoginStatus(function(ret) {
			FB.logout(function(response) {
				console.log("로그아웃되었다냥")
			});
		})
	} 
	// 페북 로그인 함수
	function fbLogin(){	
		FB.getLoginStatus(function(ret) {
			FB.login(statusChangeCallback, {
				scope : 'email, public_profile',
				return_scopes : true
			});			
		})
	} 
	// 페북 회원가입 함수
	function fbSignUp(){
		FB.getLoginStatus(function(ret) {
			console.log(ret)
			/// are they currently logged into Facebook?
			if(!ret.authResponse) {
				FB.login(statusChangeCallbackSignUp, {
					scope : 'email, public_profile',
					return_scopes : true
				});
			} else {}
		});
		testAPISignUp()
	}
	// 페이스북으로 로그인할때 
	// This is called with the results from from FB.getLoginStatus().
	function statusChangeCallback(response) {
		console.log('statusChangeCallback');
		if (response.status === 'connected') {
			testAPI();
		} else if (response.status === 'not_authorized') {
			// 페이스북에는 로그인 했으나, 앱에는 로그인이 되어있지 않다.
			console.log("가입해야해요")
		} else {
			// 페이스북에 로그인이 되어있지 않다. 따라서, 앱에 로그인이 되어있는지 여부가 불확실하다.
		}
	}
	function statusChangeCallbackSignUp(response) {
		console.log('statusChangeCallback');
		console.log(response);
		// response 객체는 현재 로그인 상태를 나타내는 정보를 보여준다. 
		// 앱에서 현재의 로그인 상태에 따라 동작하면 된다.
		// FB.getLoginStatus().의 레퍼런스에서 더 자세한 내용이 참조 가능하다.
		if (response.status === 'connected') {
			// 페이스북을 통해서 로그인이 되어있다.
			testAPISignUp();
		} else if (response.status === 'not_authorized') {
			// 페이스북에는 로그인 했으나, 앱에는 로그인이 되어있지 않다.
			document.getElementById('status').innerHTML = 'Please log '
				+ 'into this app.';
		} else {
			// 페이스북에 로그인이 되어있지 않다. 따라서, 앱에 로그인이 되어있는지 여부가 불확실하다.
			document.getElementById('status').innerHTML = 'Please log '
				+ 'into Facebook.';
		}
	}
	// 이 함수는 누군가가 로그인 버튼에 대한 처리가 끝났을 때 호출된다.
	// onlogin 핸들러를 아래와 같이 첨부하면 된다.
	function checkLoginState() {
		FB.getLoginStatus(function(response) {
			statusChangeCallback(response);
		});
	}
	window.fbAsyncInit = function() {
		FB.init({
			appId : '332224223875073',
			cookie : true, // 쿠키가 세션을 참조할 수 있도록 허용
			xfbml : true, // 소셜 플러그인이 있으면 처리
			status : true,
			version : 'v2.1' // 버전 2.1 사용,
		});
	};
	// SDK를 비동기적으로 호출
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id))
			return;
		js = d.createElement(s);
		js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	// 로그인이 성공한 다음에는 간단한 그래프API를 호출한다.
	// 이 호출은 statusChangeCallback()에서 이루어진다.
	
	function testAPI() {
		FB.api('/me', {
			fields : 'email, name'
		}, function(response) { // 페이스북에서 보내준 response
			$.post(contextRoot + '/auth/login.json', {
				'email': response.email,
				'password': "sns1234",
				'signtype': "facebook"
			}, function(result) {
				if (result.data == "success") {
					$.getJSON(contextRoot + '/auth/userinfo.json', function(result) {
						if (result.data.auth == false) {
							location.href='choicecategory.html'
						} else if (result.data.auth == true) {
							location.href = 'index.html'
						}
					})
				}
				if (result.data == "fail") {
					swal({
						title: "로그인 실패T^T",
						text: "짤스쿨 회원이 아니네요.. 회원가입부터 해주세요 ",
						type: "error",
						confirmButtonText: "확인",
						customClass: 'login-failed'
					});
				} else {
					location.href = 'index.html'
				}
			}, 'json')
			console.log(response)
			fbLogout() // 이거때문에 진짜 고생했네...
		});
	}
	function testAPISignUp() {
		FB.api('/me', {
			fields : 'email, name'
		}, function(response) {
			joinEmail.val(response.email)
			joinPw.val("sns1234"),
			joinRePw.val("sns1234"),
			joinSignType = "facebook"
				$.ajax ({ //이메일 중복여부 검사
					type: 'POST',
					url: contextRoot + '/auth/loginoverlap.json',
					data: {
						email: joinEmail.val(),
						signtype: joinSignType
					}, 
					async: false,
					success: function(result) {
						console.log(result)
						if(result.data.email == $("#join-email").val() ) {
							swal({
								title: "이미 페이스북으로 가입하셨네요",
								text: "아이디와 이메일을 확인해주세요",
								type: "error",
								showCancelButton: false,
								closeOnConfirm: true,
							},
							function(){
								setTimeout(function(){
									$(".wrong-email").empty()
									$(".wrong-password").empty()
									$(".wrong-password-re").empty()
									$(".wrong-nick").empty()
									$(".wrong-agree").empty()
									$(".signup-container .form-group, .signup-container .method2").not(".div-join-nickname").show();
									$("#join-email").val('')
									$("#join-pw").val('')
									$("#join-pw-re").val('')
								});
							});
						}
					}
				}); // member ajax()
			fbLogout() // 이거때문에 진짜 고생했네...
		}); //facebook testAPISignUp() response
	}
})(jQuery);
