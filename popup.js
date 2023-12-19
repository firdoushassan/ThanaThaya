function checkout() {
    openModal();
  }

// Add this to your existing script.js or a new JavaScript file
function openModal() {
    document.getElementById("modalTotalBillDisplay").textContent = document.getElementById("totalBillDisplay").textContent;
    document.getElementById("checkoutModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("checkoutModal").style.display = "none";
  }
  
  function placeOrder() {
    
    closeModal();
  }
  