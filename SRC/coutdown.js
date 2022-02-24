

export const countDown = (date = undefined, element) => {
    let datesMs, limitDate, days, hours, minutes, seconds;

    if (date === undefined ) { inforError();}
    
    if (!(date instanceof Date)) { inforError();}
    
    datesMs = new Date(date).getTime();

    let time  = setInterval(() => {
        limitDate = datesMs - new Date().getTime();
        // 1000 milisegundos = 1 segundo, 60 segundos = 1 minuto, 60 minutos = 1 hora, 24 horas = 1 dia / limitDate = milisegundos
        days = ("0" + Math.floor(Math.abs(limitDate) / (1000 * 60 * 60 * 24))).slice(-2);
        // 1000 milisegundos = 1 segundo, 60 segundos = 1 minuto, 60 minutos = 1 hora, 
        hours = ("0" + Math.floor(Math.abs(limitDate) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2) ;

        minutes = ("0" + Math.floor(Math.abs(limitDate) % (1000 * 60 * 60) / (1000 * 60))).slice(-2);

        seconds = ("0" + Math.floor(Math.abs(limitDate) % (1000 * 60) / 1000)).slice(-2);

        element.innerHTML = `Faltan ${days} dias, ${hours} horas, ${minutes} minutos y ${seconds} segundos para el evento`;
        

        if (limitDate < 0) {
            clearInterval(time);
            element.innerHTML = "El evento ya iniciado";
        }
    }, 1000);
    

}


const inforError = () => {
    console.warn("DATE NOT DEFINED");
}