const sideNav = document.getElementById("side-nav");
const menuIcon = document.getElementById("menuIcon");
const closeNav = document.getElementById("close-nav");
const myButton = document.getElementById("myButton");

var productLocation = myButton.addEventListener("click", function () {
  location.href = "./product.html";
});

menuIcon.addEventListener("click", function () {
  sideNav.style.right = 0;
});

closeNav.addEventListener("click", function () {
  sideNav.style.right = "-50%";
});
