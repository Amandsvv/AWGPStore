document.querySelector(".User-icon").addEventListener('click', () => {
    const userBox = document.querySelector(".user-icon-box");

    if (userBox.style.display === "none") {
        userBox.style.display = "flex";
    } else {
        userBox.style.display = "none"
    }
});


document.querySelector(".product-btn").addEventListener('click', () => {
    const userBox = document.querySelector(".products-box");

    if (userBox.style.display === "none") {
        userBox.style.display = "flex";
    } else {
        userBox.style.display = "none"
    }
});


document.querySelector(".otherlink-btn").addEventListener('click', () => {
    const userBox = document.querySelector(".otherlink-box");

    if (userBox.style.display === "none") {
        userBox.style.display = "flex";
    } else {
        userBox.style.display = "none"
    }
});

fetch('../data/categories.json')
  .then(res => res.json())
  .then(categories => {
    const container = document.getElementById('categoryGrid');
    categories.slice(0, 6).forEach(cat => {
      const div = document.createElement('div');
      div.className = 'category-item';
      div.innerHTML = `
        <a href="../html/category.html?category=${cat.slug}">
          <img src="${cat.image}" alt="${cat.name}">
          <p>${cat.name}</p>
        </a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Failed to load categories:", err));

fetch('../data/categories.json') // update with correct path
  .then(res => res.json())
  .then(categories => {
    const container = document.getElementById('categoryLinksBox');

    const leftDiv = document.createElement('div');
    leftDiv.className = 'products-box-left';

    const rightDiv = document.createElement('div');
    rightDiv.className = 'products-box-right';

    categories.forEach((cat, index) => {
      const a = document.createElement('a');
      a.href = `../html/category.html?category=${encodeURIComponent(cat.slug)}`;
      a.innerHTML = `${cat.name}`;

      if (index < Math.ceil(categories.length / 2)) {
        leftDiv.appendChild(a);
      } else {
        rightDiv.appendChild(a);
      }
    });

    container.appendChild(leftDiv);
    container.appendChild(rightDiv);
  })
  .catch(error => console.error('Error loading categories:', error));

  fetch('../data/popular.json')
  .then(res => res.json())
  .then(categories => {
    const container = document.getElementById('popular-cat');
    categories.forEach(cat => {
      const div = document.createElement('div');
      div.className = 'popular-categories';
      div.innerHTML = `
        <a href="../html/category.html?category=${cat.slug}">
          <p>${cat.name}</p>
        </a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Failed to load categories:", err));
