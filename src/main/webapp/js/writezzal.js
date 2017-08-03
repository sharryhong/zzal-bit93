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
	$.getJSON('/zzal-bit93/category/list.json', function(result) {
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

// I'm test God
		$('.test-btn').on('click',function(e){
			dataPlant()
			dataGarage()
			console.log(pageArray)
		})
// I'm test God


var ssl=0;
    $(document).on('click', '.append-slide', function(e) {
    	e.preventDefault();
    	templateFn = Handlebars.compile($('#addpage-template').text())
    	swiper.appendSlide(templateFn())
			let swiperSlideTotNumber = parseInt($('.swiper-slide').length-1)
			let SwiperSlidesSelect = $('.swiper-slide')
			//let fifileNam = $('.fi-filenames').attr('value')
			// console.log(ssl)
		  slideNumberring()
			//$($('.fi-filenames')[swiperSlideTotNumber]).attr('value', fifileNam)

			console.log('done')
		})//add page


		//
		var writeData


		$(document).on('click', '#add-btn, #temp-save-btn', function() {
			dataGarage()
			dataPlant()
			// dataPlant()
			// writeData = {maindata:
			// 										{"mno" : pageArray[0].mno=1,
			// 											"catgNo" : pageArray[0].cno,
			// 											"cno" : pageArray[0].cno,
			// 											"title" : pageArray[0].title,
			// 												"mpic" : pageArray[0].mainPic
			// 										},
			// 						mainPdata :jsonPageArray
			// 					 }
			//
			// let zzals = pageArray[0]
			// let zzals =
			console.log(pageArray[0])
			console.log(jsonPageArray)
			$.ajax({
				url:'/zzal-bit93/zzal/add.json',
				method:'POST',
				data: {"zzal":JSON.stringify(pageArray[0]),"zzalpage":JSON.stringify(jsonPageArray)},
				success : function(data){console.log('success')},
				// 'mno': no,
				// 'cno': fiCategory.val(),
				// 'cono': fiCollect.val(),
				// // 'title': fiTitle.val(),
				// 'mno': 1,
				// 'cno': 2,
				// 'cono': 2,
				// 'title': "난 연습용!",
				// 'filenames': fiFilenames.val()
			  dataType: 'json'})
		})

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
