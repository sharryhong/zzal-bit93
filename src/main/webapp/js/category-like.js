$(document).ready(function(){ 
	// like순 짤강의 리스트뿌리기
	var newEl = ''
	$.getJSON('zzal/zzalLikeRank.json', function(result) {
		zzal = result.data.zzalList
		for (i=0; i < result.data.zzalList.length ; i++) {
			newEl += [
				'<li>'+
				  '<a href="#" class="zzal-lect">'+
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
		$('#zzal-like-list').append(newEl)
			/*var templateFn = Handlebars.compile($('#like-template').text())
		    var generatedHTML = templateFn(result.data) 
		    $target.append(generatedHTML) */
			/*Handlebars.registerHelper("counter", function (index){
			    return index + 1;
			});*/
			/*generateHandlebars(result, $('#like-template'), $('#zzal-like-list'))*/
		})
});

