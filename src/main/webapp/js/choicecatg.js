(function($){
	'use strict';

let	choicecategorys1 = $('#choice-categorys');


$.getJSON('choicecatg.json',function(result){
  console.log(result)

  let templateFn1 = Handlebars.compile($('#choiceCategory-template1').text())
  let generatedHTML1 = templateFn1(result.data)
  console.log(generatedHTML1)
  choicecategorys1.text('')
  choicecategorys1.html(generatedHTML1)
	})




})(jQuery);
