

export const countDown = (date = undefined) => {
    let datesMs, dateNowMS, dateNow;

    if (date === undefined ) { inforError();}
    if ( typeof date === "string") { inforError();}
    if (!(date instanceof Date)) { inforError();}
    
    datesMs = date.getTime() - Date.now();
    //yearOnSecond = Math.floor(dates / (1000 * 60 * 60 * 24 * 30 * 12));

    dateNowMS = Date.now() + datesMs;
    dateNow = new Date(dateNowMS);

    timeCoutDown(dateNow);

}

const timeCoutDown = (date) => {
    setInterval(() => {
        

        

        
    }
        , 1000);
}

const inforError = () => {
    console.warn("DATE NOT DEFINED");
}