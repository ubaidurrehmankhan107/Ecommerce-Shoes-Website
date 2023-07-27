$(document).ready(function() {
    // Load cart items when the page is ready
    loadCartItems();
});

function loadCartItems() {
    $.ajax({
        url: 'get_cart_items.php',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            if (data && data.length > 0) {
                const cartItemsContainer = $('#cart-items');
                cartItemsContainer.empty();

                data.forEach(function(item) {
                    const cartItem = $('<div class="cart-item"></div>');
                    cartItem.append(`<div class="product-name">${item.product_name}</div>`);
                    cartItem.append(`<div class="product-quantity">${item.quantity}</div>`);
                    cartItemsContainer.append(cartItem);
                });
            } else {
                $('#cart-items').html('<p>Your cart is empty.</p>');
            }
        },
        error: function() {
            $('#cart-items').html('<p>Error loading cart items.</p>');
        }
    });
}

function clearCart() {
    $.ajax({
        url: 'clear_cart.php',
        method: 'POST',
        success: function() {
            // Reload the cart items after clearing the cart
            loadCartItems();
        },
        error: function() {
            alert('Error clearing the cart.');
        }
    });
}
