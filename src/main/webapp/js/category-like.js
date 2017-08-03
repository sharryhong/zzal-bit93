$(document).ready(function(){ 
	// like순 짤강의 리스트뿌리기
	let pageNo = 1,
		pageSize = 6,
		zzal,
		totalCount,
		lastPageNo
	var checkLast = true
	var newEl = ''
	zzalListLike(pageNo, pageSize)
	function zzalListLike(pageNo, pageSize) {
		console.log(pageNo)
		$.getJSON('zzal/zzalListWithCount.json',{'pageNo': pageNo, 'pageSize': pageSize}, function(result) {
			zzal = result.data.zzalList
			totalCount = result.data.totalCount
			lastPageNo = parseInt(totalCount / pageSize) + (totalCount % pageSize > 0 ? 1 : 0)
			console.log('pageNo', pageNo)
			console.log('totalCount', totalCount)
			console.log('lastPageNo', lastPageNo)
			console.log('length', result.data.zzalList.length)
			
			/*for (let i = 0; i < result.data.zzalList.length; i++) {
				newEl += [
					'<li>'+
					  '<a href="#" class="zzal-lect">'+
					    '<div class="zzal">'+
					      '<div class="zzal-img">'+
					        '<img src="upload/'+zzal[i].mainPic+'">'+
					      '</div>'+
					    '</div>'+
					    '<div class="bottom">'+
					      '<span class="ranking">'+ (parseInt((pageNo-1)*pageSize)+(i+1)) +'</span>'+
					      '<h3 class="title">'+zzal[i].title+'</h3>'+
					    '</div>'+
					  '</a>'+
					'</li>'
				].join('')
			}
			$target.append(newEl)*/
			
			/*var templateFn = Handlebars.compile($('#like-template').text())
		    var generatedHTML = templateFn(result.data) 
		    $target.append(generatedHTML) */
			generateHandlebars(result, $('#like-template'), $('#zzal-like-list'))
		    
		    if (pageNo < lastPageNo) { // 마지막 이후에는 무한스크롤 실행되지 않게 하기 
		       checkLast = true
		    }
		})
	}
	
	/*무한 스크롤*/
	$(document).scroll(function() {
	    if (checkLast == true && ($(window).scrollTop() + 10) >= $(document).height() - $(window).height()) {
	      checkLast = false
	      ++pageNo
	      zzalListLike(pageNo, pageSize)
	    }
	});
	
});

