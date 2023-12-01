// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    const starContainer = document.querySelector('.ratings');
    const quantitySpan = document.querySelector('.quantity-control span');
    const minusButton = document.querySelector('.quantity-control button:first-child');
    const plusButton = document.querySelector('.quantity-control button:last-child');
    const addToCartButton = document.querySelector('.add-to-cart');

    // Add a click event listener to each star
    starContainer.addEventListener('click', (event) => {
        const clickedStar = event.target;

        // Check if the clicked element is a star
        if (clickedStar.classList.contains('star')) {
            // Toggle the filled/empty style
            clickedStar.classList.toggle('filled');
        }
    });

    // Add functionality to plus and minus buttons
    let quantity = 1; // Initial quantity

    minusButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateQuantityDisplay();
        }
    });

    plusButton.addEventListener('click', () => {
        quantity++;
        updateQuantityDisplay();
    });

    // Update the displayed quantity
    function updateQuantityDisplay() {
        quantitySpan.textContent = quantity;
    }

    // Add functionality to the "Add to Cart" button
    addToCartButton.addEventListener('click', () => {
        // Call the addToCart function to navigate to the Cart.html page
        addToCart();
    });

    // Function to navigate to Cart.html
    function addToCart() {
        window.location.href = "Cart.html";
    }
});
