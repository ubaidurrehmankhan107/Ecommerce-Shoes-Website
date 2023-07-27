<?php
$host = 'localhost';
$dbname = 'ecommerce';
$username = 'root';
$password = '';

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(array('status' => 'error', 'message' => 'Database connection failed: ' . $e->getMessage()));
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action'])) {
        $action = $_POST['action'];

        if ($action === 'add') {
            if (isset($_POST['product_name']) && isset($_POST['quantity']) && isset($_POST['size'])) {
                $productName = $_POST['product_name'];
                $quantity = (int)$_POST['quantity'];
                $size = $_POST['size'];

                try {
                    $stmt = $db->prepare("SELECT * FROM cart_items WHERE product_name = ?");
                    $stmt->execute([$productName]);
                    $existingItem = $stmt->fetch();

                    if ($existingItem) {
                        $newQuantity = $existingItem['quantity'] + $quantity;
                        $stmt = $db->prepare("UPDATE cart_items SET quantity = ?, size = ? WHERE product_name = ?");
                        $stmt->execute([$newQuantity, $size, $productName]);
                    } else {
                        $stmt = $db->prepare("INSERT INTO cart_items (product_name, quantity, size) VALUES (?, ?, ?)");
                        $stmt->execute([$productName, $quantity, $size]);
                    }

                    echo json_encode(array('status' => 'success'));
                    exit;
                } catch (PDOException $e) {
                    echo json_encode(array('status' => 'error', 'message' => 'Database error: ' . $e->getMessage()));
                    exit;
                }
            }
        } elseif ($action === 'clear') {
            try {
                $stmt = $db->prepare("DELETE FROM cart_items");
                $stmt->execute();
                echo json_encode(array('status' => 'success'));
                exit;
            } catch (PDOException $e) {
                echo json_encode(array('status' => 'error', 'message' => 'Database error: ' . $e->getMessage()));
                exit;
            }
        }
    }
}

echo json_encode(array('status' => 'error', 'message' => 'Invalid request'));
exit;
?>
