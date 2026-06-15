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

```
container.innerHTML = "";

items.forEach(product => {
    container.innerHTML += `
        <div class="product-card" onclick="showDetails('${product.name}','${product.price}','${product.category}','${product.image}')">
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

function showDetails(name, price, category, image) {
document.getElementById("modalBody").innerHTML = `         <img src="${image}" style="width:100%;border-radius:10px;">         <h2 style="margin-top:15px;">${name}</h2>         <h3 style="color:#2563eb;">₹${price}</h3>         <p>Category: ${category}</p>         <p>Premium quality product with modern features.</p>
    `;

```
document.getElementById("productModal").style.display = "block";
```

}

document.querySelector(".close-btn").onclick = function () {
document.getElementById("productModal").style.display = "none";
};

window.onclick = function (event) {
const modal = document.getElementById("productModal");

```
if (event.target === modal) {
    modal.style.display = "none";
}
```

};

document.getElementById("searchInput").addEventListener("input", function () {
const value = this.value.toLowerCase();

```
const filtered = currentProducts.filter(product =>
    product.name.toLowerCase().includes(value)
);

displayProducts(filtered);
```

});

document.getElementById("categoryFilter").addEventListener("change", function () {
const category = this.value;

```
if (category === "All") {
    currentProducts = products;
} else {
    currentProducts = products.filter(
        product => product.category === category
    );
}

displayProducts(currentProducts);
```

});

loadProducts();
