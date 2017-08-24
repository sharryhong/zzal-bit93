// textarea 입력제한
function fnChkByte(obj, maxByte) {
	var $eachPageByte = $(obj).next().find('.byteInfo')
	var str = obj.value;
	var str_len = str.length;

	var rbyte = 0;
	var rlen = 0;
	var one_char = "";
	var str2 = "";

	for(var i=0; i<str_len; i++){
		one_char = str.charAt(i);
		if(escape(one_char).length > 4){
		    rbyte += 2;                                         //한글2Byte
		}else{
		    rbyte++;                                            //영문 등 나머지 1Byte
		}

		if(rbyte <= maxByte){
		    rlen = i+1;                                          //return할 문자열 갯수
		}
	}

	if(rbyte > maxByte){
		swal("글자 수 제한", "한글 "+(maxByte/2)+"자 / 영문 "+maxByte+"자를 초과 입력할 수 없습니다.", "warning")
	    str2 = str.substr(0,rlen);                                  //문자열 자르기
	    obj.value = str2;
	    fnChkByte(obj, maxByte);
	}else{
		$eachPageByte.text(rbyte)
	}
}


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
		  $('.user-info-face .user-name').text(result.data.nick)
		  $('.profile-wrap .phot').css({"background-image": "url(image/"+result.data.membpic+")"});
		  getCollect(no)
			justInit(no)
	  }
	})
	
