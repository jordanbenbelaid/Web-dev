`use strict`

const firstNumber = parseFloat(document.querySelector("#firstNumber").value);
const secondNumber = parseFloat(document.querySelector("#secondNumber").value);
const result = document.querySelector("#result");
const history = new Array();
const clearValues = document.querySelector("#clearValues");
const clearHistory = document.querySelector("#clearHistory");

function add() {
    result.innerHTML = firstNumber.value + secondNumber.value;
    console.log(result)
}

function subtract() {
    let x = Number(document.querySelector("#firstNumber").value);
    let y = Number(document.querySelector("#secondNumber").value);
    document.querySelector("#result").value  = x - y;
}

function divide() {
    let x = Number(document.querySelector("#firstNumber").value);
    let y = Number(document.querySelector("#secondNumber").value);
    document.querySelector("#result").value  = x / y;
}

function multiply() {
    let x = Number(document.querySelector("#firstNumber").value);
    let y = Number(document.querySelector("#secondNumber").value);
    document.querySelector("#result").value  = x * y;
}

function powerOf() {
    let x = Number(document.querySelector("#firstNumber").value);
    let y = Number(document.querySelector("#secondNumber").value);
    document.querySelector("#result").value  = Math.pow(x, y);
}

function clearVals() {
    document.querySelector("#firstNumber").value = "";
    document.querySelector("#secondNumber").value = "";
    document.querySelector("#result").value  = "";
}

function clearHist() {
    document.querySelector("#firstNumber").value = "";
    document.querySelector("#secondNumber").value = "";
    document.querySelector("#result").value  = "";
    document.querySelector("#dataHistory").value = "";
}

function storeData() {
    const storeData = document.createElement("p");
    storeData.innerHTML = "#result";
    storeData.append("dataHistory");
}
