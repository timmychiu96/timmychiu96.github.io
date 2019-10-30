function addItem() {
    alert('Congratulations your order was added!\n Flavor: ' + bunOne.flavor + '\n Glazing: ' + bunOne.glazing + '\n Quantity: ' + bunOne.quantity + '\n Subtotal: $' + bunOne.price*bunOne.quantity + '.00');
    orderCounter++;
    createCart();
    updateCart();
}

var orderCounter = 0;

//if there is already a order counter, set the order counter to that value
if (sessionStorage.getItem("orderCounter") != null){
    orderCounter = sessionStorage.getItem("orderCounter");
}

var bunOne = new bun("Original", "None", 1);

var orders = [];

//do these things after the page loads, otherwise there is no value to get
window.addEventListener("load", function(){

    priceCalc();
    updateCart();
    console.log(bunOne);
    setFlavor(sessionStorage.getItem("bunOne"));
    // setGlaze(sessionStorage.getItem("bunOne.glazing"));
    // setQuant(sessionStorage.getItem("bunOne.quantity"));


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
    console.log('detailsjs setQuant');

    bunOne.quantity = quantity;
    sessionStorage.setItem("bunOne", JSON.stringify(bunOne));
    priceCalc();
}

function setGlaze(glaze){
    console.log('detailsjs glaze');

    bunOne.glazing = glaze;
    sessionStorage.setItem("bunOne", JSON.stringify(bunOne));
}

function setFlavor(flavor){
    console.log('detailsjs flavor');

    bunOne.flavor = flavor;
    console.log(bunOne);
    sessionStorage.setItem("bunOne", JSON.stringify(bunOne));
    document.getElementById("productTitle").textContent = "Flavor: " + flavor;
}

function priceCalc(){
    document.getElementById("price").textContent = "$" + bunOne.price + ".00 * " + bunOne.quantity + " = " + "$" + bunOne.price*bunOne.quantity + ".00";
}

function updateCart(){
    var num = JSON.parse(sessionStorage.getItem("orders")).length;
    sessionStorage.setItem("orderCounter", orderCounter);
    document.getElementById("cart").textContent = "Cart (" + num + ")";
    // bunOne.flavor = sessionStorage.getItem("bunOne.flavor");
    // bunOne.glazing = sessionStorage.getItem("bunOne.glazing");
    // bunOne.quantity = sessionStorage.getItem("bunOne.quantity");
}

function createCart(){
    if (JSON.parse(sessionStorage.getItem("orders")) === null) {
        orders = [];
    }

    else {
        var currentOrders = JSON.parse(sessionStorage.getItem("orders"));
        orders = currentOrders;
    };


    console.log("orders");
    console.log(orders);
    orders.push(bunOne);
    console.log(orders);


    // for (i = 0; i < orders.length; i++){
    //     console.log('heafs');
    //     console.log(document.getElementById("cartFlavor").textContent);
    //     // document.getElementById("cartFlavor").textContent = orders[i].flavor;
    //     // document.getElementById("cartGlazing").textContent = orders[i].glazing;
    //     // document.getElementById("cartQuantity").textContent = orders[i].quantity;
    //     // document.getElementById("cartSubtotal").textContent = '$' + orders[i].quantity * bunOne.price + '.00';
    //     console.log('test');

    // }

    sessionStorage.setItem("orders", JSON.stringify(orders));
}
