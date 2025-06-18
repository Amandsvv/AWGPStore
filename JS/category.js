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
      const productWrapper = document.createElement("div");
      productWrapper.className = "product-item";

      // Product link section
      const productLink = document.createElement("a");
      productLink.href = `goods.html?category=${selectedCategory}&id=${product.id}`;
      productLink.className = "product-link";
      productLink.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p>Rs./ ${product.price}</p>
      `;

      // Add to cart / wishlist section
      const addBtn = document.createElement("div");
      addBtn.className = "add-btn";
      addBtn.innerHTML = `
        <img src="../Images/heart.png" alt="Add to wishlist" class="wishlist-btn" data-id="${product.id}" data-category="${selectedCategory}">
        <img src="../Images/cart.png" alt="Add to cart" class="cart-btn" data-id="${product.id}" data-category="${selectedCategory}">
      `;

      // Append both sections
      productWrapper.appendChild(productLink);
      productWrapper.appendChild(addBtn);
      container.appendChild(productWrapper);
    });

    // Event listeners for add to cart and wishlist
    container.addEventListener("click", (e) => {
      if (e.target.classList.contains("wishlist-btn")) {
        e.preventDefault(); // Prevent <a> from being triggered
        const id = e.target.dataset.id;
        const category = e.target.dataset.category;
        console.log("Add to wishlist:", id, category);
        // Implement your logic here
      }

      if (e.target.classList.contains("cart-btn")) {
        e.preventDefault(); // Prevent <a> from being triggered
        const id = e.target.dataset.id;
        const category = e.target.dataset.category;
        console.log("Add to cart:", id, category);
        // Implement your logic here
      }
    });
  })
  .catch(err => console.error("Error loading products:", err));
