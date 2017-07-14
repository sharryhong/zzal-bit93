$("div.select > a").click(function() {
    $(this).next("ul").toggle();
    return false;
});

$("div.select > ul > li").click(function() {
    $(this).parent().hide().parent("div.select").children("a").text($(this).text());
    $(this).prependTo($(this).parent());
});
