// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Hero images
    const heroImages = document.querySelectorAll(".hero-image-container img");
  
    heroImages.forEach((image) => {
      image.addEventListener("mouseenter", function () {
        enlargeImage(image);
      });
  
      image.addEventListener("mouseleave", function () {
        shrinkImage(image);
      });
    });
  
    // Food menu card images
    const foodMenuImages = document.querySelectorAll(".food-menu-card-image");
  
    foodMenuImages.forEach((image) => {
      image.addEventListener("mouseenter", function () {
        enlargeImage(image);
      });
  
      image.addEventListener("mouseleave", function () {
        shrinkImage(image);
      });
    });
  
    // Restaurant list images
    const restaurantImages = document.querySelectorAll(".restaurant-list-image-container img");
  
    restaurantImages.forEach((image) => {
      image.addEventListener("mouseenter", function () {
        enlargeImage(image);
      });
  
      image.addEventListener("mouseleave", function () {
        shrinkImage(image);
      });
    });
  
    function enlargeImage(image) {
      image.style.transform = "scale(1.13)";
      image.style.transition = "transform 0.5s ease";
    }
  
    function shrinkImage(image) {
      image.style.transform = "scale(1)";
    }
  });
  // ---------------------------------------------

  const emailInput = document.querySelector('.email-input');
    const getUpdatesButton = document.querySelector('.button-primary-update');

    // Add a click event listener to the "Get Updates" button
    getUpdatesButton.addEventListener('click', function () {
      // Check if the email input field is filled
      if (emailInput.value.trim() !== '') {
        // Show a thank you alert
        alert('Thank you for subscribing!');
      } else {
        // Show an alert indicating that the email field is required
        alert('Please enter your email before subscribing.');
      }
    });
  
  