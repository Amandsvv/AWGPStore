
const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category") || "books";

document.getElementById("category-title").textContent = selectedCategory.replace("-", " ");

fetch('../data/product.json') // adjust path if needed
  .then(res => res.json())
  .then(data => {
    const products = data[selectedCategory];
    const container = document.getElementById("product-container");

    if (!products) {
      container.innerHTML = "<p>No products found for this category.</p>";
      return;
    }

    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product-item";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>Rs./ ${product.price}</p>
        <div class="add-btn">
            <img src="../Images/heart.png" alt="add to wishlist">
            <img src="../Images/cart.png" alt="Add to cart">
        </div>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Error loading products:", err));
