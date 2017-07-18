$(document).ready(function(){ 
	$.get("header.html", function(data) {
	  $("#header").html(data);
	  $.getScript("./scrollbar/jquery.mCustomScrollbar.concat.min.js");
	  $.getScript("./js/slide.js");
	  $.getScript("./js/main.js");
	  $.getScript("./js/search.js");
	});
	$.get("footer.html", function(data) {
	  $("#footer").html(data);
	});
});