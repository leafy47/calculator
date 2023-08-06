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
    number.addEventListener('click', (e) => {
        if (tracker == 1) {
            tracker = 0;
            display.textContent = '';
        }
        if (display.textContent.includes('.') && e.target.textContent == '.') return;
        display.textContent += number.textContent});
    });

let tracker = 0;
let storageArray = [];
let operatorMem = [];
let operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener(('click'), (e) => {
        if (display.textContent === "") return;
        if (!operatorMem[0] && e.target == '=') return;
        storageArray.push(display.textContent);
        for(thing in operatorObject) {
            if(operatorObject[thing].symbol === operatorMem[0]) {
                operatorObject[thing].calculation();
            }
        }
        operatorLogic(e.target);
        tracker = 1;
    })
});


function operatorLogic (operator) {
    if (operatorMem[0]) {
        operatorMem[0] = operator.textContent;
        return;
    } 
    operatorMem.push(operator.textContent);
}

const operatorObject = {
    addition: {symbol: '+', calculation: function add() {
        if (storageArray[1]) {
            display.textContent = Math.round(((Number(storageArray[0]) + Number(storageArray[1])))*1000000)/1000000; 
            storageArray.pop();
            storageArray[0] = display.textContent;
            return;
        }
    }},
    subtraction: {symbol: '-', calculation: function subtract() {
        if (storageArray[1]) {
            display.textContent = Math.round(((Number(storageArray[0]) - Number(storageArray[1])))*1000000)/1000000; 
            storageArray.pop();
            storageArray[0] = display.textContent;
            return;
        }
    }},
    multiply: {symbol: '*', calculation: function multiply() {
        if (storageArray[1]) {
            display.textContent = Math.round(((Number(storageArray[0]) * Number(storageArray[1])))*1000000)/1000000; 
            storageArray.pop();
            storageArray[0] = display.textContent;
            return;
        }
    }},
    divide: {symbol: '/', calculation: 
    function divide() {
        if (storageArray[1]) {
            if(storageArray[1] == '0') {
                display.textContent = 'Not cool man';
                return;
            }
            display.textContent = Math.round(((Number(storageArray[0]) / Number(storageArray[1])))*1000000)/1000000; 
            storageArray.pop();
            storageArray[0] = display.textContent;
            return;
        }
    }},
    equals: {symbol: '=', calculation: function equals() {
        if (storageArray[1]) {
            storageArray.pop();
            operatorMem.pop();
            storageArray[0] = display.textContent;
            return;
    }}}
}