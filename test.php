<?php
// Test if PHP is working and handling POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo 'PHP can handle POST requests';
} else {
    echo 'PHP is working';
}
?>
