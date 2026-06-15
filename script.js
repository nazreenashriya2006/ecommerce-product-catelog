let products = [];
let currentProducts = [];

async function loadProducts() {
    const response = await fetch("products.json");
    products = await response.json();
    currentProducts = products;
    displayProducts(products);
}

function displayProducts(items) {
    const container = document.getElementById("productsContainer");

    container.innerHTML = "";

    items.forEach(product => {
        container.innerHTML += `
        <div class="product-card">
            <span class="badge">🔥 Hot</span>

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">
                <h3>${product.name}</h3>

                <div class="rating">
                    ⭐⭐⭐⭐⭐
                </div>

                <p class="price">₹${product.price.toLocaleString()}</p>

                <p class="category">${product.category}</p>

                <button class="buy-btn"
                onclick="buyNow('${product.name}')">
                🛒 Buy Now
                </button>
            </div>
        </div>
        `;
    });
}

function buyNow(productName) {
    alert("✅ " + productName + " added to cart!");
}

document.getElementById("searchInput").addEventListener("input", function () {

    const value = this.value.toLowerCase();

    const filtered = currentProducts.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);
});

document.getElementById("categoryFilter").addEventListener("change", function () {

    const category = this.value;

    if (category === "All") {
        currentProducts = products;
    } else {
        currentProducts = products.filter(
            product => product.category === category
        );
    }

    displayProducts(currentProducts);
});

loadProducts();
