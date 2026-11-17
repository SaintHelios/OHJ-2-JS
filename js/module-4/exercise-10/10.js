'use strict';

const form = document.getElementById("source");
const first_name = document.querySelector("input[name=firstname]").value;
const last_name = document.querySelector("input[name=lastname]").value;
const meow = document.getElementById("target");

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    meow.innerText = `Your name is ${first_name} ${last_name}`; 
});