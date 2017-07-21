(function($){
	'use strict';

	$.getJSON('category/list.json',function(data){
		console.log(data)
	})


	$('.choice-btn').click(function() {
		console.log('choice')


		$('.click-checkbox:checked').each(function() {
      	($(this).val());
				console.log(this)

   });


	});

})(jQuery);
