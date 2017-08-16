$(document).ready(function(){ 
	// view순 짤강의 리스트뿌리기
	var newEl = ''
	$.getJSON('zzal/zzalViewRank.json', function(result) {
		zzal = result.data.zzalList
		for (i=0; i < result.data.zzalList.length ; i++) {
			newEl += [
				'<li>'+
				  '<a href="#" class="zzal-lect" data-zzno="'+ zzal[i].zzno +'">'+
				    '<div class="zzal">'+
				      '<div class="zzal-img">'+
				        '<img src="upload/'+zzal[i].mainPic+'">'+
				      '</div>'+
				    '</div>'+
				    '<div class="bottom">'+
				      '<span class="ranking">'+ (i+1) +'</span>'+
				      '<h3 class="title">'+zzal[i].title+'</h3>'+
				    '</div>'+
				  '</a>'+
				'</li>'
			].join('')
		}
		$('#zzal-view-list').append(newEl)
		})
});

