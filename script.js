$(window).scroll(function () {
  var winScroll = $(this).scrollTop();
  console.log(winScroll);

  $(".background").css({
    "transform": "translate(0, " + winScroll / 20 + "%)"
  });
  $(".birds").css({
    "transform": "translate(" + winScroll / 14 + "%)"
  });
})