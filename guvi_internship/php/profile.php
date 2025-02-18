<?php
include "db.php";
include "redis.php";

$token = $_GET['token'];
$user_id = $redis->get($token);

if ($user_id) {
    $stmt = $conn->prepare("SELECT name, email FROM users WHERE id = ?");
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_assoc();
    echo json_encode($result);
} else {
    echo json_encode(["status" => "error", "message" => "Invalid session"]);
}
?>
