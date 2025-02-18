$(document).ready(function() {
    let token = localStorage.getItem("session_token");

    $.ajax({
        url: "php/profile.php",
        type: "GET",
        data: { token: token },
        success: function(response) {
            let res = JSON.parse(response);
            if (res.status !== "error") {
                $("#profileName").text("Name: " + res.name);
                $("#profileEmail").text("Email: " + res.email);
            } else {
                alert("Session expired! Login again.");
                window.location.href = "login.html";
            }
        }
    });
});
