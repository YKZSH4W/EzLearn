document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let uppercasePattern = /[A-Z]/;
    let specialCharPattern = /[¡!@#$%^=-+&*(),.¿?":_{}|<>]/;

    if (name.value === "") {
        nameError.textContent = "El nombre es obligatorio";
    }

    if (email.value === "") {
        emailError.textContent = "El correo es obligatorio";
    } else if (!emailPattern.test(email.value)){
        emailError.textContent = "El correo no es válido";
    }

    if (password.value === "") {
        passwordError.textContent = "La contraseña es obligatoria";
    } else if (password.value.length < 8) {
        passwordError.textContent = "La contraseña debe tener al menos 8 caracteres";
    } else if (!uppercasePattern.test(password.value)) {
        passwordError.textContent = "La contraseña debe contener al menos una letra mayúscula";
    } else if (!specialCharPattern.test(password.value)) {
        passwordError.textContent = "La contraseña debe contener al menos un carácter especial";
    }

    if (confirmPassword.value === "") {
        confirmPasswordError.textContent = "Confirma tu contraseña";
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Las contraseñas no coinciden";
    }
});

document.getElementById("btnCancel").addEventListener("click", function() {
    window.location.href = "welcome.html";
});

document.getElementById("btnContinue").addEventListener("click", function () {

    document.getElementById("registerForm").dispatchEvent(new Event("submit"));

    let nameError = document.getElementById("nameError").textContent;
    let emailError = document.getElementById("emailError").textContent;
    let passwordError = document.getElementById("passwordError").textContent;
    let confirmPasswordError = document.getElementById("confirmPasswordError").textContent;

    if (nameError === "" && emailError === "" && passwordError === "" && confirmPasswordError === "") {
        window.location.href = "profile.html";
    }
});