// writezzal page의 구동 방식을 결정 짓는 메서드
// param에 zzno가 있을 경우  임시 저장에서 온경우
var initWrite;
function justInit(no){

	try{
		initWrite =window.location.href.split("?")[1]

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

let tmpMpic = ''
/*function StringMaker(obj){
	let changer = String(obj)
	return obj = changer.substring(1,changer.length-1)
}*/

	function tmpMaker(data) {

		let tmpMcoNo = data.zzal.cono
		let tmpMCno = data.zzal.cno
		let tmpMtitl = data.zzal.title
//		tmpMpic = StringMaker(data.zzal.mainPic)
		tmpMpic = data.zzal.mainPic

		let arrpic=[]
		let arrcontext=[]
		let arrpicname=[]
		let arrvideo=[]
		let arrType=[]

		let k=0;

		for(let pageroom of data.page){
			console.log(pageroom)
			arrType[k] = pageroom.conTypeZ
			arrpicname[k] = pageroom.pagePic
			arrpic[k] = './upload/'+pageroom.pagePic
			arrcontext[k] =	pageroom.ConTextZ
			k++
		}

	 $("#select-collect > option[value="+tmpMcoNo+"]").attr("selected", true)
	 $("#select-category > option[value="+tmpMCno+"]").attr("selected", true)
	 $(fiTitle).val(tmpMtitl)

		var templatetmpFn = Handlebars.compile($('#tmppage-template').text())

	swiper.appendSlide(templatetmpFn(data))
	let tmpPageSelect = $(".swiper-slide .images-div")

	let tmpstr1 = String('./upload/'+tmpMpic)

	let tmpfiinput = $("input[type=hidden]")

	tmpfiinput[0].value=tmpMpic
    $(tmpPageSelect[0]).css("background-image", 'url('+tmpstr1+')')

	for (let i=1; i < tmpPageSelect.length; i++ ){
//		data.page.conTypeZ
		console.log(data)
		let dataT = (Boolean(data.page[i-1].conTypeZ)==true? 1: 0)
//		$($("input[type=hidden]")[i-1].attr("data-type",bool)
		$(tmpfiinput[i]).val(arrpicname[i-1])
		$(tmpfiinput[i]).attr('data-type',dataT)
		// 이미지 일 때 
		if (arrType[i-1] === "true") {
			$("<img>").attr("src",arrpic[i-1]).appendTo(tmpPageSelect[i])
		} 
		// 동영상 일 때 
		else if (arrType[i-1] === "false" && arrpicname[i-1]) {
			var videoIframe = "<iframe src='https://www.youtube.com/embed/" + arrpicname[i-1] + "' frameborder='0' allowfullscreen></iframe>"
			$(videoIframe).css({'width':670, 'height':370}).appendTo(tmpPageSelect[i])		}
		$(".swiper-slide textarea")[i-1].value=arrcontext[i-1]
	}

	slideNumberring()

}//tmpmaker

	// 핸들바스. main.js에 있는 함수 사용
	// 카테고리 리스트 뿌려주기
	$.getJSON('/zzal-bit93/category/list.json',{"mno":no}, function(result) {
        generateHandlebars(result, $('#select-category-template'), $('#select-category'));
    })

    // 컬렉션 리스트 뿌리기
  function getCollect(no) {
		$.getJSON('/zzal-bit93/collect/alllist.json', {'no': no}, function(result) {
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
			$(buddys[i]).addClass('number-'+i)
		}
}

function writefuncDone(){

				indexNum = parseInt(swiper.realIndex);

				if(indexNum==0){
					$('.delete-btn').hide()
				}else{
					$('.delete-btn').show()
				}

				fiFilenames = $('.fi-filenames')
				photoUpLoad = $('.swiper-slide-active .photo-upload-btn')

				// return indexNum;
				// console.log(photoUpLoad)
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
									previewMaxHeight: 450,  // 미리보기 이미지 높이
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
																								.appendTo($(imagesDiv))
																}else{
																			$(imagesDiv).css("background-image", 'url(' + data.files[i].preview.toDataURL() +')');

																}
														}//if data

												} catch (err) {}
											}
								},
									done: function (e, data) {

											var filenames = data.result.data;
											let isimg = 1;
											dataMaker(curSlideNo,filenames,isimg)

									}
							 });
						})// upload btn

			$(document).on('click',".swiper-slide-active.number-"+indexNum+" .repre-video",function(e){
				let inputNo =$(this).closest(".swiper-slide").attr('data-no')

				wrapWindowByMask()

				$(".url-inputer").css("display","block")
				$("#fi-url-inputer").val("")
				$("<div>").addClass("fake-dvd").appendTo(".write-mask")
				
				$('.input-loca .cancle-btn').on('click',function(){
					$("#fi-url-inputer").val('')
				})
				
				$(".veido-check-btn").on('click',function(){

					let ifstr=[],
						inputUrl=[],
						videoUrl = '',
						isimg = 0;
					
					videoUrl = $("#fi-url-inputer").val()
					console.log('videoUrl', videoUrl)

					if (!videoUrl.includes('youtu')) { // youtube링크가 아니라면 
						swal("youtube 링크를 입력해주세요!", "예) https://www.youtube.com/watch?v=82TD06U4ppA", "error")
						return
					} else if (videoUrl.includes('=')) { // url에 '='가 있다면. 즉 일반 웹 
						inputUrl[0] = videoUrl.split('=')[1]
					} else { // 없다면. 즉, 모바일
						inputUrl[0] = videoUrl.split('/')[3]
					}
					ifstr[0] = "<iframe src='https://www.youtube.com/embed/"+inputUrl[0]+"' frameborder='0' allowfullscreen></iframe>"

					$($('.images-div')[inputNo]).html("");
					$(ifstr[0]).css({'width':670, 'height':370}).appendTo($($('.images-div')[inputNo]))
					dataMaker(inputNo,inputUrl,isimg)
					$(".url-inputer").css("display","none")
					$('.write-mask').fadeOut(1000);
					$('.write-mask').fadeTo("slow",0.8);
					e.preventDefault();
				})
				  
				e.preventDefault();
			})

			$(".cancle-loca").on('click',function(e){
				console.log(this)
				e.preventDefault();
				$(".url-inputer").css("display","none")
				$('.write-mask').fadeOut(1000);
        $('.write-mask').fadeTo("slow",0.8);

			})

}// writefuncDone
function dataMaker(curSlideNo,obj,bool){
	for (var i = 0; i < obj.length; i++) {
		$($("input[type=hidden]")[curSlideNo]).val(obj[i]);
		$($("input[type=hidden]")[curSlideNo]).attr("data-type",bool)
	}
}

