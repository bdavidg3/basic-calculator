const visor = document.querySelector('.visor');
const clear = document.querySelector('#clear');
const posNeg = document.querySelector('#posNeg');
const buttons = document.querySelectorAll('.button-container button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let currentText = visor.textContent;
        let buttonText = button.textContent;

        if (currentText.length < 9) {
            if(buttonText!== "+/-" &&buttonText !== "=" ){
            visor.textContent += buttonText;
        }}
    });
});

clear.addEventListener('click', () => {
    visor.textContent = "";
});

posNeg.addEventListener('click', () => {

    let currentText = visor.textContent;

    if (currentText.startsWith("-")) {
        visor.textContent = currentText.slice(1);
    } else {

        visor.textContent = "-" + currentText;
    }
});