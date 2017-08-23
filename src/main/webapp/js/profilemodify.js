$(document).ready(function(){
	var profileName = $('#profile-name'),
	profilePw = $('#profile-pw'),
	profilePwNew = $('#profile-pw-new'),
	profilePwRe = $('#profile-pw-re'),
	memberpicfilename = $('.memberpic-filename');
	/*var no = 0
	try {
	  no = location.href.split('?')[1].split('=')[1]
	} catch (err) {}*/

	var that;
	var dbNick = new Array();
	var dbEmail = new Array();
	var regex_id=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	var regex_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
	var isOk="yes";

	var no = 0; // 로그인한 회원의 넘버가 담겨있다. 
	var nickName; // 로그인한 회원의 닉네임이 담겨있다. 
	var loginEmail; // 로그인한 회원의 이메일이 담겨있다. 
	var signType; // 로그인한 회원의 가입유형이 담겨있다. 
	var UserPassword; // 로그인한 회원의 비밀번호가 담겨있다. 

	$.getJSON('auth/userinfo.json', function(result) {
		if (result.data) {
			nickName = result.data.nick
			loginEmail = result.data.email
			signType = result.data.signtype
			no = result.data.no
			profileName.val(result.data.nick)
			UserPassword = result.data.password

			$('.profile-picture').css({"background-image": "url(upload/"+result.data.membpic+")"});
			$('input[type="hidden"]')[0].value=result.data.membpic;
		}


		function wrongValueCheckerProfile () {
			/*  1단계. 공백여부 검증*/
			// 개인정보 수정 시 닉네임 입력 여부 검증.
			if ($(".profile-change #profile-name").val()=="") {
				$(".profile-change .wrong-nick").text('닉네임을 입력해주세요.')
				isOk = "no";
			} else {
				$(".profile-change .wrong-nick").empty()
			}

			// 개인정보 수정 시 현재 암호 입력 여부 검증.
			if ($(".profile-change #profile-pw").val()=="") {
				$(".wrong-password").text('비밀번호를 입력해주세요.')
				isOk = "no"; 
			} else if (
					// 입력한 비밀번호와 실제 비밀번호가 맞는지 확인.
					$.ajax({
						type: 'POST',
						url: 'member/isRightMyPassword.json',
						data: {'email': loginEmail, 'password': $(".profile-change #profile-pw").val(), 'signtype' : signType}, 
						async: false,
						success: function(data) {
							console.log(data)
							if (data.status == "fail") {
								$(".wrong-password").text('입력하신 기존 비밀번호가 틀렸습니다')
								isOk="no";
							} else {
								$(".profile-change .wrong-password").empty()
								isOk="yes";
							}
						}
					}) // ajax
					//
			) {
			} else {
				$(".profile-change .wrong-password").empty()
			}

			// 개인정보 수정 시 새로운 암호 입력 여부 검증.
			if ($(".profile-change #profile-pw-new").val()=="") {
				$(".wrong-newPassword").text('변경할 비밀번호를 입력해주세요.')
//				isOk = "no";
			} else if (regex_pwd.test($(".profile-change #profile-pw-new").val()) === false) {
				$(".wrong-newPassword").text('비밀번호는 영문, 숫자 혼합 6~20자 입니다')
				isOk="no";
			} else {
				$(".wrong-newPassword").empty()
				$(".wrong-password-re").empty()
			}

			// 개인정보 수정 시 변경할 '재확인 암호' 입력 여부 검증.
			if ($(".profile-change #profile-pw-re").val()=="") {
				$(".wrong-password-re").text('재확인 비밀번호를 입력해주세요.')
//				isOk = "no";
			} else if (regex_pwd.test($(".profile-change #profile-pw-re").val()) === false) {
				$(".wrong-password-re").text('비밀번호는 영문, 숫자 혼합 6~20자 입니다')
				isOk="no";
			} else if ($("#profile-pw-new").val() != $("#profile-pw-re").val()) {
				$(".wrong-password-re").text('재확인 암호가 일치하지 않습니다')
				isOk="no";
			} else {
				$(".wrong-password-re").empty()
			}

			/* 2단계. DB중복 데이터(email, nickname) 여부 검증 */
			$.getJSON('member/listExceptMyNick.json', {'nick': nickName}, function(result) {
//				console.log('지금 내가 알고싶은', result)
				for (var i = 0 ; i < (result.data.list).length; i++) {
					dbNick.push(result.data.list[i].nick);

					if ($(".profile-change #profile-name").val() == dbNick[i]) {
						$(".wrong-nick").text("이미 사용중인 닉네임입니다.")
						isOk = "no"
					}
				}
			}) // member list ajax()
		} //wrongValueCheckerProfile ()


		/* 3단계 최종 DB저장 */ 
		$(document).on("click", '#profile-modify-btn', function() {
			that = $(this)
			wrongValueCheckerProfile ()
			console.log('isOk의 마지막 상태는?', isOk)

			// 변경할 비밀번호를 입력했을 때 타는 로직 (case. 프로필사진 or 닉네임 + 비밀번호 변경) 
			if ($('#profile-pw-new').val() != "" || $('#profile-pw-re').val() != "") {

				if (isOk == "yes") {
					$.ajax ({
						type: 'POST',
						url: 'member/update.json',
						data: {
							'no': no,
							'nick': profileName.val(),
							'password': $('#profile-pw-new').val(), // 회원이 새롭게 입력한 비밀번호
							'membpic': $(memberpicfilename).val()
						}, 
						async: false,
						success: function(result) {
							swal({
								title: "변경 완료",
								type: "success",
								showCancelButton: false,
								closeOnConfirm: true,
							},
							function(){
								setTimeout(function(){
									location.href = 'mypage.html';
								});
							});
						}
					}); // member add ajax()
				} 

				// 변경할 비밀번호를 입력하지 않았을 때 타는 로직(case. 프로필사진 or 닉네임만 변경)
			} else if ($('#profile-pw-new').val() == "" && $('#profile-pw-re').val() == "") {
				console.log("UserPassword", UserPassword)
				$.ajax ({
					type: 'POST',
					url: 'member/updateExceptPassword.json',
					data: {
						'no': no,
						'nick': profileName.val(),
						'password': UserPassword,
						'membpic': $(memberpicfilename).val()
					}, 
					async: false,
					success: function(result) {
						swal({
							title: "변경 완료",
							type: "success",
							showCancelButton: false,
							closeOnConfirm: true,
						},
						function(){
							setTimeout(function(){
								location.href = 'mypage.html';
							});
						});
					}
				}); // member add ajax()
				$('.input-wrong').empty()
			}
		}) // on click submit button ! 




		// 여기 위로는 login.js에서 추가한 코드들(wrongValueCheckerProfile, db연결)
		// ----------------------------------------------------------------------- //
		// 여기 아래는 원래 기본에 있었던 코드들. 

		// 유저 프로필 , 닉네임, 패스워드 변경 submit버튼 클릭. 
		/*	$('#profile-modify-btn').click(function() {
      $.post('/member/update.json', {
        'no': no,
        'nick': profileName.val(),
        'password': profilePwNew.val(),
        'membpic': $(memberpicfilename).val()
      }, function(result) {
    	  location.href = 'mypage.html?no=' + no 
      }, 'json')
    })*/

		/*$.getJSON('member/detail.json', {'no': no}, function(result) {
	    profileName.val(result.data.nick)
	    $('.profile-picture').css({"background-image": "url(image/"+result.data.membpic+")"});
	})*/

		// member 프로필 업로드 사진크기200
		var memberPhotoUpLoad

		memberPhotoUpLoad = $('.memberPhoto-upload-btn')

		$(memberPhotoUpLoad).on('click',function(){
			console.log(this,'clickbox')

			$(this).fileupload({
				url: '/zzal-bit93/member/upload.json',
				dataType: 'json',
				imageMaxWidth: 200,
				disableImageResize: /Android(?!.)|Opera/
					.test(window.navigator && navigator.userAgent),
					previewMaxWidth: 200,   // 미리보기 이미지 너비
					previewMaxHeight: 200,  // 미리보기 이미지 높이
					previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
					done: function (e, data) {
						console.log('done()...');
						console.log(data.result,'data-result얌');
						var filenames = data.result.data;
						console.log(filenames,'filenames얌');
						$(memberpicfilename).val(filenames)
						for (var i = 0; i < filenames.length; i++) {
							$('.profile-picture').css("background-image", 'url(' + data.files[i].preview.toDataURL() +')');
						}
					}
			});
		});// 멤버 포토 업로드 점 온 

		/* 취소버튼 눌렀을떄 mypage로 이동*/
		$(document).on("click", '.profile-changepage .btn-cancle', function() { 
			location.href = 'mypage.html';
		})
		
		
		$(document).on("click", '.profile-changepage .deletebtn .account-delete', function() {
			$.ajax ({
				type: 'POST',
				url: 'member/deleteMember.json',
				data: {
					'no': no
				}, 
				async: false,
				success: function(result) {/*
					swal({
						title: "변경 완료",
						type: "success",
						showCancelButton: false,
						closeOnConfirm: true,
					},
					function(){
						setTimeout(function(){
							location.href = 'mypage.html';
						});
					});
				*/}
			}); // member add ajax()
		})
		
	})
});
