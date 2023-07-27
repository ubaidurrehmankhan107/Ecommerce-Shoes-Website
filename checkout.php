<?php
// ... Your existing database connection code ...

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action']) && $_POST['action'] === 'checkout') {
        // Perform additional logic here (e.g., payment processing, inventory updates, etc.)

        // Clear the cart by deleting all items after successful checkout
        try {
            $stmt = $db->prepare("DELETE FROM cart_items");
            $stmt->execute();

            // Return success response
            echo json_encode(array('status' => 'success'));
            exit;
        } catch (PDOException $e) {
            // Handle database error
            echo json_encode(array('status' => 'error', 'message' => 'Database error: ' . $e->getMessage()));
            exit;
        }
    }
}

// Return error response for invalid request
echo json_encode(array('status' => 'error', 'message' => 'Invalid request'));
exit;
?>
