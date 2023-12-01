// Function to populate cities based on the selected country
function populateCities() {
    var countrySelect = document.getElementById("country");
    var citySelect = document.getElementById("city");

    // Clear previous cities
    citySelect.innerHTML = "<option value='select' disabled>Select a City</option>";

    // Define cities based on the selected country
    var cities = {
        india: ["Mumbai", "Delhi", "Bangalore"],
        china: ["Beijing", "Shanghai", "Guangzhou"],
        japan: ["Tokyo", "Osaka", "Kyoto"]
        // Add more cities for other Asian countries as needed
    };

    var selectedIndex = countrySelect.selectedIndex;
    var selectedCountry = countrySelect.options[selectedIndex].value;

    // Populate cities for the selected country
    if (selectedCountry in cities) {
        cities[selectedCountry].forEach(function (city) {
            var option = document.createElement("option");
            option.value = city;
            option.text = city;
            citySelect.add(option);
        });
    }
}

// Event listener for the plus button
document.addEventListener("click", function (event) {
    if (event.target.matches(".quantity-controls button")) {
        var quantitySpan = event.target.parentElement.querySelector("span");
        var currentQuantity = parseInt(quantitySpan.textContent, 10);

        if (event.target.textContent === "+" && currentQuantity < 10) {
            quantitySpan.textContent = currentQuantity + 1;
        } else if (event.target.textContent === "-" && currentQuantity > 1) {
            quantitySpan.textContent = currentQuantity - 1;
        }
    }
});

// Event listener for the select country dropdown
document.getElementById("country").addEventListener("change", populateCities);

// Event listener for the remove button
document.addEventListener("click", function (event) {
    if (event.target.matches(".remove-button")) {
        var cartItem = event.target.closest(".cart-item");
        if (cartItem) {
            cartItem.remove();
        }
    }
});
