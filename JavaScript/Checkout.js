document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user input from session storage
    const selectedCountry = sessionStorage.getItem('selectedCountry');
    const selectedCity = sessionStorage.getItem('selectedCity');
    const postalCode = sessionStorage.getItem('postalCode');
    const couponCode = sessionStorage.getItem('couponCode');

    // Pre-fill the form fields
    const countrySelect = document.getElementById('country');
    const citySelect = document.getElementById('city');
    const postalCodeInput = document.getElementById('postal-code');
    const couponCodeInput = document.getElementById('coupon-code');

    countrySelect.value = selectedCountry;

    // Pre-fill city if it exists
    if (selectedCity) {
        citySelect.value = selectedCity;
    }

    // Pre-fill postal code if it exists
    if (postalCode) {
        postalCodeInput.value = postalCode;
    }

    couponCodeInput.value = couponCode;

    // Clear session storage after retrieving the information
    sessionStorage.clear();

    // Get the card details container
    const cardDetails = document.getElementById('card-details');

    // Get the payment options radio buttons
    const paymentOptions = document.querySelectorAll('input[name="payment"]');

    // Add event listener to each payment option
    paymentOptions.forEach(function (option) {
        option.addEventListener('change', function () {
            console.log('Payment option changed!');
            // Display card details only if Mastercard or Visa is selected
            cardDetails.style.display = (option.id === 'mastercard' || option.id === 'visa') ? 'block' : 'none';
        });
    });

    // Get the "Place Order" button
    const placeOrderBtn = document.getElementById('place-order-btn');

    // Add click event listener to the "Place Order" button
    placeOrderBtn.addEventListener('click', function (event) {
        // Prevent the default behavior of the link click
        event.preventDefault();

        // Validate billing details (you may add your validation logic here)

        // If billing details are valid, proceed to the summary page
        if (validateBillingDetails()) {
            // Get billing details
            const billingDetails = {
                orderNumber: generateOrderNumber(),
                email: document.getElementById('email').value,
                paymentMethod: getSelectedPaymentMethod(),
                orderDate: getCurrentDate(),
                deliveryOption: getSelectedDeliveryOption(),
                deliveryAddress: getDeliveryAddress(),
                contactNumber: document.getElementById('Phone').value,
            };

            // Store billing details in localStorage
            localStorage.setItem('billingDetails', JSON.stringify(billingDetails));

            // Redirect to the summary page
            redirectToSummary();
        }
    });

    // Implement your validation and helper functions as needed
    function validateBillingDetails() {
        // Add your validation logic here
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const country = document.getElementById('country').value;
        const streetAddress = document.getElementById('street-address').value;
        const ZIP = document.getElementById('ZIP').value;
        const town = document.getElementById('Town').value;
        const phone = document.getElementById('Phone').value;
        const email = document.getElementById('email').value;

        // Check if any of the required fields are empty
        if (
            firstName === '' ||
            lastName === '' ||
            country === '' ||
            streetAddress === '' ||
            ZIP === '' ||
            town === '' ||
            phone === '' ||
            email === ''
        ) {
            // Display an error message or take appropriate action
            alert('Please fill in all the required billing details.');
            return false; // Validation failed
        }

        // Add additional validation checks as needed

        return true; // Validation passed
    }

    function generateOrderNumber() {
        // Implement order number generation logic
        return '12345678'; // Replace with your actual logic
    }

    function getSelectedPaymentMethod() {
        // Implement logic to get the selected payment method
        // Example: return document.querySelector('input[name="payment"]:checked').id;
        return 'mastercard'; // Replace with your actual logic
    }

    function getCurrentDate() {
        // Implement logic to get the current date
        // Example: return new Date().toLocaleDateString();
        return '1st November 2021'; // Replace with your actual logic
    }

    function getSelectedDeliveryOption() {
        // Implement logic to get the selected delivery option
        // Example: return document.querySelector('input[name="deliveryOption"]:checked').id;
        return 'standardDelivery'; // Replace with your actual logic
    }

    function getDeliveryAddress() {
        // Implement logic to get the delivery address
        // Example: return document.getElementById('street-address').value + '\n' + document.getElementById('Town').value + '\n' + ...;
        return 'Singapore 123456\nJalan Bukit Merah\nBLK 102\n#07-123'; // Replace with your actual logic
    }

    // Redirect to the summary page
    function redirectToSummary() {
        window.location.href = 'Summary.html';
    }

    // ... (existing code)
});
