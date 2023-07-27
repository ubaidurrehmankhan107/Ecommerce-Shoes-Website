<?php
// Function to sanitize user input
function sanitizeInput($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data and sanitize it
    $name = sanitizeInput($_POST["name"]);
    $email = sanitizeInput($_POST["email"]);
    $message = sanitizeInput($_POST["message"]);

    // Database connection parameters
    $db_host = 'localhost';      // Change this to your MySQL server hostname or IP address
    $db_user = 'root';  // Change this to your MySQL username
    $db_pass = '';  // Change this to your MySQL password
    $db_name = 'ecommerce';  // Change this to your MySQL database name

    // Connect to the database
    $mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);

    // Check connection
    if ($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }

    // Prepare and execute the SQL query to insert data into the database
    $stmt = $mysqli->prepare("INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        // Data inserted successfully
        echo "Thank you for your submission!";
    } else {
        // Error in insertion
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();

    // Close the database connection
    $mysqli->close();
}
?>
