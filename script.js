<?php
require_once 'db_config.php';

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		echo "Welcome, " . $row["username"];
		// Save data to txt file
		$file = fopen("user_data.txt", "a");
		fwrite($file, $row["username"] . "\n");
		fclose($file);
	}
} else {
	echo "Invalid credentials";
}
?>
