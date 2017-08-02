$(document).ready(function(){ 
	// index.html 짤강의 리스트뿌리기
	$.getJSON('zzal/zzalListWithCount.json', function(result) {
		console.log(result)
		generateHandlebars(result, $('#main-template'), $('#zzal-list'));
	})
	
	$.getJSON('zzal/zzalBestList.json', function(result) {
		console.log(result.data)
		generateHandlebars(result, $('#main-slide-template'), $('#main-slide'));
		
		var zzal = result.data.zzalList
		var $target = $('#best-week-zzal')
		var newEl = ''
		for (let i = 0; i < result.data.zzalList.length; i++) {
			newEl += [
				'<li data-zzno="'+zzal[i].zzno+'"><a href="#"><span class="ranking">'+(i+1)+'</span><span class="user-name"> ['+zzal[i].member.nick+'] </span><span class="zzal-title">'+zzal[i].title+'</span></a></li>'
			].join('')
		}
		$target.html(newEl)
		
		swiperFn()
	})
	
	function swiperFn() {
		$('.index-page .bxslider').bxSlider({
	    	auto: true,
	    	mode: 'fade',
	    	speed: 300,
	    	captions: true,
	    	pager: false
		});
	}
	
});

