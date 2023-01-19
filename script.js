// Parallax effect (JQuery)
$(window).scroll(function () {
  var winScroll = $(this).scrollTop();
  // console.log(winScroll);

  $("#background").css({
    "transform": "translate(0, " + winScroll / 14 + "%)"
  });
  $("#birds").css({
    "transform": "translate(" + winScroll / 18 + "%)"
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
});

// Intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((elem) => observer.observe(elem));