$(document).ready(function(){ 
	$.get("header.html", function(data) {
	  $("#header").html(data);
	  $.getScript("./js/main.js");
	  $.getScript("./js/slide.js");
	  $.getScript("./js/search.js");
	  $.getScript("./js/login.js");
	  $.getScript("./js/app-context.js");
	  $.getScript("./js/userinfo.js");
	});
	$.get("footer.html", function(data) {
	  $("#footer").html(data);
	});
});