let shoppingCartBtn = document.getElementById("ShoppingCartBtn")
let sidebar = document.getElementById('sidebar');
let closeBtn = document.getElementById('close-btn');
let ProductsInShoppingCart = document.getElementById("ProductsInShoppingCart")
let SidebarItems = document.getElementsByClassName("SideBar-Items")
// Define the callback function that will be triggered when an item is added to the shopping cart
const shoppingCartItems = new Set();
function shoppingCartChanged() {
    console.log('Shopping cart updated:', shoppingCart);
    ProductsInShoppingCart.innerHTML = "";
    for (i in shoppingCart) {
        const item = document.createElement("li");
        item.textContent = shoppingCart[i]["name"] + " - " + shoppingCart[i]["price"];
        item.className = "SideBar-Items";
        ProductsInShoppingCart.appendChild(item);
    }
    // Add any other code you want to run when the shopping cart is updated
}
  
  // Wrap the shoppingCart array in a Proxy object
const shoppingCart = new Proxy([], {
    set(target, property, value) {
      target[property] = value;
      // Call the shoppingCartChanged function whenever a new item is added to the array
      shoppingCartChanged();
      return target[property];
    }
});
// Array of products with their information
const products = [
    {
        imageSrc: "./images/voltaren.png",
        title: "Voltaren",
        description: "100 g",
        price: "166Kr",
        buy: "Köp"
    },
    {
        imageSrc: "./images/anthelios.webp",
        title: "La Roche-Posay SPF 50+",
        description: "Solskydd för ansiktet 50 ml",
        price: "225Kr",
        buy: "Köp"
    },
    {
        imageSrc: "./images/omni-vegan.png",
        title: "OmniVegan Omega-3",
        description: "Kosttillskott Kapsel, 60 st",
        price: "235Kr",
        buy: "Köp"
    },
    {
      imageSrc: "./images/Alvedon.jpg",
      title: "Alvedon",
      description: "500mg paracetamol",
      price: "40kr",
      buy: "Köp"
  },
  {
    imageSrc: "./images/Allegra-D.png",
    title: "Allegra-D",
    description: "120 mg",
    price: "128kr",
    buy: "Köp"
  },
  {
    imageSrc: "./images/Ipren.png",
    title: "Ipren",
    description: "400 mg",
    price: "49kr",
    buy: "Köp"
},
{
  imageSrc: "./images/braun.png",
  title: "Febertermometer",
  description: "1st",
  price: "348kr (695)",
  buy: "Köp"
},
    // Add more products here
];
  
  // Dynamically generate product frames
const productContainer = document.getElementById("product-container");
for (const product of products) {
    const productFrame = document.createElement("div");
    productFrame.className = "product-frame";
    
    const image = document.createElement("img");
    image.src = product.imageSrc;
    image.alt = product.title;
    image.className = "product-image";
    
    const textContainer = document.createElement("div");
    textContainer.className = "product-text";
    
    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = product.title;
    
    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;
    
    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = product.price;

    const buybutton = document.createElement("button");
    buybutton.className = "product-buybutton";
    buybutton.textContent = product.buy;
    buybutton.addEventListener('click',function() {
      let item = {
        name: title.textContent,
        price: price.textContent
      };
      // Check if the item already exists in the shopping cart
      if (shoppingCart.some((cartItem) => cartItem.name === item.name && cartItem.price === item.price)) {
        console.log("Item already exists in shopping cart");
      } else {
        shoppingCart.push(item);
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
      }
      });
    textContainer.appendChild(title);
    textContainer.appendChild(description);
    textContainer.appendChild(price);
    textContainer.appendChild(buybutton);
    
    productFrame.appendChild(image);
    productFrame.appendChild(textContainer);
    
    productContainer.appendChild(productFrame);
};

shoppingCartBtn.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
});