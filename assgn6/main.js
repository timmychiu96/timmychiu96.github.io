var orderCounter = 0;

//if there is already a order counter, set the order counter to that value
if (sessionStorage.getItem("orderCounter") != null){
    orderCounter = sessionStorage.getItem("orderCounter");
}

var bunOne = new bun("Original", "Default Glazing", 1);

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


//Update the # of orders in cart
function updateCart(){
    if (JSON.parse(sessionStorage.getItem("orders")) === null) {
        var orders = [];
        sessionStorage.setItem("orders", JSON.stringify(orders));
    }
    console.log('mainjs updatecart')
    var num = JSON.parse(sessionStorage.getItem("orders")).length;
    sessionStorage.setItem("orderCounter", orderCounter);
    document.getElementById("cart").textContent = "Cart (" + num + ")";
}

//displays orders, retrieve orders if there are objects in there
function loadOrders(){
    console.log('mainjs onload')

    //check if it is null/empty after deleting orders
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
        var totalQuant = quantity * length;
        document.getElementById('allorders').innerHTML += '<div class="oneorder"><span class="cartFlavor">' + flavor
                                                        + '</span><span class="cartGlazing">' + glazing
                                                        + '</span><span class="cartQuantity">' + quantity
                                                        + '</span><span class="cartSubtotal">' + '$' + subtotal + '.00'
                                                        + '</span><span class="cartRemove" onclick="removeOrder(this)">' + 'Remove Order'
                                                        + '</span></div>';
        calcTotal(totalQuant);
    }
    }
}

// //set flavor when user clicks on
function setFlavor(flavor){
    console.log('mainjs setflavor');
    bunOne.flavor = flavor;
    sessionStorage.setItem("bunOne", flavor);
}

function calcTotal(totalQuant){
    document.getElementById("total").innerHTML = '$' + totalQuant * 3 + '.00';
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