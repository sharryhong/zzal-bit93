$(document).ready(function(){ 
	// index.html 짤강의 리스트뿌리기
	$.getJSON('zzal/zzalList.json', function(result) {
      generateHandlebars(result, $('#main-template'), $('#zzal-list'));
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
