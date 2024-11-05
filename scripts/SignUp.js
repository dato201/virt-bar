function SignUp() {
    backgroundLogin.style.display = "flex";
    LogIn1.style.display = "none";
    SignUp1.style.display = "flex";
}

function LogIn() {
    backgroundLogin.style.display = "flex";
    LogIn1.style.display = "flex";
    SignUp1.style.display = "none";
}

let backgroundLogin = document.getElementById("backgroundLogin");
let SignUp1 = document.getElementById("SignUp");
let LogIn1 = document.getElementById("LogIn");

window.onclick = function (event) {
    if (event.target == backgroundLogin) {
        backgroundLogin.style.display = "none";
    }
}