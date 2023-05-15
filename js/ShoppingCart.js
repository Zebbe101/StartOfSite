// retrieve the cart items from localStorage
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
let Cost = 0
// loop through the cart items and display them on the page
for (let i = 0; i < shoppingCart.length; i++) {
  let item = shoppingCart[i];
  let itemName = item.name;
  let itemPrice = item.price;

  Cost += parseInt(itemPrice)
  // display the item on the page
  let itemElement = document.createElement("div");
  itemElement.innerText = itemName + " - " + itemPrice; 

  document.getElementById("summary").appendChild(itemElement);
}

let total = document.getElementsByClassName("total");
total[0].innerText = "Total: " + Cost + "Kr"