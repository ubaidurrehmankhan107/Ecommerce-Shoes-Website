<?php
// ... Your existing database connection code ...

try {
    $stmt = $db->prepare("SELECT * FROM cart_items");
    $stmt->execute();
    $cartItems = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return success response with cart items
    echo json_encode(array('status' => 'success', 'items' => $cartItems));
    exit;
} catch (PDOException $e) {
    // Handle database error
    echo json_encode(array('status' => 'error', 'message' => 'Database error: ' . $e->getMessage()));
    exit;
}
?>
