$(document).ready(function(){ 
	// index.html 짤강의 리스트뿌리기
	$.getJSON('zzal/zzalListWithCount.json', function(result) {
		console.log(result)
		generateHandlebars(result, $('#main-template'), $('#zzal-list'));
	})
	
});

