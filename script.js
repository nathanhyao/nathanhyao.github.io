$(window).scroll(function () {
  var winScroll = $(this).scrollTop();
  // console.log(winScroll);

  $(".background").css({
    "transform": "translate(0, " + winScroll / 20 + "%)"
  });
  $(".birds").css({
    "transform": "translate(" + winScroll / 14 + "%)"
  });
})

// Navigation hamburger menu on/off
$(".mobile-nav-toggle").click(function (event) {
  const visibility = $(".nav-links").attr("data-visible")
  console.log(visibility);

  if (visibility == "false") {
    $(".nav-links").attr("data-visible", "true");
    $(".mobile-nav-toggle").attr("aria-expanded", "true");
  }
  else if (visibility == "true") {
    $(".nav-links").attr("data-visible", "false");
    $(".mobile-nav-toggle").attr("aria-expanded", "false");
  }
})