document.addEventListener("DOMContentLoaded", function () {
    const priceRange = document.getElementById('priceRange');
    const priceValueSpan = document.getElementById('priceValue');
    const maxPriceSpan = document.getElementById('maxPrice');
    const shopBySelect = document.querySelector('select');
    const sortBySelect = document.querySelectorAll('select')[1];
    const onSaleToggle = document.querySelectorAll('input[type="checkbox"]')[0];
    const inStockToggle = document.querySelectorAll('input[type="checkbox"]')[1];
    const productContainer = document.querySelector('.product-container');
    const originalProducts = Array.from(productContainer.children).map(product => product.cloneNode(true));

    // Function to update the displayed prices dynamically
    function updatePriceValue(value) {
        priceValueSpan.textContent = value;

        // Adjust the maximum price based on your requirement
        const maxPrice = 50;
        maxPriceSpan.textContent = maxPrice;
    }

    // Optionally, you can set an initial value when the page loads
    updatePriceValue(priceRange.value);

    // Event listener for shopBySelect, sortBySelect, onSaleToggle, inStockToggle, and priceRange
    shopBySelect.addEventListener('change', filterAndSortProducts);
    sortBySelect.addEventListener('change', filterAndSortProducts);
    onSaleToggle.addEventListener('change', filterAndSortProducts);
    inStockToggle.addEventListener('change', filterAndSortProducts);
    priceRange.addEventListener('input', function () {
        updatePriceValue(this.value);
        filterAndSortProducts();
    });

    // Function to filter and sort products based on selected options
    function filterAndSortProducts() {
        console.log('Filtering and sorting products...');
        const selectedCategory = shopBySelect.value;
        const sortBy = sortBySelect.value;
        const onSaleChecked = onSaleToggle.checked;
        const inStockChecked = inStockToggle.checked;

        // Clone the original products array to avoid modifying it directly
        const clonedProducts = Array.from(originalProducts).map(product => product.cloneNode(true));

        const filteredProducts = clonedProducts.filter(product => {
            const isTop = product.querySelector('h3').textContent.includes('Top');
            const isBottom = product.querySelector('h3').textContent.includes('Pants');

            // Display both "Top" and "Bottoms" for "Default" case
            const isDefault = selectedCategory === 'Default';
            const category = isDefault || (selectedCategory === 'Tops' && isTop) || (selectedCategory === 'Bottoms' && isBottom);

            const price = parseFloat(product.querySelector('p').textContent.substring(1));
            const isOnSale = !onSaleChecked || (onSaleChecked && price < 20);
            const isInStock = !inStockChecked || (inStockChecked && price >= 20 && price <= 40);

            return category && isOnSale && isInStock;
        });

        // Remove all products from the container
        productContainer.innerHTML = '';

        // Sort the filtered products
        const sortedProducts = filteredProducts.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('p').textContent.substring(1));
            const priceB = parseFloat(b.querySelector('p').textContent.substring(1));

            if (sortBy === 'priceLowToHigh') {
                return priceA - priceB;
            } else if (sortBy === 'priceHighToLow') {
                return priceB - priceA;
            } else {
                // Handle other sorting options if needed
                return 0;
            }
        });

        // Append the sorted and filtered products to the container
        sortedProducts.forEach(product => {
            productContainer.appendChild(product);
        });

        // Add event listener for product links in the updated products
        const productLinks = document.querySelectorAll('.product-link');
        productLinks.forEach(product => {
            product.addEventListener('click', () => {
                const productName = product.querySelector('h3').textContent;
                const productPrice = product.querySelector('p').textContent;

                localStorage.setItem('selectedProduct', JSON.stringify({ name: productName, price: productPrice }));
                window.location.href = 'MainProduct.html';
            });
        });
    }
});
