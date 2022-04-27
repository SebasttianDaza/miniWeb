import { NAV, DOM } from "../index.js";

const getGeolocation = (tag) => {
    const $content = DOM.getElementById(tag);

    const sucess = (position) =>  {
        const { latitude, longitude, accuracy } = position.coords;
        $content.innerHTML = `<reusable-elements information="We've got this information for you: <br/> Latitude: ${latitude} <br/> Longitude: ${longitude} <br/> Meters: ${Math.round(
          accuracy
        )} <br/> <a href='https://www.google.com/maps/@${latitude},${longitude},20z'>See on Map</a>" content="Geolocation" morecontent="Navigator" secondcontent="getCurrentPosition" ></reusable-elements>`;
    };

    const error = (error) => {
        $content.innerHTML = `<reusable-elements information="Sucedio el siguiente error : ${error}" content="Geolocation" morecontent="Navigator" secondcontent="getUserMedia" ></reusable-elements>`;
    }

    NAV.geolocation.getCurrentPosition(sucess, error, {
        enableHighAccuracy: true,// El dispositivo hace la mejor lectura posible
        timeout: 5000, // Tiempo de espera
        maximumAge: 0 // No se guarda la información de la posición
    });
}

export default getGeolocation;