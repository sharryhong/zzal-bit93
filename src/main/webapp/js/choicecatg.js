(function($){
	'use strict';
	console.log("시험 36")
	var checkCatgNumber = new Array();
	var unCheckCatgNumber = new Array();
	var membNo;
	var saveListArray = new Array();// 서버에 보내기전 전체 배열의 크기 	
	
	jQuery.ajaxSettings.traditional = true;
	
	/* 1. 회원의 login정보를 불러오는 부분. choicecatg.js의 전체를 감싸고 있습니다.*/
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		  if (result.data) {
		  	membNo = result.data.no
		  	console.log(membNo)
		  }
	
		  
		/* 2. 회원이 기존에 저장한 카테고리를 불러오는 부분입니다. */
			  $.getJSON('choicecategory/list.json', {'memberNumber': membNo}, function(result) {
				  saveListArray = result.data.list
				  console.log('saveListArray', saveListArray)
				 for (var i = 0 ; i < (result.data.list).length; i++)
				 $("input:checkbox[value ="+result.data.list[i]+"]").prop("checked", true);
			  }) // 2
		
		
		/* 3. 카테고리 목록 중 체크 또는 체크 되지 않은 카테고리를 배열에 담습니다.*/
		$(document).on("click", '.click-checkbox', function() {
			if($(this).prop('checked') == true) {
				checkCatgNumber.push($(this).val())
				unCheckCatgNumber.pop($(this).val())
				saveListArray.push($(this).val())
			} else {
				checkCatgNumber.pop($(this).val())
				unCheckCatgNumber.push($(this).val())
				saveListArray.pop($(this).val())
			}
			console.log('checkCatgNumber', checkCatgNumber)
			console.log('unCheckCatgNumber', unCheckCatgNumber)
			console.log('saveListArray', saveListArray)
		}) // 3. 
		
		/* 4. 관심카테고리를 추가 또는 삭제 후, 최종적으로 서버에 보내는 '선택완료' 버튼 */
			$(document).on("click", '.catg-submitBtn', function() {
				/*console.log('checkCatgNumber', checkCatgNumber)
				console.log('saveListArray', saveListArray)*/
//				checkCatgNumber = saveListArray
				
				if(checkCatgNumber.length > 0 || saveListArray.length > 0) {
					$.ajax({
						type: 'POST',
						url: 'choicecategory/add.json',
						data: {
							categoryNumberArray : checkCatgNumber,
							memberNumber : membNo	
						},
						async: false,
						success: function(data) {
							$.ajax({
								type: 'POST',
								url: 'member/updatecatgauth.json',
								data: {
									auth : true,
									no : membNo
								},
								async: false,
								success: function(data) {
									alert('변경완료')
								}
							})						
						}
						
					}).fail(function(){alert('하나라도 골라주세요 T^T')})
				} 
				
				if (unCheckCatgNumber.length > 0  && saveListArray.length > 0) {
					$.ajax({
						type: 'POST',
						url: 'choicecategory/delete.json',
						data: {
							unCategoryNumberArray :unCheckCatgNumber,
							memberNumber : membNo	
						},
						async: false,
						success: function(data) {
							alert('변경완료')

						}
					})
				} /*else {
					alert('unCheckCatgNumber none T^T')
				}*/
			}) // 4.서버로 보내는 확인버튼
	}) // 1. 세션 (멤버 넘버 알아내기) + 리스트 가져오기

})(jQuery);
