$(document).ready(function(){ 
	// index.html 짤강의 리스트뿌리기
	$.getJSON('zzal/zzalListWithCount.json', function(result) {
		console.log(result)
		generateHandlebars(result, $('#main-template'), $('#zzal-list'));
	})
	
	$.getJSON('zzal/zzalBestList.json', function(result) {
		generateHandlebars(result, $('#best-week-template'), $('#best-week-zzal'));
		console.log(result.data)
		/*var zzal = result.data.zzalList
		var $target = $('#best-week-zzal')
		for (let i = 0; i < result.data.zzalList.length; i++) {
			$target += html('<li><a href="#"><span class="ranking">'+i+'</span><span class="user-name"> ['+zzal[i].name+'] </span><span class="zzal-title">'+zzal[i].title+'</span></a></li>')
		  console.log(i, zzal[i].title)
		}*/
		/*generateHandlebars(result, $('#best-week-template'), $('#best-week-zzal'));*/
	})
	
});

