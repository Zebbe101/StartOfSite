// Array of products with their information
const products = [
    {
        imageSrc: "./images/voltaren.png",
        title: "Voltaren",
        description: "250g",
        price: "?Kr"
    },
    {
        imageSrc: "product-image2.jpg",
        title: "Product Title 2",
        description: "Product Description 2",
        price: "Product Price 2"
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
    
    textContainer.appendChild(title);
    textContainer.appendChild(description);
    textContainer.appendChild(price);
    
    productFrame.appendChild(image);
    productFrame.appendChild(textContainer);
    
    productContainer.appendChild(productFrame);
}
  