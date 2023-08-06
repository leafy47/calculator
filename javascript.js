let numbers = document.querySelectorAll('.number');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');
let deleteButton = document.querySelector('.delete');

clear.addEventListener('click', () => {
    display.textContent = '';
    storageArray = [];
    operatorMem = [];
});

deleteButton.addEventListener('click', () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (tracker == 1) {
            tracker = 0;
            display.textContent = '';
        }
        display.textContent += number.textContent});
    });

let tracker = 0;
let storageArray = [];
let operatorMem = [];
let sum = 0;
let operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener(('click'), (e) => {
        if (display.textContent === "") return;
        storageArray.push(display.textContent);
        for(thing in operatorObject) {
            if(operatorObject[thing].symbol === operatorMem[0]) {
                operatorObject[thing].calculation();
            }
        }
        operatorLogic(e.target);
        tracker = 1;
        console.log(storageArray);
        console.log(operatorMem);
    })
});


function operatorLogic (operator) {
    if (operatorMem[0]) {
        operatorMem[0] = operator.textContent;
        return;
    } 
    operatorMem.push(operator.textContent);
}


// function storageLogic () {
//     if (storageArray.length === 1) {

//     }
// }






const operatorObject = {
    addition: {symbol: '+', calculation: function add() {
        if (storageArray[1]) {
            display.textContent = Number(storageArray[0]) + Number(storageArray[1]); 
            console.log(sum);
            storageArray.pop();
            storageArray[0] = display.textContent;
            return;
        }
    }},
    subtraction: {symbol: '-', calculation: function subtract() {
        if (storageArray[1]) {
            display.textContent = Number(storageArray[0]) - Number(storageArray[1]); 
            console.log(sum);
            storageArray.pop();
            storageArray[0] = display.textContent;
            return;
        }
    }},
    multiply: {symbol: '*', calculation: function multiply() {
        if (storageArray[1]) {
            display.textContent = Number(storageArray[0]) * Number(storageArray[1]); 
            console.log(sum);
            storageArray.pop();
            storageArray[0] = display.textContent;
            return;
        }
    }},
    divide: {symbol: '/', calculation: 
    function divide() {
        if (storageArray[1]) {
            display.textContent = Number(storageArray[0]) / Number(storageArray[1]); 
            console.log(sum);
            storageArray.pop();
            storageArray[0] = display.textContent;
            return;
        }
    }},
    equals: {symbol: '=', calculation: function equals() {
        if (storageArray[1]) {
            console.log(sum);
            storageArray.pop();
            operatorMem.pop();
            storageArray[0] = display.textContent;
            console.log(operatorMem);
            console.log(storageArray);
            return;
    }}}
}