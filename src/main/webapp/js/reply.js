(function($){
	'use strict'
	var memberNumberJS;

	$('.input-con .input-reply').prop('readonly', true);


	/*회원정보 세션*/
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		if (result.data) {
			memberNumberJS = result.data.no;
//			console.log('로그인한 멤버 넘버', memberNumberJS)
			$('.reply-inputer .user-name').text(result.data.nick)
			$('.profile-wrap .phot').css({"background-image": "url(upload/"+result.data.membpic+")"});
			$('.reply-inputer .user-phot').css({"background-image": "url(upload/"+result.data.membpic+")"});
			$('.input-con .input-reply').prop('readonly', false); //로그인 후 inputtext라인 활성화
		}



		/* 1. 전체 댓글 목록 받아오기 (select) */
		$(document).ready(function(){
			/* 베스트 댓글 */
//			$.getJSON('reply/bestReplyList.json', {'zzalnumber': zzno}, function(result) {
//				console.log('베댓 데이터', result)
//				if (result != null) { // 만약 베댓이 있다면, 베댓 핸들바스를  
//				let templateFn = Handlebars.compile($('#reply-bestReplyList-template').text())
//				let generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//				$('.reply-list ul').text('') // tbody의 기존 tr 태그들을 지우고
//				$('.reply-list ul').html(generatedHTML) // 새 tr 태그들로 설정한다.
//				}
//			})
			
			$.getJSON('reply/list.json', {'zzalnumber': zzno}, function(result) {
//				console.log(result)
				let templateFn = Handlebars.compile($('#reply-list-template').text())
				let generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
				$('.reply-list ul').text('') // tbody의 기존 tr 태그들을 지우고
				$('.reply-list ul').html(generatedHTML) // 새 tr 태그들로 설정한다.

				$.getJSON('reply/countreply.json', {'zzalnumber': zzno}, function(result) {
					if (result.data.countReply == 0) {
						$('.replycnt span:first-child').html('0');
					}
					$('.replycnt span:first-child').html(result.data.countReply);
					$('.replynum').html(result.data.countReply);
				})

					//한회원이 눌른 전체 좋아요 목록 받아오기
					$.getJSON('replylike/allLikeList.json', {memberNumber: memberNumberJS}, function(result) {
						for (var i = 0 ; i < (result.data.list).length; i++) {
							$(".press .like."+result.data.list[i]+" .fa").removeClass('fa-heart-o').addClass('fa-heart').css({"color":"red"})
						}
					}) 
			})// 1.
		})

		/* 2. 한 짤강의에 대한, 총 댓글 갯수 (count) */
		/*function replyCount() {
	$.getJSON('reply/countreply.json', {'zzalnumber': zzno}, function(result) {
		var countReply = result.data.countReply
		$('.replycnt span:first-child').html(countReply);
		$('.zzal-lect-info .replynum').html(countReply);
	}) //2
}*/


		/* 3. 웹 댓글 추가 (insert. 좋아요와 신고는 아직 적용못했습니다). */
		$('.detail-right .submit-reply').click(function() {
			if ($('.detail-right .input-reply').val() == "") {
				sweetAlert("댓글 입력 실패", "빈 댓글은 입력할 수 없어요 T^T", "error");
			} else {

				$.ajax({
					type: 'POST',
					url: 'reply/add.json',
					data: {content : $('.detail-right .input-reply').val(), 'zzalnumber' : zzno}, 
					async: false,
					success: function(data) {
						$.getJSON('reply/list.json', {'zzalnumber': zzno}, function(result) {
							console.log(result)
							let templateFn = Handlebars.compile($('#reply-list-template').text())
							let generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
							$('.reply-list ul').text('') // tbody의 기존 tr 태그들을 지우고
							$('.reply-list ul').html(generatedHTML) // 새 tr 태그들로 설정한다.

							$.getJSON('reply/countreply.json', {'zzalnumber': zzno}, function(result) {
								$('.replycnt span:first-child').html(result.data.countReply);
							})
							$.getJSON('replylike/allLikeList.json', {memberNumber: memberNumberJS}, function(result) {
								console.log(result.data.list)
								for (var i = 0 ; i < (result.data.list).length; i++) {
									$(".press .like."+result.data.list[i]+" .fa").removeClass('fa-heart-o').addClass('fa-heart').css({"color":"red"})
								}
							}) 
						})
						$('.detail-right .input-reply').val("")
					}
				});
			}
		})

		/* 3. 모바일 댓글 추가 */
		$('.detail-loca .submit-reply').click(function() {
			if($('.detail-loca .input-reply').val() =="") {
				sweetAlert("댓글 입력 실패", "빈 댓글은 입력할 수 없어요 T^T", "error");
			} else {
				$.ajax({
					type: 'POST',
					url: 'reply/add.json',
					data: {content : $('.detail-loca .input-reply').val(), 'zzalnumber' : zzno}, 
					async: false,
					success: function(data) {
						$.getJSON('reply/list.json', {'zzalnumber': zzno}, function(result) {
							console.log(result)
							let templateFn = Handlebars.compile($('#reply-list-template').text())
							let generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
							$('.reply-list ul').text('') // tbody의 기존 tr 태그들을 지우고
							$('.reply-list ul').html(generatedHTML) // 새 tr 태그들로 설정한다.

							$.getJSON('reply/countreply.json', {'zzalnumber': zzno}, function(result) {
								$('.replycnt span:first-child').html(result.data.countReply);
							})

						})
						$('.detail-loca .input-reply').val("")
					}
				});
			}
		})

		/* 4. 부모 댓글 삭제. delete */
		$(document).on("click", '.reply-unit-con .cancle', function(){
			var that = $(this)

			$.ajax({
				type: 'GET',
				url: 'reply/delete.json',
				data: {rno : $(this).attr('data-rno'), mno: $(this).attr('data-mno'), 'zzalnumber' : zzno}, 
				async: false,
				success: function(data) {
					if (data == 1) {
						$.getJSON('reply/list.json', {'zzalnumber': zzno}, function(result) {
							console.log(result)
							let templateFn = Handlebars.compile($('#reply-list-template').text())
							let generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
							$('.reply-list ul').text('') // tbody의 기존 tr 태그들을 지우고
							$('.reply-list ul').html(generatedHTML) // 새 tr 태그들로 설정한다.

							$.getJSON('reply/countreply.json', {'zzalnumber': zzno}, function(result) {
								$('.replycnt span:first-child').html(result.data.countReply);
							})

							//한회원이 눌른 전체 좋아요 목록 받아오기
							$.getJSON('replylike/allLikeList.json', {memberNumber: memberNumberJS}, function(result) {
								for (var i = 0 ; i < (result.data.list).length; i++) {
									$(".press .like."+result.data.list[i]+" .fa").removeClass('fa-heart-o').addClass('fa-heart').css({"color":"red"})
								}
							}) 
						})


					} else {
						sweetAlert("댓글 삭제 실패", "본인이 작성한 댓글만 삭제할 수 있습니다.", "error");
					}
				}
			})
		}) // 4.

		/* 5.자식 댓글 삭제 */
		$(document).on("click", '.reply-unit-con .cancle .re-reply-delete', function(){
			var that = $(this)

			$.ajax({
				type: 'GET',
				url: 'reply/deletesonreply.json',
				data: {rno : $(this).attr('data-rno'), mno: $(this).attr('data-mno'), 'zzalnumber': zzno}, 
				async: false,
				success: function(data) {
					if (data == 1) {
						that.closest(".reply-li").remove();
						$.getJSON('reply/list.json', {'zzalnumber': zzno}, function(result) {
							console.log(result)
							let templateFn = Handlebars.compile($('#reply-list-template').text())
							let generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
							$('.reply-list ul').text('') // tbody의 기존 tr 태그들을 지우고
							$('.reply-list ul').html(generatedHTML) // 새 tr 태그들로 설정한다.

							$.getJSON('reply/countreply.json', {'zzalnumber': zzno}, function(result) {
								$('.replycnt span:first-child').html(result.data.countReply);
							})

							//한회원이 눌른 전체 좋아요 목록 받아오기
							$.getJSON('replylike/allLikeList.json', {memberNumber: memberNumberJS}, function(result) {
								for (var i = 0 ; i < (result.data.list).length; i++) {
									$(".press .like."+result.data.list[i]+" .fa").removeClass('fa-heart-o').addClass('fa-heart').css({"color":"red"})
								}
							}) 
						})
					} else {
						sweetAlert("댓글 삭제 실패", "본인이 작성한 댓글만 삭제할 수 있습니다.", "error");
					}
				}
			})
		}) // 5 


		/* 6. 대댓글 보이기 숨기기 버튼 */ // 내일은 여기서부터 다루어야 한다. 
		$(document).on("click", '.reply-info .re-reply', function(){
			if(memberNumberJS != null ){
				var that = $(this)
				that.closest(".reply-li").find(".re-reply-inputer").css('display','block')

				$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
					$('.re-reply-inputer .user-phot').css({"background-image": "url(upload/"+result.data.membpic+")"});
				})
			} else {
				sweetAlert("댓글 입력 실패", "로그인 해야 이용할 수 있습니다.", "error");
			}
		}) // 6  


		/* 7. x버튼 클릭시 css 없애기 */
		$(document).on("click", '.cancle-re-reply', function(){
			var that = $(this)
			that.closest(".reply-li").find(".re-reply-inputer").css('display','none')
		}) // 7


		/* 8. 대댓글 insert */
		$(document).on("click", '.submit-re-reply', function() {
			var that = $(this).attr('data-rno')
			var repathat = $(this).attr('data-reparent')
			console.log(repathat)

			if($(this).closest(".inputer").find(".input-re-reply").val() == "") {
				sweetAlert("댓글 입력 실패", "빈 댓글은 입력할 수 없어요 T^T", "error");
			} else {
				$.ajax({
					type: 'GET',
					url: 'reply/rerepadd.json',
					data: {content : $(this).closest(".inputer").find(".input-re-reply").val(), replyNumber : that, 'zzalnumber' : zzno}, 
					async: false,

					success: function(data) {
						$.getJSON('reply/list.json', {'zzalnumber': zzno}, function(result) {
							console.log(result)
							let templateFn = Handlebars.compile($('#reply-list-template').text())
							let generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
							$('.reply-list ul').text('') // tbody의 기존 tr 태그들을 지우고
							$('.reply-list ul').html(generatedHTML) // 새 tr 태그들로 설정한다.

							$.getJSON('reply/countreply.json', {'zzalnumber': zzno}, function(result) {
								$('.replycnt span:first-child').html(result.data.countReply);
							})

							$.getJSON('replylike/allLikeList.json', {memberNumber: memberNumberJS}, function(result) {
								console.log(result.data.list)
								for (var i = 0 ; i < (result.data.list).length; i++) {
									$(".press .like."+result.data.list[i]+" .fa").removeClass('fa-heart-o').addClass('fa-heart').css({"color":"red"})
								}
							}) 
						})
					}
				});
			}
		}); // 8

		/* 9. 댓글 좋아요 누르기 or 빼기 */
		$(document).on("click", '.press .like', function() {
			var that = $(this)
			var replyNumbers = that.closest(".reply-unit-con").find(".cancle").attr('data-rno')
			var reparent = that.attr('data-reparent')
//			console.log('리파렌트', reparent)
//			console.log('멤버넘버', memberNumberJS)
//			console.log('리플라이넘버', replyNumbers)

			$.ajax({
				type: 'POST',
				url: 'replylike/isLike.json',
				data: {'replyNumber' :replyNumbers, 'memberNumber': memberNumberJS}, 
				async: false,
				success: function(data) {
					if (data.status == 'fail') { // 해당댓글을 누른적이 없다면, db에 add를 한다.
						$.ajax({
							type: 'POST',
							url: 'replylike/add.json',
							data: {'replyNumber' :replyNumbers, 'memberNumber': memberNumberJS, 'reparentNumber' : reparent}, 
							async: false,
							success: function(data) {
							}
						})
						$.ajax({ // 누적 좋아요 갯수에 + 1 한다. 
							type: 'POST',
							url: 'reply/replyLikeCountPlus.json',
							data: {'replyNumber' : replyNumbers}, 
							async: false,
							success: function(data) {
//								console.log("replylikecount plus 데이터 보냈습니다.")
							}
						})
						if(memberNumberJS != null ) {
							$.ajax({ // 누적 좋아요 갯수에 + 1 한다. 
								type: 'POST',
								url: 'reply/replyLikeCountPlus.json',
								data: {'replyNumber' : replyNumbers}, 
								async: false,
								success: function(data) {
									console.log("replylikecount plus 데이터 보냈습니다.")
								}
							})
							that.find(".fa").removeClass('fa-heart-o').addClass('fa-heart').css({"color":"red"})
							var value = parseInt(that.find(".replyCount").text(value).text()) + 1
							that.find(".replyCount").text(" " + value)
						} else {
							sweetAlert("좋아요 실패", "로그인 해야 이용할 수 있습니다.", "error");
						}

					} else { // 해당댓글을 좋아요 누른적이 있다면, db에서 delete 시킨다.
						$.ajax({
							type: 'POST',
							url: 'replylike/delete.json',
							data: {'replyNumber' :replyNumbers, 'memberNumber': memberNumberJS}, 
							async: false,
							success: function(data) {
							}
						})

						$.ajax({ // 누적 좋아요 갯수에 -1 한다. 
							type: 'POST',
							url: 'reply/replyLikeCountMinus.json',
							data: {'replyNumber' : replyNumbers}, 
							async: false,
							success: function(data) {
							}
						})

						that.find(".fa").removeClass('fa-heart').addClass('fa-heart-o').css({"color":"#555"})
						var value = parseInt(that.find(".replyCount").text(value).text()) - 1
//						console.log('하나 감소된 값 출력', value)
						that.find(".replyCount").text(" " + value)
					}
				}
			})
		}) // click 좋아요 버튼
	})


})(jQuery);
