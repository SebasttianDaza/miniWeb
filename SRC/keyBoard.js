import { changeMainStyle } from './btnhamburger.js';



document.addEventListener("keydown", (e) => {

    if (e.key === "Control") {
        changeName();
    }
    if (e.key === "v") {
        changeMainStyle();
    }
    if (e.altKey && e.key === "z") {
        alert("Hola mundo");
    }
});

export function startKeyBoard (e) {
    const game = document.getElementById("background")
    game.classList.toggle("hoverHere");
    game.focus();
    moveBall();
}

const moveBall = () => {
    let counterBottomTop, counterLeftRight = 0;
    document.addEventListener("keydown", (e) => {
        if (e.keyCode === 38) {
          counterBottomTop--;
          document.getElementById(
            "elementBall"
          ).style.marginTop = `${counterBottomTop}px`;
        }
        if (e.keyCode === 40) {
            counterBottomTop++;
            document.getElementById(
              "elementBall"
            ).style.marginTop = `${counterBottomTop}px`;
        }
        if (e.keyCode === 37) {
            counterLeftRight--;
            document.getElementById(
              "elementBall"
            ).style.marginLeft = `${counterLeftRight}px`;
        }
        if (e.keyCode === 39) {
          counterLeftRight++;
          document.getElementById(
            "elementBall"
          ).style.marginLeft = `${counterLeftRight}px`;
        }
    })
}


function changeName () {
    const name = prompt("Ingrese su nombre");
    document.querySelector("#titleName").innerHTML = name;   
}