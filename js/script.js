// Function to load products from local storage and display them
function displayProducts() {
    const productList = document.getElementById('product-list');
    const products = JSON.parse(localStorage.getItem('products')) || [];

    productList.innerHTML = ''; // Clear any existing products
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <a href="${product.link}" target="_blank">Buy Now</a> <!-- Affiliate link -->
            </div>
        `;
    });
}

// Function to handle adding a new product
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission refresh

    // Get product details from the form
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').value;
    const link = document.getElementById('product-link').value; // Affiliate link

    const newProduct = {
        name: name,
        description: description,
        price: price,
        image: image,
        link: link
    };

    // Get existing products from local storage or create a new array
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Add the new product to the array
    products.push(newProduct);

    // Save the updated product list to local storage
    localStorage.setItem('products', JSON.stringify(products));

    // Reset the form
    document.getElementById('product-form').reset();

    // Display the updated product list
    displayProducts();
});

// Load and display products when the page loads
window.onload = function() {
    displayProducts();
};
