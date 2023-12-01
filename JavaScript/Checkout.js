document.addEventListener("DOMContentLoaded", function () {
    // Get the card details container
    var cardDetails = document.getElementById("card-details");

    // Get the payment options radio buttons
    var paymentOptions = document.querySelectorAll('input[name="payment"]');

    // Add event listener to each payment option
    paymentOptions.forEach(function (option) {
        option.addEventListener("change", function () {
            console.log("Payment option changed!");
            // Display card details only if Mastercard or Visa is selected
            cardDetails.style.display = (option.id === "mastercard" || option.id === "visa") ? "block" : "none";
        });
    });

    // Get the "Place Order" button
    var placeOrderBtn = document.getElementById("place-order-btn");

    // Add click event listener to the "Place Order" button
    placeOrderBtn.addEventListener("click", function () {
        // Validate billing details (you may add your validation logic here)

        // If billing details are valid, proceed to the summary page
        if (validateBillingDetails()) {
            // Get billing details
            var billingDetails = {
                orderNumber: generateOrderNumber(),  // You need to implement this function
                email: document.getElementById('email').value,
                paymentMethod: getSelectedPaymentMethod(),  // You need to implement this function
                orderDate: getCurrentDate(),  // You need to implement this function
                deliveryOption: getSelectedDeliveryOption(),  // You need to implement this function
                deliveryAddress: getDeliveryAddress(),  // You need to implement this function
                contactNumber: document.getElementById('Phone').value
            };

            // Store billing details in localStorage
            localStorage.setItem("billingDetails", JSON.stringify(billingDetails));

            // Redirect to the summary page
            window.location.href = "/Summary.html";
        }
    });

    // Implement your validation and helper functions as needed
    function validateBillingDetails() {
        // Add your validation logic here
        return true;  // Replace with your actual validation
    }

    function generateOrderNumber() {
        // Implement order number generation logic
        return "12345678";  // Replace with your actual logic
    }

    function getSelectedPaymentMethod() {
        // Implement logic to get the selected payment method
        // Example: return document.querySelector('input[name="payment"]:checked').id;
        return "mastercard";  // Replace with your actual logic
    }

    function getCurrentDate() {
        // Implement logic to get the current date
        // Example: return new Date().toLocaleDateString();
        return "1st November 2021";  // Replace with your actual logic
    }

    function getSelectedDeliveryOption() {
        // Implement logic to get the selected delivery option
        // Example: return document.querySelector('input[name="deliveryOption"]:checked').id;
        return "standardDelivery";  // Replace with your actual logic
    }

    function getDeliveryAddress() {
        // Implement logic to get the delivery address
        // Example: return document.getElementById('street-address').value + '\n' + document.getElementById('Town').value + '\n' + ...;
        return "Singapore 123456\nJalan Bukit Merah\nBLK 102\n#07-123";  // Replace with your actual logic
    }
});
