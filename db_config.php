<?php
define('DB_HOST', 'localhost');
define('DB_USERNAME', 'lorynce01');
define('DB_PASSWORD', 'Lorynce3003');
define('DB_NAME', 'data101');

$conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
?>
