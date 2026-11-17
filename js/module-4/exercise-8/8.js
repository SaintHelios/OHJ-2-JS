'use strict';

const num1 = parseInt(document.getElementById("num1").value);
const num2 = parseInt(document.getElementById("num2").value);
const op = document.getElementById("operation").value;
const start = document.getElementById("start");


function calc(evt) {
    let result = 0;
    if (op == "add") {
        result = num1 + num2;
    } else if (op == "sub") {
        result = num1 - num2;
    } else if (op == "multi") {
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }
    return document.getElementById("result").innerText = result;
}

start.addEventListener("click", calc);

