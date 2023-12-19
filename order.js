// Function to update quantity and total price
function updateQuantityAndTotal(basePrice, quantityDisplayId, totalPriceDisplayId) {
  const quantityDisplay = document.getElementById(quantityDisplayId);
  const totalPriceDisplay = document.getElementById(totalPriceDisplayId);

  let quantity = parseInt(quantityDisplay.innerText, 10);

  // Calculate total price based on the quantity
  const totalPrice = basePrice * quantity;
  totalPriceDisplay.innerText = `Total Price: Rs. ${totalPrice.toFixed(2)}`;
}

// Function to increase the quantity
function increaseQuantity(basePrice, quantityDisplayId, totalPriceDisplayId) {
  const quantityDisplay = document.getElementById(quantityDisplayId);

  let quantity = parseInt(quantityDisplay.innerText, 10);
  quantity += 1;
  quantityDisplay.innerText = quantity;

  // Update quantity and total price
  updateQuantityAndTotal(basePrice, quantityDisplayId, totalPriceDisplayId);
}

// Function to decrease the quantity
function decreaseQuantity(basePrice, quantityDisplayId, totalPriceDisplayId) {
  const quantityDisplay = document.getElementById(quantityDisplayId);

  let quantity = parseInt(quantityDisplay.innerText, 10);
  if (quantity > 0) {
    quantity -= 1;
    quantityDisplay.innerText = quantity;

    // Update quantity and total price
    updateQuantityAndTotal(basePrice, quantityDisplayId, totalPriceDisplayId);
  }
}

// Function to update total bill display
function updateTotalBill() {
  const totalBillDisplay = document.getElementById("totalBillDisplay");
  let totalBill = 0;

  // Sum up all dish total prices
  document.querySelectorAll(".dish-total-price").forEach(function (totalPriceDisplay) {
    totalBill += parseFloat(totalPriceDisplay.innerText.replace("Total Price: Rs. ", ""));
  });

  totalBillDisplay.innerText = `Total Bill: Rs. ${totalBill.toFixed(2)}`;
}

// Function to handle the "Add to Cart" button click
function handleAddToCartClick(event, basePrice, quantityDisplayId, totalPriceDisplayId) {
  const dishItem = event.target.closest(".dish-item");
  if (!dishItem) return;

  const totalPriceDisplay = dishItem.querySelector(".dish-total-price");
  if (!totalPriceDisplay) return;

  // Update total bill
  updateTotalBill();

  // You can also include any additional logic related to adding to the cart here
}

// Attach click event listener to all "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const dishItem = event.target.closest(".dish-item");
      if (!dishItem) return;

      const totalPriceDisplay = dishItem.querySelector(".dish-total-price");
      if (!totalPriceDisplay) return;

      const basePrice = parseFloat(totalPriceDisplay.innerText.replace("Total Price: Rs. ", ""));
      const quantityDisplayId = dishItem.querySelector(".quantity-container span").id;
      const totalPriceDisplayId = totalPriceDisplay.id;

      // Handle the "Add to Cart" button click
      handleAddToCartClick(event, basePrice, quantityDisplayId, totalPriceDisplayId);
    });
  });
});


