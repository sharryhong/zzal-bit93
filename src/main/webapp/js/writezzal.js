(function($){
	'use strict';
	var fiFilenames = $('#fi-filenames'),
	    fiTitle = $('#fi-title'),
	    fiCollect = $('#select-collect'),
	    fiCategory = $('#select-category')
	
	var no	
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
	
	$('#add-btn').click(function() {
		photoUpload()
		console.log(fiFilenames.val())
		
	});

	function photoUpload() {
		$('#fi-photoupload').fileupload({
		    url: '/zzal-bit93/zzal/upload.json',
		    dataType: 'json',
		    /*autoUpload: false,*/
		    imageMaxWidth: 1000,
		    disableImageResize: /Android(?!.)|Opera/
		        .test(window.navigator && navigator.userAgent),
			previewMaxWidth: 670,   // 미리보기 이미지 너비
			previewMaxHeight: 500,  // 미리보기 이미지 높이 
			previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
			processalways: function(e, data) {
			      var imagesDiv = $('#images-div');
			      imagesDiv.html("");
			      for (var i = 0; i < data.files.length; i++) {
			        try {
			          if (data.files[i].preview.toDataURL) {
			        	  imagesDiv.css("background-image", 'url(' + data.files[i].preview.toDataURL() +')');
			          }
			        } catch (err) {}
			      }
			},
		    done: function (e, data) { 
		      console.log('done()...');
		      console.log(data.result); 
		      var filenames = data.result.data;
		      
		      for (var i = 0; i < filenames.length; i++) {
		        var val = fiFilenames.val();
		        if (val.length > 0) val += ",";
		        fiFilenames.val(val + filenames[i]);
		      }
		      
		      addZzal(fiFilenames);
		    }
		});
	}
	
    function addZzal(fiFilenames) {
    	$.post('/zzal-bit93/zzal/add.json', {
			'mno': no,
			'cno': fiCategory.val(),
			'cono': fiCollect.val(),
			'title': fiTitle.val(),
			'filenames': fiFilenames.val()
		}, function(result) {
			console.log(result)
			/* location.href = 'index.html'*/
		}, 'json')
    }

})(jQuery);
