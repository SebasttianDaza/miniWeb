import { changeMainStyle } from './btnhamburger.js';

let x = 0,
  y = 0;

export function startKeyBoard (e, game,  elementBall) {

  const { left, right, top, bottom } = elementBall.getBoundingClientRect();
  const limitGame = game.getBoundingClientRect();


  switch (e.keyCode) {
    case 37:
      if (left > limitGame.left) x--;
      break;
    case 38:
      if (top > limitGame.top) {
        e.preventDefault();
        y--;
      };
      break;
    case 39:
      if (right < limitGame.right) x++;
      break;
    case 40:
      if (bottom < limitGame.bottom) {
        y++;
         e.preventDefault();
      };
      break;
  }
  
  elementBall.style.transform = `translate(${x * 10}px, ${y * 10}px)`;

}

export const shortcut = (e) => {
  if (e.key === "Control") {
    changeName();
  }
  if (e.key === "v") {
    changeMainStyle();
  }
  if (e.altKey && e.key === "z") {
    alert("Hola mundo");
  }
}


function changeName () {
    const name = prompt("Ingrese su nombre");
    document.querySelector("#titleName").innerHTML = name;   
}