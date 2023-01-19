// Navigation hamburger menu on/off
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const nav = document.getElementsByTagName("nav")[0];

toggleButton.addEventListener("click", (event) => {
  nav.classList.toggle('active');
  event.preventDefault();
})

// Parallax effect (JQuery)
$(window).scroll(function () {
  var winScroll = $(this).scrollTop();
  // console.log(winScroll);

  $(".background").css({
    "transform": "translate(0, " + winScroll / 14 + "%)"
  });
  $(".birds").css({
    "transform": "translate(" + winScroll / 18 + "%)"
  });
})

// Parallax effect (Vanilla)
window.addEventListener("scroll", () => {
  var winScroll = this.scrollY;
  console.log(winScroll);

  document.getElementById("background").style.transform = "translate(0, " + winScroll / 13.5 + "%)";
  document.getElementById("birds").style.transform = "translate(" + winScroll / 18 + "%)";
});