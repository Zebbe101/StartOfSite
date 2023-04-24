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
        title: "La Roche-Posay Anthelios Uvmune Ultra Light Creme SPF 50+",
        description: "Solskydd för ansiktet 50 ml",
        price: "225kr",
        buy: "Köp"
    },
    {
        imageSrc: "./images/omni-vegan.png",
        title: "OmniVegan Omega-3",
        description: "Kosttillskott Kapsel, 60 st",
        price: "235kr",
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
    
    textContainer.appendChild(title);
    textContainer.appendChild(description);
    textContainer.appendChild(price);
    textContainer.appendChild(buybutton);
    
    productFrame.appendChild(image);
    productFrame.appendChild(textContainer);
    
    productContainer.appendChild(productFrame);
}

// Get all product frame elements
const productFrames = document.getElementsByClassName('product-frame');

// Loop through each product frame and add click event listener
for (let i = 0; i < productFrames.length; i++) {
  productFrames[i].addEventListener('click', function() {
    // Code to execute when product frame is clicked
    // You can modify this to perform any desired action, such as navigating to a product detail page or adding the product to cart, etc.
    alert('Product ' + (i + 1) + ' clicked!');
  });
}