let mainNav = document.getElementById('js-menu');
const navBarToggle = document.querySelector('js-navbar-toggle');
// let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle('active');
});

// const toggle = document.querySelector(".navbar-toggle");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".main-nav li");

// toggle.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
// });