'use strict';

function calculator(evt) {
    const print = document.getElementById("result");
    const calculation = document.getElementById("calculation").value;
    const split = calculation.split("");

    if (split.includes('+')) {
        const values = calculation.split('+'); var meow = parseInt(values[0]) + parseInt(values[1])
    } else if (split.includes('-')) {
        const values = calculation.split('-'); var meow = parseInt(values[0]) - parseInt(values[1])
    } else if (split.includes('*')) {
        const values = calculation.split('*'); var meow = parseInt(values[0]) * parseInt(values[1])
    } else {
        const values = calculation.split('/'); var meow = parseInt(values[0]) / parseInt(values[1])
    }
    const end = document.getElementById("result").innerText = meow;
}

const button = document.getElementById("start");
button.addEventListener("click", calculator());

