(function($){
	'use strict';
	var checkCatgNumber = new Array();
	var unCheckCatgNumber = new Array();
	var membNo;
	var saveListArray = new Array();// 서버에 보내기전 전체 배열의 크기 	

	jQuery.ajaxSettings.traditional = true;

	/* 1. 회원의 login정보를 불러오는 부분. choicecatg.js의 전체를 감싸고 있습니다.*/
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		if (result.data) {
			membNo = result.data.no
		}


		/* 2. 회원이 기존에 저장한 카테고리를 불러오는 부분입니다. */
		$.getJSON('choicecategory/list.json', {'memberNumber': membNo}, function(result) {
			saveListArray = result.data.list
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

		/* 4. 로그인시 관심카테고리를 추가 또는 삭제 후, 최종적으로 서버에 보내는 '선택완료' 버튼 */
		$(document).on("click", '.choicecategory-page .catg-submitBtn', function() {
			console.log('checkCatgNumber', checkCatgNumber)
			console.log('unCheckCatgNumber', unCheckCatgNumber)
			console.log('saveListArray', saveListArray)

			if(checkCatgNumber.length > 0 || saveListArray.length > 0) { // 카테고리 추가
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
								swal({
									title: "변경완료",
									text: "관심 카테고리를 추가했습니다.",
									type: "success",
									showCancelButton: false,
									closeOnConfirm: false,
//									showLoaderOnConfirm: true,
								},
								function(){
									setTimeout(function(){
										location.href="index.html"
									});
								});
							}
						})
					}
				})
			} 

			if (unCheckCatgNumber.length > 0  && saveListArray.length > 0) { //카테고리 삭제
				$.ajax({
					type: 'POST',
					url: 'choicecategory/delete.json',
					data: {
						unCategoryNumberArray :unCheckCatgNumber,
						memberNumber : membNo	
					},
					async: false,
					success: function(data) {
						swal({
							title: "변경완료",
							text: "관심 카테고리를 변경했습니다.",
							type: "success",
							showCancelButton: false,
							closeOnConfirm: false,
//							showLoaderOnConfirm: true,
						},
						function(){
							setTimeout(function(){
								location.href="index.html"
							});
						});
					}
				})/*.fail(function(){alert('하나라도 골라주세요 T^T')})*/
			} 

			if (saveListArray.length < 1){sweetAlert("변경 실패", "관심카테고리를 하나라도 설정해야 합니다!", "error");}
		}) // 4.서버로 보내는 확인버튼




		/* 5. 마이페이지에서 관심카테고리를 추가 또는 삭제 후, 최종적으로 서버에 보내는 '선택완료' 버튼 */
		$(document).on("click", '.mypage_bottom .catg-submitBtn', function() {
			console.log('checkCatgNumber', checkCatgNumber)
			console.log('unCheckCatgNumber', unCheckCatgNumber)
			console.log('saveListArray', saveListArray)

			if(checkCatgNumber.length > 0 || saveListArray.length > 0) { // 카테고리 추가
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
								swal({
									title: "변경완료",
									text: "관심 카테고리를 추가했습니다.",
									type: "success",
									showCancelButton: false,
									closeOnConfirm: false,
//									showLoaderOnConfirm: true,
								},
								function(){
									setTimeout(function(){
										window.location.reload();
									});
								});
							}
						})
					}
				})
			} 

			if (unCheckCatgNumber.length > 0  && saveListArray.length > 0) { //카테고리 삭제
				$.ajax({
					type: 'POST',
					url: 'choicecategory/delete.json',
					data: {
						unCategoryNumberArray :unCheckCatgNumber,
						memberNumber : membNo	
					},
					async: false,
					success: function(data) {
						swal({
							title: "변경완료",
							text: "관심 카테고리를 변경했습니다.",
							type: "success",
							showCancelButton: false,
							closeOnConfirm: false,
//							showLoaderOnConfirm: true,
						},
						function(){
							setTimeout(function(){
								window.location.reload();
							});
						});
					}
				})/*.fail(function(){alert('하나라도 골라주세요 T^T')})*/
			} 

			if (saveListArray.length < 1){sweetAlert("변경 실패", "관심카테고리를 하나라도 설정해야 합니다!", "error");}

		}) // 5.서버로 보내는 확인버튼




	}) // 1. 세션 (멤버 넘버 알아내기) + 리스트 가져오기

})(jQuery);
