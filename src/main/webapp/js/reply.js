$('.input-con .input-reply').prop('readonly', true);

/* 전체 댓글 select 목록 받아오기*/

$(document).on('ready',function(result){
	$.getJSON('reply/list.json', function(result) {
		console.log(result.data)
		let templateFn = Handlebars.compile($('#reply-list-template').text())
		let generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
		$('.reply-list ul').text('') // tbody의 기존 tr 태그들을 지우고
		$('.reply-list ul').html(generatedHTML) // 새 tr 태그들로 설정한다.
	})
})


/*한 짤강의에 대한, 총 댓글 갯수*/
$.getJSON('reply/countreply.json', function(result) {
	console.log(result.data.countReply)
	$('.replycnt span:first-child').html(result.data.countReply);
})

/* 댓글 insert. 좋아요와 신고는 아직 적용못함.*/
$('.submit-reply').click(function() {
	
	$.ajax({
		type: 'POST',
		url: 'reply/add.json',
		data: {content : $('.input-reply').val(), zzalnumber : "200"}, 
		async: false,
		success: function(data) {
			$.getJSON('reply/list.json',function(result){
				let templateFn = Handlebars.compile($('	#reply-insert-template').text())
				let generatedHTML = templateFn(result.data.list[0]) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
				$('.reply-list ul').prepend(generatedHTML) // 새 tr 태그들로 설정한다.
			})
		}
	});
	
	$.getJSON('reply/countreply.json', function(result) {
		$('.replycnt span:first-child').html(result.data.countReply);
	})
})

/* 댓글 delete (짤강no는 고려안함)*/
$(document).on("click", '.reply-unit-con .cancle', function(){
	var that = $(this)
	console.log(that)
	console.log("112")
	
	$.ajax({
		type: 'GET',
		url: 'reply/delete.json',
		data: {rno : $(this).attr('data-rno'), mno: $(this).attr('data-mno')}, 
		async: false,
		success: function(data) {
			if (data == 1) {
				that.closest(".reply-li").remove();
			} else {
				alert("본인의 댓글만 삭제하실 수 있습니다")
			}
		}
	})
})



/* 대댓글.*/
$(document).on("click", '.reply-info .re-reply', function(){
		console.log("11444")
	var that = $(this)
	console.log(that)
	that.closest(".reply-li").find(".re-reply-inputer").css('display','block')
//	$('.re-reply-inputer').css('display','block')
	
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
        $('.re-reply-inputer .user-phot').css({"background-image": "url(image/"+result.data.membpic+")"});
	})
})

$(document).on("click", '.cancle-re-reply', function(){
//		console.log("11444")
	var that = $(this)
//	console.log(that)
	that.closest(".reply-li").find(".re-reply-inputer").css('display','none')
//	$('.re-reply-inputer').css('display','block')
	
//	$.getJSON('/zzal-bit93-backup-29saturday/auth/userinfo.json', function(result) {
////        $('.re-reply-inputer .user-phot').css({"background-image": "url(image/"+result.data.membpic+")"});
//	})
})







/*회원정보 세션*/
$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
     if (result.data) {
        $('.user-name').text(result.data.nick)
        $('.profile-wrap .phot').css({"background-image": "url(image/"+result.data.membpic+")"});
        $('.reply-inputer .user-phot').css({"background-image": "url(image/"+result.data.membpic+")"});
        
        $('.input-con .input-reply').prop('readonly', false); //로그인 후 inputtext라인 활성화
        $('.down-container .reply-inputer .input-con').css("margin", "10px 5px 10px 5px")
     }
   })
