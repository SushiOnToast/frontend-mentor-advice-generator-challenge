let adviceNum = '';
let adviceContent = '';
let currentSlip = '';

const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
    return fetch(url, {cache: 'no-store'}).then((resp)=>resp.json()); // turning promise into something easier to handle
}

function displayQuote(advice, id) {
    adviceNum.textContent = 'ADVICE #' + id;
    adviceContent.textContent = advice;
}

function generateAdvice() {
    const API = { get }; // assigning function to object

    API.get(API_URL).then((data)=> {displayQuote(data['slip']['advice'], data['slip']['id'])}); 
}

function onLoad() {
    // run after the html loads
    adviceNum = document.querySelector('#advice-number');
    adviceContent = document.querySelector('#advice-text');

    // so that there is already a piece of advice there
    generateAdvice();
}

document.addEventListener("DOMContentLoaded", onLoad);