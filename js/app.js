let firstNum = "";
let secondNum = "";
let currentSign = "";
let result = 0;

const numButtons = document.querySelectorAll(".numBtn");
const signButtons = document.querySelectorAll(".signBtn");
const equalsButton = document.querySelector("#equals");
const resultDisplay = document.querySelector("#result");
const backspaceBtn = document.querySelector("#backspace")
const clearBtn = document.querySelector("#clear");

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function reset() {
    firstNum = "";
    secondNum = "";
    currentSign = "";
    result = 0;
    resultDisplay.textContent = "0";
}

function toDisplay(displayValue) {
    resultDisplay.textContent = displayValue;
}

function getNumber(numSum, num) {
    numSum += num; 
    toDisplay(numSum);
    return numSum;
}

function doOperation() {
    if (currentSign === "+") {
        result = add(parseInt(firstNum), parseInt(secondNum));
     } else if (currentSign === "-") {
         result = subtract(parseInt(firstNum), parseInt(secondNum));
     } else if (currentSign === "*") {
         result = multiply(parseInt(firstNum), parseInt(secondNum));
     } else if (currentSign === "/") {
         result = divide(parseInt(firstNum), parseInt(secondNum));
     } 
    toDisplay(result);
}

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        let number = button.textContent;
        if (currentSign === "") {
            firstNum = getNumber(firstNum, number);
        } else {
            secondNum = getNumber(secondNum, number);
        }
    })
})

signButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentSign = button.textContent;
    })
})

equalsButton.addEventListener("click", () => {
    doOperation();
    firstNum = result;
    secondNum = "";
    currentSign = "";
})

backspaceBtn.addEventListener("click", () => {
    console.log("backspace");
    if (currentSign === "") {
        firstNum = firstNum.slice(0, firstNum.length - 1);
        toDisplay(firstNum);
    } else {
        secondNum = secondNum.slice(0, secondNum.length - 1);
        toDisplay(secondNum);
    }
})

clearBtn.addEventListener("click", () => {
    reset();
})