function wrapWindowByMask(){
        //화면의 높이와 너비를 구한다.
        let maskHeight = $(document).height();
        let maskWidth = $(window).width();

        //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
        $('.write-mask').css({'width':maskWidth,'height':maskHeight});

        //애니메이션 효과
        $('.write-mask').fadeIn(1000);
        $('.write-mask').fadeTo("slow",0.8);
}

		  $('.delete-btn').on('click',function(e){
				e.preventDefault();
				if(indexNum>1){
					swiper.removeSlide([indexNum])
					slideNumberring()
					setTimeout(deleteSync(),150);
				}else {
					swal("error", "메인과 첫페이지는 삭제가 되지 않습니다.", "error");
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
			
		  window.setTimeout(goNextPage(), 100);

		})//add page
		
		// 페이지 추가 후 추가된 페이지가 보이게 하기 
		function goNextPage() {
			$('.swiper-button-next')[0].click()
		}

		$(document).on('click', '#add-btn, #temp-save-btn', function() {
			let isCorverImage = ($('.writezzal-cover').attr('style'))
			
			if($(fiCategory).val()==0){
				swal("카테고리를 입력해주세요", "", "warning");
				return
			}
			if(!$(fiTitle).val()){
				swal("제목을 입력해주세요", "", "warning");
				return
			}
			if(!isCorverImage) {
				swal("커버 이미지를 입력해주세요", "", "warning");
				return
			}

			if(initWrite){
			
				
				console.log(initWrite,"임시")
				dataGarage()
				if($(this).attr("data-tmppub")=="true"){
//					console.log(this)
					pageArray[0].publicType = true;

				}else{
					pageArray[0].publicType = false;
					/*if(pageArray[1].pagePic==""){
						alert("2페이지에 사진은 꼭꼭!!해주세욤!");
						return
					}*/
				}
				dataPlant()
				
					let tmpdatapachage = function(){
					console.log(pageArray[0])
					$.ajax({
					url:'/zzal-bit93/write/delete.json',
					method:'POST',
					
					data:{"no" : no ,"zzno" : parseInt(initWrite.split("=")[1]),"zzal":JSON.stringify(pageArray[0])},
					success : function(data){console.log(data,"성공 객체임")
						      let obj = false
						      console.log(jsonPageArray,'pageArray')
						      
						      
						      youJSonSender(obj,jsonPageArray)
							
						      
						      
//						      location.href="mypage.html"
					},
										
					
					dataType: 'json'
				    
					
					})//17-08-23 zzalpage는 업뎃 나머지는 딜릿하고 새로 업뎃
				    }
				
				tmpdatapachage();
				
      			
					
				return
			}//if문
			console.log(initWrite,"올려!")
			dataGarage()
			if($(this).attr("data-tmppub")=="true"){
				pageArray[0].publicType = true;

			}else{
				pageArray[0].publicType = false;
				/*if(pageArray[1].pagePic==""){
					alert("2페이지에 사진은 꼭꼭!!해주세욤!");
					return
				}*/
			}
			dataPlant()
			youJSonSender(pageArray[0],jsonPageArray)
			location.href="mypage.html"

		})
		
		$(document).on('click', '#cancle-btn', function() {
			swal({
				  title: "정말 취소하시겠습니까?",
				  text: "임시저장되지 않고 바로 삭제됩니다.",
				  type: "warning",
				  showCancelButton: true,
				  confirmButtonColor: "#DD6B55",
				  confirmButtonText: "삭제",
				  cancelButtonText: "취소",
				  closeOnConfirm: false
				},
				function(){
					location.href="index.html"
				})
		})

		function youJSonSender(obj,jsonObj){
			$.ajax({
				url:'/zzal-bit93/write/add.json',
				method:'POST',
				data: {"zzal":function(){if(obj){return JSON.stringify(obj)}else{return null}},
					"zzalpage":JSON.stringify(jsonObj)}
				,
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
		pageArray[i].type=(($($("input[type=hidden]")[i]).attr("data-type"))==1 ? true : false);
		pageArray[i].pagePic=$($("input[type=hidden]")[i])[0].value
		pageArray[i].conText=$($('textarea')[i-1])[0].value.replace(/\n/g, "<br />");
	}

	return pageArray;
}

})(jQuery);