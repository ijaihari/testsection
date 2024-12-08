/* Menu */
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navbg = document.querySelector(".navbg");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  navbg.classList.toggle("active");
});

/* Footer Section */
let year = new Date();
year = year.getFullYear();
const footer = document.querySelector(".footer");
footer.innerHTML = `Created by Jai Hari Nataraj | &copy; ${year} All rights received.`;
