(function($) {
  'use strict';

  //$(window).on("load", function() {

    //검색버튼(돋보기버튼)이나, 검색창 클릭하면 검색헤더로 변하게 만들기.
    $('.search').click(function() {
    	console.log('kk')
      $(".opacity-curtain").show();
      $(".header").hide();

      $(".suggest-search").show();
      $(".inner-head").show();
      $("body").css("overflow", "hidden");
    });


    // 검색후 엔터 키보드 눌렀을 때, 과거에 검색한 결과 리스트추가.
    $(".search-line").keydown(function(key) {
      if (key.keyCode == 13) {
        var li = "<li class = 'suggest-one-line'><a href='#' class='link-search'></a><a href='#' class='btn-key'><i class='fa fa-rocket' aria-hidden='true'></i></a></li>"
        $(".suggest-all-line").append(li)
      }
    });


    // 검색헤더 상태에서 취소버튼 누르면 일반 헤더로 전환됨
    $('.cancle-btn').click(function() {
      $(".inner-head").hide();
      $(".suggest-search").hide();
      $(".header").show();
      $(".opacity-curtain").hide();

    });

 // });

})(jQuery);
