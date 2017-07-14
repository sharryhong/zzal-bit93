(function($) {
    'use strict';

    $(window).on("load", function() {


      $(".mobile-nav").mCustomScrollbar({
        axis: "x",
        theme: "dark-thin",
        autoHideScrollbar: true
      });
    });

    $('.ellipsis-button').click(function() {
      $(".drop-menu").toggle();
		});



    })(jQuery);
