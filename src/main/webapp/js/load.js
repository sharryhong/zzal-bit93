$(document).ready(function(){ 
	$.get("header.html", function(data) {
	  $("#header").html(data);
	  $.getScript("./js/main.js");
	  $.getScript("./js/slide.js");
	  $.getScript("./js/search.js");
	  $.getScript("./js/login.js");
	});
	$.get("footer.html", function(data) {
	  $("#footer").html(data);
	});
});