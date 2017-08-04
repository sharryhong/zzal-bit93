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
																	this.mno=1,
																	this.cono,
																	this.cno = 1,
																	this.title,
																	this.mainPic
																}

var pageCon = function(){
																	this.zzno=1,
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
									url: '/zzal-bit93/zzal/upload.json',
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
					dataPlant()
					dataGarage()
					console.log($('.swiper-slide'))
				}else {
					alert("메인과 첫페이지는 삭제 불가임! 희희!")
				}
			})



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
			dataGarage()
			dataPlant()

			console.log(pageArray[0])
			console.log(jsonPageArray)
			$.ajax({
				url:'/zzal-bit93/zzal/add.json',
				method:'POST',
				data: {"zzal":JSON.stringify(pageArray[0]),"zzalpage":JSON.stringify(jsonPageArray)},
				success : function(data){console.log(data)},
			  dataType: 'json'})
		})

/*json 생성 array 만드는 곳*/
var jsonPageArray =[];


function dataPlant(){
	for(let i=1; i < pageArray.length; i++){
    jsonPageArray[i-1]  = pageArray[i]
	}
	return jsonPageArray;
}




function dataGarage(){

	pageArray.length = $('.swiper-slide').length

	pageArray[0] = new zzalCon();
	pageArray[0].mno=1
	pageArray[0].cono =1
	pageArray[0].cno = parseInt($(fiCategory).val())
	pageArray[0].title = $(fiTitle).val()
	pageArray[0].mainPic =$($("input[type=hidden]")[0])[0].value


	for(let i =1; i < pageArray.length; i++){
		pageArray[i]=new pageCon()
		pageArray[i].zzno=1
		pageArray[i].pageNo=i
		pageArray[i].type='image'
		pageArray[i].pagePic=$($("input[type=hidden]")[i])[0].value
		pageArray[i].conText=$($('textarea')[i-1])[0].value
	}

	return pageArray;
}






})(jQuery);
