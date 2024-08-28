$(document).ready(function () {
    let  token = localStorage.getItem("token")
    if(token){

    }else {
        window.location.href="signIn.html"
    }
})

function logout(){
    localStorage.removeItem("token")

}