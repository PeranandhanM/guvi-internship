<?php
include "redis.php"; // Include Redis connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $token = $_POST['token'];

    if ($redis->del($token)) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to logout"]);
    }
}
?>
