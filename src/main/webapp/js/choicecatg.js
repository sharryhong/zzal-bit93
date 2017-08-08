(function($){
	'use strict';
	console.log("시험 31")
	var checkCatgNumber = new Array();
	var unCheckCatgNumber = new Array();

	var membNo;
		
	jQuery.ajaxSettings.traditional = true;
	
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		  if (result.data) {
		  	membNo = result.data.no
		  	console.log(membNo)
		  }
	
		/* favor_category checked list*/
			  $.getJSON('choicecategory/list.json', {'memberNumber': membNo}, function(result) {
				  console.log(result.data.list)
//				  checkCatgNumber = result.data.list
				 for (var i = 0 ; i < (result.data.list).length; i++)
				 $("input:checkbox[value ="+result.data.list[i]+"]").prop("checked", true);
//				  checkCatgNumber.push("'"+result.data.list+"'")
//				  console.log(checkCatgNumber)	
			  })
		
		
		/*카테고리 insert, delete*/
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
		})
		  
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
			
			}) // 서버로 보내는 확인버튼
	}) // 세션 (멤버 넘버 알아내기) + 리스트 가져오기

})(jQuery);
