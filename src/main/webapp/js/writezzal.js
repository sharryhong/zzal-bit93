(function($){
	'use strict';
	var fiFilenames,
	    fiTitle = $('#fi-title'),
	    fiCollect = $('#select-collect'),
	    fiCategory = $('#select-category')

	var no;
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
	  if (result.data) {
		  no = result.data.no
		  console.log(no)
		  $('.user-info-face .user-name').text(result.data.nick)
		  $('.profile-wrap .phot').css({"background-image": "url(image/"+result.data.membpic+")"});
		  getCollect(no)
	  }
	})

	// 핸들바스. main.js에 있는 함수 사용
	// 카테고리 리스트 뿌려주기
	$.getJSON('/zzal-bit93/category/list.json',{"mno":no}, function(result) {
        generateHandlebars(result, $('#select-category-template'), $('#select-category'));
    })

    // 컬렉션 리스트 뿌리기
    function getCollect(no) {
		$.getJSON('/zzal-bit93/collect/list.json', {'no': no}, function(result) {
			if (result.data) {
				generateHandlebars(result, $('#select-collect-template'), $('#select-collect'));
			}
		})
	}
	window.onload = swiper;

	var swiper = new Swiper('.swiper-container', {
		nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			pagination: '.swiper-pagination',
			paginationType: 'fraction',
			paginationClickable: true,
			onSlideChangeEnd: function(swiper){
				writefuncDone();
			}
	});


writefuncDone();

var indexNum=swiper.realIndex,
    imagesDiv,
		photoUpLoad;

var zzalCon = function(){
																	this.mno,
																	this.cono,
																	this.cno,
																	this.title,
																	this.mainPic,
																	this.publicType

																}

var pageCon = function(){

																	this.pageNo,
																	this.type,
																	this.pagePic,
																	this.conText

																}
var pageArray = [];


slideNumberring()

function slideNumberring(){
		let buddys = $('.swiper-slide')
		for (let i = 0; i < buddys.length; i++ ){
			$(buddys[i]).attr('data-no',i)
		}
}

function writefuncDone(){

			// console.log(swiper.onSlideChangeEnd(swiper))

				indexNum = parseInt(swiper.realIndex);

				if(indexNum==0){
					$('.delete-btn').hide()
				}else{
					$('.delete-btn').show()
				}

				fiFilenames = $('.fi-filenames')
				photoUpLoad = $('.swiper-slide-active .photo-upload-btn')

				// return indexNum;

						$(photoUpLoad).on('click',function(){

							let curslide = $(this).closest(".swiper-slide")
							let curSlideNo = $(this).closest(".swiper-slide").attr('data-no')



								$(this).fileupload({
									url: '/zzal-bit93/write/upload.json',
									dataType: 'json',
									imageMaxWidth: 670,
									disableImageResize: /Android(?!.)|Opera/
											.test(window.navigator && navigator.userAgent),
									previewMaxWidth: 670,   // 미리보기 이미지 너비
									previewMaxHeight: 720,  // 미리보기 이미지 높이
									previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
									processalways: function(e, data) {


											writefuncDone();
											imagesDiv = $('.images-div')[indexNum];

											for (var i = 0; i < data.files.length; i++) {
												try {


														if (data.files[i].preview.toDataURL) {
																	$(imagesDiv).html("");
																if(indexNum>0){

																			$('<img>').attr('src',data.files[i].preview.toDataURL())
																								.css({"max-width" : '670',
																											"max-height" :"720"})
																								.appendTo($(imagesDiv))
																}else{
																			$(imagesDiv).css("background-image", 'url(' + data.files[i].preview.toDataURL() +')');


																}
														}//if data

												} catch (err) {}
											}
								},
									done: function (e, data) {
										console.log('done()...');

											var filenames = data.result.data;
											for (var i = 0; i < filenames.length; i++) {
												$($("input[type=hidden]")[curSlideNo]).val(filenames[i]);

											}

									}
							 });
						})

		}//




		  $('.delete-btn').on('click',function(e){
				e.preventDefault();
				// console.log($("div[data-no="+indexNum+"]"))
				// $("div[data-no="+indexNum+"]").remove()
				console.log('is event nested?')
				if(indexNum>1){
					swiper.removeSlide([indexNum])
					slideNumberring()
					setTimeout(deleteSync(),150);

					// youSonOfBitch(pageArray[0],jsonPageArray)
					console.log($('.swiper-slide'))
				}else {
					alert("메인과 첫페이지는 삭제 불가임! 희희!")
				}
			})
function deleteSync(){
	dataGarage()
	// dataPlant()
	// 	$.ajax({
	// 		url:'/zzal-bit93/write/delete.json',
	// 		method:'POST',
	// 		data: {"zzno":indexNum},
	// 		success : function(data){console.log(data)},
	// 	  dataType: 'json'})
	//  //delete

}


var ssl=0;
    $(document).on('click', '.append-slide', function(e) {
    	e.preventDefault();
    	templateFn = Handlebars.compile($('#addpage-template').text())
    	swiper.appendSlide(templateFn())
			let swiperSlideTotNumber = parseInt($('.swiper-slide').length-1)
			let SwiperSlidesSelect = $('.swiper-slide')
		  slideNumberring()

			console.log('done')
		})//add page


		//
		var writeData


		$(document).on('click', '#add-btn, #temp-save-btn', function() {
			console.log($(this).attr("data-tmppub"))
			dataGarage()

			if($(this).attr("data-tmppub")=="true"){
				console.log("true데스")
				console.log(this)
				pageArray[0].publicType = true;
			}else{
				pageArray[0].publicType = false;
			}
			dataPlant()
			console.log(pageArray[0],"나 zzal")
			console.log(jsonPageArray,"나 zzalpage")
			youJSonSender(pageArray[0],jsonPageArray)

		})


		function youJSonSender(obj,jsonObj){
			$.ajax({
				url:'/zzal-bit93/write/add.json',
				method:'POST',
				data: {"zzal":JSON.stringify(obj), "zzalpage":JSON.stringify(jsonObj)},
				success : function(data){console.log(data)},
				dataType: 'json'
			})
		}





/*json 생성 array 만드는 곳*/
var jsonPageArray =[];


function dataPlant(){
	jsonPageArray = [];
	console.log(jsonPageArray)
	for(let i=1; i < pageArray.length; i++){
    jsonPageArray[i-1]  = pageArray[i]
	}
	return jsonPageArray;
}




function dataGarage(){
	pageArray=[];
	console.log(pageArray,'들어갉때')

	pageArray.length=$('.swiper-slide').length

	pageArray[0] = new zzalCon();
	pageArray[0].mno=no
	pageArray[0].cono =parseInt($(fiCollect).val())
	pageArray[0].cno = parseInt($(fiCategory).val())
	pageArray[0].title = $(fiTitle).val()
	pageArray[0].mainPic =$($("input[type=hidden]")[0])[0].value
	pageArray[0].publicType;

	for(let i =1; i < pageArray.length; i++){
		pageArray[i]=new pageCon()

		pageArray[i].pageNo=i
		pageArray[i].type='img'
		pageArray[i].pagePic=$($("input[type=hidden]")[i])[0].value
		pageArray[i].conText=$($('textarea')[i-1])[0].value
	}

	console.log(pageArray,'나올때')
	return pageArray;
}






})(jQuery);
