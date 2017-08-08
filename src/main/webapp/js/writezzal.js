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
			justInit(no)
	  }
	})
var initWrite;



function justInit(no){

	try{
		console.log(no)
		initWrite =window.location.href.split("?")[1]

		console.log(initWrite)
				if(initWrite.split("=")[0]=="zzno"){
					$.ajax({
						url:'/zzal-bit93/write/tmplist.json',
						method:'GET',
						data: {"no":no, "zzno":parseInt(initWrite.split("=")[1])},
						success : function(data){console.log(data,"성공 객체임")

						tmpMaker(data.data.tmplist);
					}

				})
		}
	}catch(e){}
}

/*날라오는 값이 "" ""이러무로 잘라줄 필요 있음
replace를 쓰려고 햇으나 타이틀 및 컨텍스에도 적용 시키려고 함  */
function StringMaker(obj){
	let changer = String(obj)
	return obj = changer.substring(1,changer.length-1)
}


	function tmpMaker(data) {

		let tmpMcoNo = data.zzal.cono
		let tmpMCno = data.zzal.cno
		let tmpMtitl = data.zzal.title
		let tmpMpic = StringMaker(data.zzal.mainPic)

		// .substring(0,1)
		let arrpic=[]
		let arrcontext=[]
		let arrpicname=[]
		let k=0;
		for(let pageroom of data.page){
			arrpicname[k] = StringMaker(pageroom.pagePic)
			arrpic[k] = './upload/'+StringMaker(pageroom.pagePic)
			arrcontext[k] =	StringMaker(pageroom.ConTextZ)
			console.log(pageroom)
			k++
		}

		// console.log(arr2)


	 $("#select-collect > option[value="+tmpMcoNo+"]").attr("selected", true)
	 $("#select-category > option[value="+tmpMCno+"]").attr("selected", true)
	 $(fiTitle).val(StringMaker(tmpMtitl))




		var templatetmpFn = Handlebars.compile($('#tmppage-template').text())



	swiper.appendSlide(templatetmpFn(data))
	let tmpPageSelect = $(".swiper-slide .images-div")

	let tmpstr1 = String('./upload/'+tmpMpic)

	let tmpfiinput = $("input[type=hidden]")


	console.log(tmpfiinput)

	tmpfiinput[0].value=tmpMpic
	// console.log(tmpPageSelect)
	// console.log($(".swiper-slide textarea"))
	console.log(tmpstr1)
  $(tmpPageSelect[0]).css("background-image", 'url("'+tmpstr1+'")')


	for (let i=1; i < tmpPageSelect.length; i++ ){
		$(tmpfiinput[i]).val(arrpicname[i-1])
		$("<img>").attr("src",arrpic[i-1]).appendTo(tmpPageSelect[i])
		$(".swiper-slide textarea")[i-1].value=arrcontext[i-1]
	}

	slideNumberring()


}


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
	} //category,collect list ㅋ



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
		// var writeData


		$(document).on('click', '#add-btn, #temp-save-btn', function() {

			if($(fiCategory).val()==0){
				alert("카테고리를 입력해주세요")
				return
			}
			if(!$(fiTitle).val()){
				alert("제목을 입력해주세요")
				return
			}


			if(initWrite){
				console.log("지금zzno없어요")
				$.ajax({
					url:'/zzal-bit93/write/delete.json',
					method:'POST',
					data:{"no" : no ,"zzno" : parseInt(initWrite.split("=")[1])},
					//data: {"zzal":JSON.stringify(obj), "zzalpage":JSON.stringify(jsonObj)},
					success : function(data){console.log(data,"성공 객체임")},
					dataType: 'json'
				})
			}

			console.log($(this).attr("data-tmppub"))

			dataGarage()
			if($(this).attr("data-tmppub")=="true"){
				console.log("true데스")
				console.log(this)
				pageArray[0].publicType = true;

			}else{
				pageArray[0].publicType = false;
				if(pageArray[1].pagePic==""){
					alert("2페이지에 사진은 꼭꼭!!해주세욤!");
					return
				}
			}
			dataPlant()
			console.log(pageArray[0],"나 zzal")
			console.log(jsonPageArray,"나 zzalpage")
			youJSonSender(pageArray[0],jsonPageArray)
			// location.href="mypage.html"

		})


		function youJSonSender(obj,jsonObj){
			$.ajax({
				url:'/zzal-bit93/write/add.json',
				method:'POST',
				data: {"zzal":JSON.stringify(obj), "zzalpage":JSON.stringify(jsonObj)},
				success : function(data){console.log(data,"성공 객체임")},
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
