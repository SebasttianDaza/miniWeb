 
 
 export  function startAlarm (div) {
    console.log("startAlarm");
    setInterval(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        div.innerHTML = `<p>${hours}:${minutes}:${seconds}</p>`;
    }, 1000);
    
 }

 