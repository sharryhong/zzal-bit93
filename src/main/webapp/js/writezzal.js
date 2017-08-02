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




		function writefuncDone(){
			// console.log(swiper.onSlideChangeEnd(swiper))


				indexNum = parseInt(swiper.realIndex);
				fiFilenames = $('.fi-filenames')
				photoUpLoad = $('.swiper-slide-active .photo-upload-btn')

				// return indexNum;

						$(photoUpLoad).on('click',function(){
							console.log(this,'clickbox')

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
										console.log(imagesDiv,indexNum)
										for (var i = 0; i < data.files.length; i++) {
											try {
												// console.log($(imagesDiv))

													if (data.files[i].preview.toDataURL) {
																$(imagesDiv).html("");


															if(indexNum>0){
																		// console.log(imagesDiv,indexNum)
																		console.log(data.files[i])
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
									console.log(fiFilenames,"done.......")
									// console.log(data.result,'data-result얌');
									var filenames = data.result.data;
									// console.log(filenames,'filenames얌');
									for (var i = 0; i < filenames.length; i++) {
										var val = fiFilenames.val();
										if (val.length > 0) val += ",";

										fiFilenames.val(val + filenames[i]);
									}
								}
						 });
						})

		}

// I'm test God
		$('.test-btn').on('click',function(e){
			clickDone(event)
			console.log(indexNum)
			console.log($('.images-div'))
		})
// I'm test God


var ssl=0;
    $(document).on('click', '.append-slide', function(e) {
    	e.preventDefault();
    	templateFn = Handlebars.compile($('#addpage-template').text())
    	swiper.appendSlide(templateFn())
			var swiperSlideTotNumber = parseInt($('.swiper-slide').length-1)
			var SwiperSlidesSelect = $('.swiper-slide')
			var fifileNam = $('.fi-filenames').attr('value')
			// console.log(ssl)
		  $(SwiperSlidesSelect[swiperSlideTotNumber]).attr('data-no',(swiperSlideTotNumber+1))
			$($('.fi-filenames')[swiperSlideTotNumber]).attr('value', fifileNam)

			console.log('done')
		})


		$(document).on('click', '#add-btn, #temp-save-btn', function() {
			console.log(fiFilenames.val())
			$.post('/zzal-bit93/zzal/add.json', {
				// 'mno': no,
				// 'cno': fiCategory.val(),
				// 'cono': fiCollect.val(),
				// 'title': fiTitle.val(),
				'mno': 1,
				'cno': 2,
				'cono': 2,
				'title': "난 연습용!",
				'filenames': fiFilenames.val()
			}, function(result) {
				console.log(result)
				/* location.href = 'index.html'*/
			}, 'json')
		})
















})(jQuery);
