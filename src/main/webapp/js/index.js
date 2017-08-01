$(document).ready(function(){ 
	
	// index.html 짤강의 리스트뿌리기
	$.getJSON('zzal/zzalList.json', function(result) {
      generateHandlebars(result, $('#main-template'), $('#zzal-list'));
      let zzallength = result.data.zzalList.length
      for (let i = 0; i < zzallength; i++) {
    	  console.log(result.data.zzalList[i].zzno)
    	  $.getJSON('zzallike/count.json', {'zzno': result.data.zzalList[i].zzno}, function(result) {
    		  likeNum = result.data.cnt
    		  console.log(likeNum)
    	  })
      }
      /*var $zzalLi = $('.zzal-li')
      var likeEl = 0
      var zzno = 0
      for (let el of $zzalLi) {
    	  el = $(el)
    	  likeEl = el.find('.like-count')
    	  console.log(el)
    	  console.log(el.attr('data-zzno'))
    	  zzno = el.attr('data-zzno')
    	  console.log('zzno' + zzno)
    	  zzalCount(zzno)
      }
      function zzalCount(zzno) {
    	  $.getJSON('zzallike/count.json', {'zzno': zzno}, function(result) {
    		  likeNum = result.data.cnt
    		  console.log(likeNum)
    	  })
    	  likeEl.text(likeNum)
      }*/
	})
	
});



/*(function($){
	'use strict';
	
    */
	  
	/* 
    $.getJSON('mainWeekList.json', function(result) {
      generateHandlebars(result, $('#main-week-template'), zzalWeekList);
    })
    
    $.getJSON('mainSlide.json', function(result) {
      generateHandlebars(result, $('#main-slide-template'), mainSlide);
    })
    */
    /*function generateHandlebars(result, el, target) {
      templateFn = Handlebars.compile(el.text())
  	  generatedHTML = templateFn(result.data)
  	  target.text('')
  	  target.html(generatedHTML)
    }*/
    
/*})(jQuery);
*/
