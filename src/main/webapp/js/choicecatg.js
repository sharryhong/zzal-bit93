(function($){
	'use strict';
	console.log("시험 31")
	var checkCatgNumber = new Array();
	var unCheckCatgNumber = new Array();

	var membNo;
		
	jQuery.ajaxSettings.traditional = true;
	
	/* 1. 회원의 login정보를 불러오는 부분. choicecatg.js의 전체를 감싸고 있습니다.*/
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		  if (result.data) {
		  	membNo = result.data.no
		  	console.log(membNo)
		  }
	
		  
		/* 2. 회원이 기존에 저장한 카테고리를 불러오는 부분입니다. */
			  $.getJSON('choicecategory/list.json', {'memberNumber': membNo}, function(result) {
				  console.log(result.data.list)
				 for (var i = 0 ; i < (result.data.list).length; i++)
				 $("input:checkbox[value ="+result.data.list[i]+"]").prop("checked", true);
			  }) // 2
		
		
		/* 3. 카테고리 목록 중 체크 또는 체크 되지 않은 카테고리를 배열에 담습니다.*/
		$(document).on("click", '.click-checkbox', function() {
			if($(this).prop('checked') == true) {
				checkCatgNumber.push($(this).val())
				unCheckCatgNumber.pop($(this).val())
			} else {
				checkCatgNumber.pop($(this).val())
				unCheckCatgNumber.push($(this).val())
			}
			console.log(checkCatgNumber)
			console.log('unCheckCatgNumber', unCheckCatgNumber)
		}) // 3. 
		  
		
		/* 4. 관심카테고리를 추가 또는 삭제후, 최종적으로 서버에 보내느 '선택완료' 버튼 */
			$(document).on("click", '#all-category-title .choice-btn', function() {
				$.ajax({
					type: 'POST',
					url: 'choicecategory/add.json',
					data: {
						categoryNumberArray : checkCatgNumber,
						memberNumber : membNo	
					},
					async: false,
					success: function(data) {
						console.log('입력완료')
					}
				})
				
				$.ajax({
					type: 'POST',
					url: 'choicecategory/delete.json',
					data: {
						unCategoryNumberArray :unCheckCatgNumber,
						memberNumber : membNo	
					},
					async: false,
					success: function(data) {
						console.log('삭제완료')
					}
				})
			}) // 4.서버로 보내는 확인버튼
	}) // 1. 세션 (멤버 넘버 알아내기) + 리스트 가져오기

})(jQuery);
