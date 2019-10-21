function addItem() {
    alert('Congratulations your order was added!\n Flavor: ' + bunOne.flavor + '\n Glazing: ' + bunOne.glazing + '\n Quantity: ' + bunOne.quantity + '\n Subtotal: $' + bunOne.price*bunOne.quantity + '.00');
    orderCounter++;
    updateCart();
}

var orderCounter = 0;

//if there is already a order counter, set the order counter to that value
if (sessionStorage.getItem("orderCounter") != null){
    orderCounter = sessionStorage.getItem("orderCounter");
}

var bunOne = new bun("Original", "None", 1);


//do these things after the page loads, otherwise there is no value to get
window.addEventListener("load", function(){

    priceCalc();
    updateCart();
    setFlavor(sessionStorage.getItem("bunOne.flavor"));


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

function setGlaze(glaze){
    bunOne.glazing = glaze;
    sessionStorage.setItem("bunOne.glazing", glaze);
}

function setFlavor(flavor){
    bunOne.flavor = flavor;
    sessionStorage.setItem("bunOne.flavor", flavor);
    document.getElementById("productTitle").textContent = "Flavor: " + bunOne.flavor;
}

function priceCalc(){
    document.getElementById("price").textContent = "$" + bunOne.price + ".00 * " + bunOne.quantity + " = " + "$" + bunOne.price*bunOne.quantity + ".00";
}

function updateCart(){
    sessionStorage.setItem("orderCounter", orderCounter);
    document.getElementById("cart").textContent = "Cart (" + orderCounter + ")";
}


