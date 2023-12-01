document.addEventListener("DOMContentLoaded", function() {
    // Retrieve billing details from localStorage
    var billingDetails = JSON.parse(localStorage.getItem("billingDetails"));

    // Check if billing details exist
    if (billingDetails) {
        // Update order details on the Summary page
        updateOrderDetails(billingDetails);
    }
});

function updateOrderDetails(billingDetails) {
    // Update elements on the Summary page with billing details
    document.getElementById('order-number').innerText = billingDetails.orderNumber;
    document.getElementById('email').innerText = billingDetails.email;
    document.getElementById('payment-method').innerText = billingDetails.paymentMethod;
    document.getElementById('order-date').innerText = billingDetails.orderDate;
    document.getElementById('delivery-option').innerText = billingDetails.deliveryOption;
    document.getElementById('delivery-address').innerHTML = billingDetails.deliveryAddress.replace(/\n/g, "<br>");
    document.getElementById('contact-number').innerText = billingDetails.contactNumber;
}
