document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value === "") {
        emailError.textContent = "Debes escribir tu correo";
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = "El correo no es válido";
    }

    if (password.value === "") {
        passwordError.textContent = "La contraseña es obligatoria";
    }
});

document.getElementById("btnCancel").addEventListener("click", function() {
    window.location.href = "welcome.html";
});

document.getElementById("btnContinue").addEventListener("click", function () {

    document.getElementById("loginForm").dispatchEvent(new Event("submit"));

    let emailError = document.getElementById("emailError").textContent;
    let passwordError = document.getElementById("passwordError").textContent;

    if (emailError === "" && passwordError === "") {
        window.location.href = "panel-actividades.html";
    }
});
