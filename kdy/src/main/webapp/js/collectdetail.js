(function($){
	'use strict';

let	maincollectdetail1 = $('#main-collectdetail1');
let maincollectdetail2 = $('#main-collectdetail2');


$.getJSON('collectdetail.json',function(result){
  console.log(result)

  let templateFn1 = Handlebars.compile($('#collectdetail-template1').text())
  let generatedHTML1 = templateFn1(result.data)
  console.log(generatedHTML1)
  maincollectdetail1.text('')
  maincollectdetail1.html(generatedHTML1)

	let templateFn2 = Handlebars.compile($('#collectdetail-template2').text())
	let generatedHTML2 = templateFn2(result.data)
	console.log(generatedHTML2)
	maincollectdetail2.text('')
	maincollectdetail2.html(generatedHTML2)
	})


})(jQuery);
