var discountSelector = document.getElementById("discount-selector");
var modifyDiscount = document.getElementById("modify-discount");
var salesContainer = document.getElementById("sales-container");
var departmentsArray = [];
var productsArray = [];

function loadDepartments () {
var loader = new XMLHttpRequest();
loader.addEventListener("error", function() {
console.log("There was an error with the departments file.");
});
loader.open("GET", "departments.json")
loader.send();
loader.addEventListener("load", function () {
var data = JSON.parse(this.responseText);
departmentsArray = data.categories;
loadProducts()
});
}

function loadProducts () {
var loader = new XMLHttpRequest();
loader.addEventListener("error", function() {
console.log("There was an error with the products file.");
});
loader.open("GET", "products.json")
loader.send();
loader.addEventListener("load", function () {
var data = JSON.parse(this.responseText);
productsArray = data.products;
DOMBuilder();

});
}

function DOMBuilder() {
  for (var i = 0; i < productsArray.length; i++) {
    salesContainer.innerHTML +=
    `<div class="sales" id="sales-card-${i}">
    <h3>${productsArray[i].name}</h3>
    <h3>$${productsArray[i].price}</h3>
    <h5>${departmentsArray[productsArray[i].category_id - 1].name}</h5>`
    // console.log(productsArray[i].name);
  }
}


modifyDiscount.addEventListener("click", function() {
})






loadDepartments();


