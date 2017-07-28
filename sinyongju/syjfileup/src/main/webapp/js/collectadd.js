(function($){
	'use strict';

let	collectadd1 = $('#collectaddPhoto');
let collectadd2 = $('#collect-add1');



$.getJSON('collectadd.json',function(result){
  console.log(result)

  let templateFn1 = Handlebars.compile($('#collectadd1-template1').text())
  let generatedHTML1 = templateFn1(result.data)
  console.log(generatedHTML1)
  collectadd1.text('')
  collectadd1.html(generatedHTML1)

	let templateFn2 = Handlebars.compile($('#collectadd2-template2').text())
	let generatedHTML2 = templateFn2(result.data)
	console.log(generatedHTML2)
	collectadd2.text('')
	collectadd2.html(generatedHTML2)
	})

})(jQuery);
