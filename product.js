const sideNav = document.getElementById("side-nav");
const menuIcon = document.getElementById("menuIcon");
const closeNav = document.getElementById("close-nav");

menuIcon.addEventListener("click", function () {
  sideNav.style.right = 0;
});

closeNav.addEventListener("click", function () {
  sideNav.style.right = "-50%";
});

// Product Search Funtionality

const productContainer = document.getElementById("productContainer");
const productSearch = document.getElementById("productSearch");
const productList = productContainer.querySelectorAll("div");

productSearch.addEventListener("keyup", function () {
  var enteredValue = event.target.value.toUpperCase();

  for (i = 0; i < productList.length; i++) {
    var productName = productList[i].querySelector("h1").textContent;
    if (productName.toUpperCase().indexOf(enteredValue) < 0) {
      productList[i].style.display = "none";
    } else {
      productList[i].style.display = "block";
    }
  }
});
