$('.input-con .input-reply').prop('readonly', true);

/* 1. 전체 댓글 목록 받아오기 (select) */
$(document).on('ready',function(result){
	
	  $.getJSON('reply/list.json', {'zzalnumber': zzno}, function(result) {
			console.log(result)
		  	let templateFn = Handlebars.compile($('#reply-list-template').text())
			let generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
			$('.reply-list ul').text('') // tbody의 기존 tr 태그들을 지우고
			$('.reply-list ul').html(generatedHTML) // 새 tr 태그들로 설정한다.
			
			$.getJSON('reply/countreply.json', {'zzalnumber': zzno}, function(result) {
				if (result.data.countReply == 0) {
					$('.replycnt span:first-child').html('0');
				}
				$('.replycnt span:first-child').html(result.data.countReply);
			})
	  })
}) // 1.


/* 2. 한 짤강의에 대한, 총 댓글 갯수 (count) */
$.getJSON('reply/countreply.json', {'zzalnumber': zzno}, function(result) {
	console.log(result.data.countReply)
	$('.replycnt span:first-child').html(result.data.countReply);
}) //2


/* 3. 댓글 추가 (insert. 좋아요와 신고는 아직 적용못했습니다). */
$('.submit-reply').click(function() {
	$.ajax({
		type: 'POST',
		url: 'reply/add.json',
		data: {content : $('.input-reply').val(), 'zzalnumber' : zzno}, 
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
		}
	});
})


/* 4. 부모 댓글 삭제. delete (짤강no는 고려안함)*/
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
							console.log(result.data.countReply)
							$('.replycnt span:first-child').html(result.data.countReply);
						})
				  })
			} else {
				alert("본인의 댓글만 삭제하실 수 있습니다")
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
							console.log(result.data.countReply)
							$('.replycnt span:first-child').html(result.data.countReply);
						})
				  })
					
			} else {
				alert("본인의 댓글만 삭제하실 수 있습니다")
			}
		}
	})
}) // 5 


/* 6. 대댓글 보이기 숨기기 버튼 */
$(document).on("click", '.reply-info .re-reply', function(){
	var that = $(this)
	console.log(that)
	that.closest(".reply-li").find(".re-reply-inputer").css('display','block')
	
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
        $('.re-reply-inputer .user-phot').css({"background-image": "url(upload/"+result.data.membpic+")"});
	})
}) // 6  


/* 7. x버튼 클릭시 css 없애기 */
$(document).on("click", '.cancle-re-reply', function(){
	var that = $(this)
	that.closest(".reply-li").find(".re-reply-inputer").css('display','none')
}) // 7


/* 8. 대댓글 insert */
$(document).on("click", '.submit-re-reply', function(){
	console.log($(this).closest(".inputer").find(".input-re-reply").val())
	var that = $(this).attr('data-rno')
	var repathat = $(this).attr('data-reparent')
	
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
						console.log(result.data.countReply)
						$('.replycnt span:first-child').html(result.data.countReply);
					})
			  })
		}
	});
	
}); // 8



/*회원정보 세션*/
$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
     if (result.data) {
        $('.reply-inputer .user-name').text(result.data.nick)
        $('.profile-wrap .phot').css({"background-image": "url(upload/"+result.data.membpic+")"});
        $('.reply-inputer .user-phot').css({"background-image": "url(upload/"+result.data.membpic+")"});
        
        $('.input-con .input-reply').prop('readonly', false); //로그인 후 inputtext라인 활성화
        /*$('.down-container .reply-inputer .input-con').css("margin", "10px 5px 10px 5px")*/
     }
   })
