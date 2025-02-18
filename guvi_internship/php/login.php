<?php
include "db.php";
include "redis.php";  // Include Redis connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $hashed_password);
    $stmt->fetch();

    if ($stmt->num_rows > 0 && password_verify($password, $hashed_password)) {
        $session_token = bin2hex(random_bytes(16)); // Generate session token
        $redis->set($session_token, $id);
        echo json_encode(["status" => "success", "token" => $session_token]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid credentials"]);
    }

    $stmt->close();
    $conn->close();
}
?>
