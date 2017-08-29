(function($){
	'use strict';

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





		function saveArrayplant(){
			console.log($('input[type=checkbox]').length)
			let arr=[]
			let charr=$('input[type=checkbox]')
			console.log(charr)
			for (var i = 0 ; i < charr.length; i++){
				if(charr[i].checked){ 
					
					arr.push(charr[i].value)
				}
			}
			return arr
			
		}






//		/* 5. 마이페이지에서 관심카테고리를 추가 또는 삭제 후, 최종적으로 서버에 보내는 '선택완료' 버튼 */
		$(document).on("click", '.catg-submitBtn', function() {
			
			let type = $(this).attr('data-type')
			
			console.log(type)
			saveListArray=saveArrayplant()
			
			
			console.log('saveListArray', saveListArray)
			if(saveListArray.length > 0) { // 카테고리 추가
				$.ajax({
					type: 'POST',
					url: 'choicecategory/delete.json',
					data: {
						
						memberNumber : membNo	
					},
					async: false,
					success: function(data) {

						$.ajax({
							type: 'POST',
							url: 'choicecategory/add.json',
							data: {
								categoryNumberArray : saveListArray,
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
										
										if(type=='true'){
											swal({
												title: "변경완료!",
												text: "관심 카테고리를 추가했습니다.",
												type: "success",
												timer: 1000,
												showConfirmButton: false
											}, function(){
												setTimeout(function(){
													location.href="index.html"
												});
											});
											
										}else{

											swal({
												title: "변경완료!",
												text: "관심 카테고리를 추가했습니다.",
												type: "success",
												timer: 1000,
												showConfirmButton: false
											}, function(){
												setTimeout(function(){
													window.location.reload();
												});
											});
										}
										
										
									
									
									}//add success
								})
							}
						})//add ajax	


					}
				})/*.fail(function(){alert('하나라도 골라주세요 T^T')})*/




			} 



			if (saveListArray.length < 1){sweetAlert("변경 실패", "관심카테고리를 하나라도 설정해야 합니다!", "error");}

		}) // 5.서버로 보내는 확인버튼




	}) // 1. 세션 (멤버 넘버 알아내기) + 리스트 가져오기

})(jQuery);
