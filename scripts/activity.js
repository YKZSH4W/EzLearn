document.addEventListener("DOMContentLoaded", function() {

const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const optionD = document.getElementById('optionD');

const messageTitle = document.getElementById('messageTitle');
const messageBody = document.getElementById('messageBody');

function showModalMessage(isCorrect) {

    if (isCorrect) {
        messageTitle.textContent = 'Correcto!';
        messageBody.innerHTML = '<p>Respuesta correcta. ¡Muy bien hecho!</p>';
    } else {
        messageTitle.textContent = 'Ups...';
        messageBody.innerHTML = '<p>Respuesta incorrecta. Intenta de nuevo.</p>';
    }
}

optionA.addEventListener('click', () => showModalMessage(false));
optionB.addEventListener('click', () => showModalMessage(false));
optionC.addEventListener('click', () => showModalMessage(false));
optionD.addEventListener('click', () => showModalMessage(true));

});
