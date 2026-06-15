let products = [];
let filteredProducts = [];

async function loadProducts() {
const response = await fetch("products.json");
products = await response.json();
filteredProducts = products;
displayProducts(filteredProducts);
}

function displayProducts(items) {
const container = document.getElementById("productsContainer");

```
container.innerHTML = "";

items.forEach(product => {
    container.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">₹${product.price}</p>
                <p class="category">${product.category}</p>
            </div>
        </div>
    `;
});
```

}

document.getElementById("searchInput").addEventListener("input", function () {
const searchValue = this.value.toLowerCase();

```
const result = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchValue)
);

displayProducts(result);
```

});

document.getElementById("categoryFilter").addEventListener("change", function () {
const category = this.value;

```
if (category === "All") {
    filteredProducts = products;
} else {
    filteredProducts = products.filter(
        product => product.category === category
    );
}

displayProducts(filteredProducts);
```

});

loadProducts();

