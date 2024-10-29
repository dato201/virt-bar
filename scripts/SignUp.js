function SignUp() {
    backgroundLogin.style.display = "flex";
    backgroundLogin2.style.display = "none";
    backgroundLogin3.style.display = "none";
}

let backgroundLogin = document.getElementById("backgroundLogin");

window.onclick = function (event) {
    if (event.target == backgroundLogin) {
        backgroundLogin.style.display = "none";
    } else if ((event.target == backgroundLogin2)) {
        backgroundLogin2.style.display = "none";
    } else if ((event.target == backgroundLogin3)) {
        backgroundLogin3.style.display = "none";
    }
}