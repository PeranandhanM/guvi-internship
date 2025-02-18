$("#loginBtn").click(function() {
    $.ajax({
        url: "php/login.php",
        type: "POST",
        data: {
            email: $("#loginEmail").val(),
            password: $("#loginPassword").val()
        },
        success: function(response) {
            let res = JSON.parse(response);
            if (res.status == "success") {
                localStorage.setItem("session_token", res.token);
                window.location.href = "profile.html";
            } else {
                alert(res.message);
            }
        }
    });
});
