// Checkout.js

document.addEventListener("DOMContentLoaded", function () {
    const billingForm = document.querySelector(".billing-form");
    const placeOrderBtn = document.getElementById("place-order-btn");

    // Function to check if billing details are filled
    function areBillingDetailsFilled() {
        const requiredFields = document.querySelectorAll(".billing-form [required]");
        let allFilled = true;

        requiredFields.forEach(function (field) {
            if (!field.value.trim()) {
                allFilled = false;
            }
        });

        return allFilled;
    }

    // Function to handle form submission
    function handleFormSubmission(event) {
        if (!areBillingDetailsFilled()) {
            alert("Please fill out all required billing details before placing the order.");
            event.preventDefault();
        }
    }

    // Add event listener to the form
    billingForm.addEventListener("submit", handleFormSubmission);

    // Add event listener to the place order button (optional)
    placeOrderBtn.addEventListener("click", function () {
        if (!areBillingDetailsFilled()) {
            alert("Please fill out all required billing details before placing the order.");
        }
    });
});
