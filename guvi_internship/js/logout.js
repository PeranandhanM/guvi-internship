$("#logoutBtn").click(function() {
    let token = localStorage.getItem("session_token");

    $.ajax({
        url: "php/logout.php",
        type: "POST",
        data: { token: token },
        success: function(response) {
            let res = JSON.parse(response);
            if (res.status === "success") {
                localStorage.removeItem("session_token"); // Clear session
                window.location.href = "login.html"; // Redirect to login
            } else {
                alert("Logout failed!");
            }
        }
    });
});
