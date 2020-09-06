let currentNumbers = [];
let currentNum = 0; 
let result = 0; 
let currentSign = "";
const numButtons = document.querySelectorAll(".numBtn");
const signButtons = document.querySelectorAll(".signBtn");
const display = document.querySelector(".added-num");
const resultDisplay = document.querySelector(".result");
const clearBtn = document.querySelector("#clear");

// Evaluate expressions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function operate(operator, num1, num2) {
    if (operator === "add") {
        return add(num1, num2);
    }
};

function displayNumbers(numbers) {
    let numDis = numbers.join(' ');
    display.innerText = numDis;
}

function showResult(result) {
    resultDisplay.innerText = result;
}

function reset() {
    showResult(0);
    currentNumbers = [];
    currentNum = 0;
    result = 0;
    displayNumbers(["0"]);
}

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentNum = button.innerText;
        console.log(currentNum);
        currentNumbers.push(currentNum);
        displayNumbers(currentNumbers);
        showResult(result);
    });
})

signButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentSign = button.innerText;
        currentNumbers.push(currentSign);
        displayNumbers(currentNumbers);
    });
})

clearBtn.addEventListener("click", () => reset());