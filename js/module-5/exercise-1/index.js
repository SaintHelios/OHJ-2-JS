'use strict';

const form = document.querySelector("form");
const show = document.getElementById("search")

async function getshow(show){
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${show}`);
    const data = await response.json();
    console.log(JSON.stringify(data[0]));
    return JSON.stringify({
        name: data[0]["show"]["name"],
        language: data[0]["show"]["language"],
        rating: data[0]["show"]["rating"]
        })
    }
form.addEventListener("submit", async function search(evt) {
    evt.preventDefault();
    const result = document.getElementById("target"); 
    const query = show.value;
    result.innerText = await getshow(query);
    console.log(query);
})
