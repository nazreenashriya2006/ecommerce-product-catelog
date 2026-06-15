let products = [];
let currentProducts = [];

async function loadProducts() {
    try {
        const response = await fetch("products.json");
        products = await response.json();
        currentProducts = products;
        displayProducts(products);
    } catch (error) {
        console.error("Error loading products:", error);
    }
}

function displayProducts(items) {
    const container = document.getElementById("productsContainer");

    container.innerHTML = "";

    items.forEach(product => {
        container.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">₹${product.price.toLocaleString()}</p>
                <p class="category">${product.category}</p>
            </div>
        </div>
        `;
    });
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
