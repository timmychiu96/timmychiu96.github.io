function addItem() {
    alert('Congratulations your item was added!');
}

var orderCounter = 0;
var bunOne = new bun("Original", null, 1);


//do these things after the page loads
window.addEventListener("load", function(){

    priceCalc();

//referenced https://www.w3schools.com/howto/howto_js_active_element.asp
//active state for glazing
var glazeContainer = document.getElementById("gridglaze");
var glazeBtns = glazeContainer.getElementsByClassName("boxglaze");

for (var i = 0; i < glazeBtns.length; i++) {
  glazeBtns[i].addEventListener("click", function() {
    var current = glazeContainer.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//active state for quantity
var quantContainer = document.getElementById("gridquant");
var quantBtns = quantContainer.getElementsByClassName("boxquant");

for (var i = 0; i < quantBtns.length; i++) {
  quantBtns[i].addEventListener("click", function() {
    var current = quantContainer.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
});


//constructor for the bun
function bun(flavor, glazing, quantity) {
    this.flavor = flavor;
    this.glazing = glazing;
    this.quantity = quantity;
    this.price = 3;
}

function setQuant(quantity){
    bunOne.quantity = quantity;
    priceCalc();
}

function priceCalc(){
    document.getElementById("price").textContent = "$" + bunOne.price + ".00 * " + bunOne.quantity + " = " + "$" + bunOne.price*bunOne.quantity + ".00";
}

function orderCount(){
    orderCounter++;
    document.getElementById("cart").textContent = "Cart (0)";
}
