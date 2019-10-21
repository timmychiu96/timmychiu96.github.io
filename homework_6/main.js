var orderCounter = 0;

//if there is already a order counter, set the order counter to that value
if (sessionStorage.getItem("orderCounter") != null){
    orderCounter = sessionStorage.getItem("orderCounter");
}

var bunOne = new bun("Original", null, 1);


//do these things after the page loads, otherwise there is no value to get
window.addEventListener("load", function(){

    updateCart();
});


//constructor for the bun
function bun(flavor, glazing, quantity) {
    this.flavor = flavor;
    this.glazing = glazing;
    this.quantity = quantity;
    this.price = 3;
}

function setFlavor(flavor){
    bunOne.flavor = flavor;
    sessionStorage.setItem("bunOne.flavor", flavor);
    console.log(bunOne.flavor);
}

function updateCart(){
    sessionStorage.setItem("orderCounter", orderCounter);
    document.getElementById("cart").textContent = "Cart (" + orderCounter + ")";
}

