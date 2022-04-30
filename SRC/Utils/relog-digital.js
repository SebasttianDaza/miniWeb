import { DOM } from "../index.js"; 
// Function for relog
export  function startRelog (div, e) {
    interval(div);
    e.target.disabled = true;
    e.target.innerHTML = "Relogando...";
}

let valorInterval;

const interval = (div) => {
    valorInterval = setInterval(() => {
        const date = new Date();
        
        const template = `<p id="toLocal">${date.toLocaleString("en-US")}</p>`;
        div.innerHTML = template;
        div.classList.toggle("date");
        
    }, 1000);
    
}
 
export function stopRelog (div) {
    clearInterval(valorInterval);
    div.innerHTML = "";
    DOM.getElementById("start").disabled = false;
    DOM.getElementById("start").innerHTML = "Start Relog";
}   

//Function for alarm

let valorIntervalAlarm;
const audio = new Audio(
  "https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/music%2FJustin%20Bieber%20-%20Peaches%20ft.%20Daniel%20Caesar%2C%20Giveon.mp3?alt=media&token=ae547e93-d0ec-45ae-9484-6dd7b46619b6"
);

export function startAlarm () {
    
    valorIntervalAlarm = setTimeout(() => {
        audio.play();
    }, 3000);
}

export function stopAlarm () {
    audio.pause();
    clearTimeout(valorIntervalAlarm);
}
