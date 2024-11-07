const sideNav = document.getElementById("side-nav");
const menuIcon = document.getElementById("menuIcon");
const closeNav = document.getElementById("close-nav");

menuIcon.addEventListener("click", function () {
  sideNav.style.right = 0;
});

closeNav.addEventListener("click", function () {
  sideNav.style.right = "-50%";
});
