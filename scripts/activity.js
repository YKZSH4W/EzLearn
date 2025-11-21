document.addEventListener("DOMContentLoaded", function() {

////////////////////////////////////////////////////////////////////////////
///////  Respuestas
//////////////////////////////////////////////////////////////////////////7/

const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const optionD = document.getElementById('optionD');

const messageTitleAnswer = document.getElementById('messageTitle');
const messageBodyAnswer = document.getElementById('messageBody');

function showModalMessageAnswers(isCorrect) {

    if (isCorrect) {
        messageTitleAnswer.textContent = 'Correcto!';
        messageBodyAnswer.innerHTML = '<p>Respuesta correcta. ¡Muy bien hecho!</p>';
    } else {
        messageTitleAnswer.textContent = 'Ups...';
        messageBodyAnswer.innerHTML = '<p>Respuesta incorrecta. Intenta de nuevo.</p>';
    }
}

optionA.addEventListener('click', () => showModalMessageAnswers(false));
optionB.addEventListener('click', () => showModalMessageAnswers(false));
optionC.addEventListener('click', () => showModalMessageAnswers(false));
optionD.addEventListener('click', () => showModalMessageAnswers(true));

////////////////////////////////////////////////////////////////////////////
///////  Menú
//////////////////////////////////////////////////////////////////////////7/

const btnActividades = document.getElementById('btnActividades');
const btnCerrarSesion = document.getElementById('btnCerrarSesion');

const messageBodyMenu = document.getElementById('messageBodyMenu');
const btnAceptar = document.getElementById('btnAceptar');

function showModalMessageMenu(something){
    if(something === 'btnActividades'){
        messageBodyMenu.innerHTML = '<p>¿Estás seguro que deseas Regresar? Si deja la actividad sin completar no se guardará su progreso.</p>';
        btnAceptar.addEventListener("click", function() {
            window.location.href = "panel-actividades.html";
        });
    }else if (something === 'btnCerrarSesion'){
        messageBodyMenu.innerHTML = '<p>¿Estás seguro que deseas cerrar sesión?</p>';
        btnAceptar.addEventListener("click", function() {
            window.location.href = "welcome.html";
        });
    }
}

btnActividades.addEventListener('click', () => showModalMessageMenu('btnActividades'));
btnCerrarSesion.addEventListener('click', () => showModalMessageMenu('btnCerrarSesion'));

});
