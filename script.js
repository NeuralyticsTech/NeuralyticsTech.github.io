// You can use this file to add interactivity and functionality to your site

// You can use variables to store elements or values that you want to reuse
// For example, this variable stores the navigation bar
var navbar = document.querySelector(".header nav");

// You can use functions to perform actions or tasks
// For example, this function toggles the visibility of the navigation bar
function toggleNavbar() {
  navbar.classList.toggle("hidden");
}

// You can use event listeners to trigger functions or actions when certain events occur
// For example, this event listener triggers the toggleNavbar function when the window is resized
window.addEventListener("resize", toggleNavbar);
