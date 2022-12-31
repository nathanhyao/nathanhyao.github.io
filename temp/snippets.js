// Navigation hamburger menu on/off
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const nav = document.getElementsByTagName("nav")[0];

toggleButton.addEventListener("click", (event) => {
  nav.classList.toggle('active');
  event.preventDefault();
})