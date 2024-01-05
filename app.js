// Get references to the button and the cart container
const cartButton = document.getElementById('cart-btn');
const cartContainer = document.getElementById('container');

// Add a click event listener to the button
cartButton.addEventListener('click', function() {
  // Toggle the visibility of the cart container
  if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
    cartContainer.style.display = 'block'; // Show the cart container
  } else {
    cartContainer.style.display = 'none'; // Hide the cart container
  }
});
