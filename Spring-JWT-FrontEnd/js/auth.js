//user register
function userRegistration() {
    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();
    console.log(name, email, password);

    $.ajax({
        url : "http://localhost:8080/api/v1/auth/register",
        method : "POST",
        contentType : "application/json",
        "data" : JSON.stringify({
            "name" : name,
            "email" : email,
            "password" : password
        }),

        success : function (response) {
            console.log(response.data.token);
            localStorage.setItem("token",response.data.token)
            alert("Saved successfully..!!")
        },
        error : function (error) {
            console.log(error)
            alert("Try again..!!")
        }
    })
}

//user login

function userLogin() {
    let email = $("#email").val();
    let password = $("#password").val();
    console.log(email, password);

    $.ajax({
        url : "http://localhost:8080/api/v1/auth/authenticate",
        method : "POST",
        contentType : "application/json",
        "data" : JSON.stringify({
            "email" : email,
            "password" : password
        }),

        success : function (response) {
            console.log(response.data.token);
            localStorage.setItem("token",response.data.token)
            alert("Login successfully..!!")
            window.location.href="dashboard.html"
        },
        error : function (error) {
            console.log(error)
            alert("Try again..!!")
        }
    })
}