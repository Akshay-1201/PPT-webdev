const container = document.querySelector(".container");

// Fetch product data from API
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    // Iterate through each product
    products.forEach((product) => {
      // Create product card element
      const card = document.createElement("div");
      card.className = "product-card";

      // Set product image
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.title;
      card.appendChild(img);

      // Set product title
      const title = document.createElement("h3");
      title.textContent = product.title;
      card.appendChild(title);

      // Set product price
      const price = document.createElement("p");
      price.textContent = "$" + product.price;
      card.appendChild(price);
    //   add to cart button 
      const btn = document.createElement("button");
      btn.innerHTML = "Add to Cart";
      card.appendChild(btn)

      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.log("Error fetching products:", error);
  });