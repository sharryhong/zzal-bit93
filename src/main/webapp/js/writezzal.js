(function($){
	'use strict';
	var fiFilenames = $('#fi-filenames')
	
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
	  if (result.data) {
		  $('.user-name').text(result.data.nick)
		  $('.profile-wrap .phot').css({"background-image": "url(image/"+result.data.membpic+")"});
	  }
	})
	
	/*$('#fi-photoupload').fileupload({
	    url: '/zzal-bit93/zzal/upload.json',
	    dataType: 'json',
	    done: function (e, data) { 
	      console.log('done()...');
	      console.log(data.result); // 서버가 보낸 JSON 객체는 data.result 에 보관되어 있다.
	      console.log(data.result.data);
	      var filenames = data.result.data;
	      for (var i = 0; i < filenames.length; i++) {
	        var val = fiFilenames.val();
	        if (val.length > 0) val += ",";
	        fiFilenames.val(val + filenames[i]);
	      }
	    }
	});*/
	
	$('#add-btn').click(function() {
	    $.post('/zzal-bit93/zzal/add.json', {
	      'filenames': fiFilenames.val()
	    }, function(result) {
	    	console.log(result)
	     /* location.href = 'index.html'*/
	    }, 'json')
	  })
	  
	  $('#fi-photoupload').fileupload({
		    url: '/zzal-bit93/zzal/upload.json',
		    dataType: 'json',
		    sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
		    singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.  
		    done: function (e, data) { 
		      console.log('done()...');
		      console.log(data.result); // 서버가 보낸 JSON 객체는 data.result 에 보관되어 있다.
		      var filenames = data.result.data;
		      
		      for (var i = 0; i < filenames.length; i++) {
		        var val = fiFilenames.val();
		        if (val.length > 0) val += ",";
		        fiFilenames.val(val + filenames[i]);
		      }
		    }
		});

	/*$('#fileupload').fileupload({
	  url: '/zzal-bit93/zzal/upload.json',        // 서버에 요청할 URL
	  dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
	  sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
	  singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
	  autoUpload: false,        // 파일을 추가할 때 자동 업로딩 하지 않도록 설정.
	  disableImageResize: /Android(?!.*Chrome)|Opera/
	        .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
	  previewMaxWidth: 100,   // 미리보기 이미지 너비
	  previewMaxHeight: 100,  // 미리보기 이미지 높이 
	  previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
	  processalways: function(e, data) {
	      console.log('fileuploadprocessalways()...요기얌');
	      console.log(data.files);
	      var imagesDiv = $('#images-div');
	      imagesDiv.html("");
	      for (var i = 0; i < data.files.length; i++) {
	        try {
	          if (data.files[i].preview.toDataURL) {
	            $("<img>").attr('src', data.files[i].preview.toDataURL()).css('width', '100px').appendTo(imagesDiv);
	          }
	        } catch (err) {}
	      }
	      $('#upload-btn').unbind("click");
	      $('#upload-btn').click(function() {
	          data.submit();
	      });
	  }, 
	  submit: function (e, data) { // 서버에 전송하기 직전에 호출된다.
	    console.log('submit()...');
	  console.log(data)
	     data.formData = {
	        name: $('#name').val(),
	        age: $('#age').val()
	    };
	  }, 
	  done: function (e, d) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
	    console.log('done()...');
	    console.log(d);
	    data.result 
	  {여부:success,data{}} 
	  var imlibsData = d.result;
	    console.log(imlibsData.data.fileList);
	    var file = imlibsData.data.fileList[0];
	    $.each(d.result.data.fileList, function(index, file) {
	      $('<p/>').text(file.filename + " : " + file.filesize).appendTo(document.body);
	    });
	  }
	});*/
})(jQuery);
