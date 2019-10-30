var orderCounter = 0;

//if there is already a order counter, set the order counter to that value
if (sessionStorage.getItem("orderCounter") != null){
    orderCounter = sessionStorage.getItem("orderCounter");
}

var bunOne = new bun("Original", "Default Glazing", 1);

// var orders = [];

//do these things after the page loads, otherwise there is no value to get
window.addEventListener("load", function(){

    updateCart();
    //resetChoices();
});


//constructor for the bun
function bun(flavor, glazing, quantity) {
    this.flavor = flavor;
    this.glazing = glazing;
    this.quantity = quantity;
    this.price = 3;
}

function updateCart(){
    if (JSON.parse(sessionStorage.getItem("orders")) === null) {
        var orders = [];
        sessionStorage.setItem("orders", JSON.stringify(orders));
    }
    console.log('mainjs updatecart')
    var num = JSON.parse(sessionStorage.getItem("orders")).length;
    sessionStorage.setItem("orderCounter", orderCounter);
    document.getElementById("cart").textContent = "Cart (" + num + ")";

    //bunOne.flavor = JSON.parse(sessionStorage.getItem("bunOne.flavor"));
    // bunOne.flavor = JSON.parse(sessionStorage.getItem("bunOne.glazing"));
    // bunOne.flavor = JSON.parse(sessionStorage.getItem("bunOne.quantity"));

    // bunOne.flavor = sessionStorage.getItem("bunOne");
    // bunOne.glazing = sessionStorage.getItem("bunOne");
    // bunOne.quantity = sessionStorage.getItem("bunOne");
}

//displays orders
function loadOrders(){
    console.log('mainjs onload')
    if (JSON.parse(sessionStorage.getItem("orders")) != null && JSON.parse(sessionStorage.getItem("orders")).length > 0 ){

    console.log(JSON.parse(sessionStorage.getItem("orders"))[0].flavor)

    var length = JSON.parse(sessionStorage.getItem("orders")).length;
    console.log(length)

//https://stackoverflow.com/questions/584751/inserting-html-into-a-div
    for (i = 0; i < length; i++){
        var flavor = JSON.parse(sessionStorage.getItem("orders"))[i].flavor;
        var glazing = JSON.parse(sessionStorage.getItem("orders"))[i].glazing;
        var quantity = JSON.parse(sessionStorage.getItem("orders"))[i].quantity;
        var subtotal = quantity * 3;
        document.getElementById('allorders').innerHTML += '<div class="oneorder"><span class="cartFlavor">' + flavor
                                                        + '</span><span class="cartGlazing">' + glazing
                                                        + '</span><span class="cartQuantity">' + quantity
                                                        + '</span><span class="cartSubtotal">' + '$' + subtotal + '.00'
                                                        + '</span><span onclick="removeOrder(this)">' + 'Remove Order'
                                                        + '</span></div>';
    }
    }

    // document.getElementById("cartFlavor").textContent = bunOne.flavor;
    // document.getElementById("cartGlazing").textContent = bunOne.glazing;
    // document.getElementById("cartQuantity").textContent = bunOne.quantity;
    // document.getElementById("cartSubtotal").textContent = '$' + bunOne.quantity * bunOne.price + '.00';
}

// //set flavor when user clicks on
function setFlavor(flavor){
    console.log('mainjs setflavor');
    bunOne.flavor = flavor;
    sessionStorage.setItem("bunOne", flavor);
    // document.getElementById("productTitle").textContent = "Flavor: " + bunOne.flavor;
}

//https://stackoverflow.com/questions/5913927/get-child-node-index
function removeOrder(currentOrder){
    var child = currentOrder.parentNode;
    var parent = child.parentNode;
    var index = Array.prototype.indexOf.call(parent.children, child);
    console.log(index)

    var orders = JSON.parse(sessionStorage.getItem("orders"))
    orders.splice(index, 1);
    sessionStorage.setItem("orders", JSON.stringify(orders));
    location.reload();
}

// //fake remove, just makes them empty strings
// function removeOrder(){
//     document.getElementById("cartFlavor").textContent = "";
//     document.getElementById("cartGlazing").textContent = "";
//     document.getElementById("cartQuantity").textContent = "";
//     document.getElementById("cartSubtotal").textContent = "";
//     document.getElementById("removeButton").textContent = "";
// }

// //reset the glazing and quauntity
// function resetChoices(){
//         sessionStorage.setItem("bunOne.glazing", 'None');
//         sessionStorage.setItem("bunOne.quantity", 1);
// }