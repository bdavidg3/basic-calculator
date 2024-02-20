const visor = document.querySelector('.visor');
const clear = document.querySelector('#clear');
const posNeg = document.querySelector('#posNeg');
const equal = document.querySelector('.equal')
const buttons = document.querySelectorAll('.button-container button');
const operatorButtons = document.querySelectorAll('.operator');
let operatorType = "";
let operando = "";
let operando2 ="";

operatorButtons.forEach(operator => {operator.addEventListener('click', () => {
    if (operando==""){
    operando = visor.textContent;
    operatorType = operator.textContent; 
    console.log(operando);
    console.log(operatorType)
    visor.textContent = "";}

    else{
            operando = parseFloat(operando);
            operando2 = parseFloat(visor.textContent);
            switch(operatorType){
                case'+':
                operando = operando + operando2;
                break;  
        
                case'-':
                operando = operando - operando2;
                break;
        
                case'/':
                operando = operando / operando2;
                break;  
        
                case'*':
                operando = operando * operando2;
                break;    
            }
            operatorType = operator.textContent;
            visor.textContent ="";
    }
    })
})

equal.addEventListener('click',() => {
    operando = parseFloat(operando);
    operando2 = parseFloat(visor.textContent);
    switch(operatorType){
        case'+':
        operando = operando + operando2;
        break;  

        case'-':
        operando = operando - operando2;
        break;

        case'/':
        operando = operando / operando2;
        break;  

        case'*':
        operando = operando * operando2;
        break;    
    }
    operatorType ="";
    visor.textContent = operando;
})

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let currentText = visor.textContent;
        let buttonText = button.textContent;

        if (currentText.length < 9) {
            if(buttonText!== "+/-" 
                &&buttonText !== "=" 
                &&buttonText !== "+" 
                &&buttonText !== "-" 
                &&buttonText !== "*" 
                &&buttonText !== "/" ){
            visor.textContent += buttonText;
        }}
    });
});

clear.addEventListener('click', () => {
    visor.textContent = "";
    operando="";
    operando2="";
    operatorType="";
});

posNeg.addEventListener('click', () => {

    let currentText = visor.textContent;

    if (currentText.startsWith("-")) {
        visor.textContent = currentText.slice(1);
    } else {

        visor.textContent = "-" + currentText;
    }
});

