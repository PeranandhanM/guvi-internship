$("#signupBtn").click(function() {
    $.ajax({
        url: "php/register.php",
        type: "POST",
        data: {
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#password").val()
        },
        success: function(response) {
            let res = JSON.parse(response);
            if (res.status == "success") {
                alert("Signup successful!");
                window.location.href = "login.html";
            } else {
                alert(res.message);
            }
        }
    });
});
