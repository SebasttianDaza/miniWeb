import { changeMainStyle } from './btnhamburger.js';

let x = 0,
  y = 0;

export function startKeyBoard (e, game,  elementBall) {

  const { left, right, top, bottom } = numberEnter(elementBall);
  

  //No olvidar hacer las function with Math.floor and Math.round
  switch (e.keyCode) {
    case 37:
      if (left > numberEnter(game).left) x--;
      break;
    case 38:
      if (top > numberEnter(game).top) {
        e.preventDefault();
        y--;
      };
      break;
    case 39:
      if (right < numberEnter(game).right) x++;
      break;
    case 40:
      if (bottom < numberEnter(game).bottom) {
        y++;
         e.preventDefault();
      };
      break;
  }
  
  elementBall.style.transform = `translate(${x * 10}px, ${y * 10}px)`;

}

const numberEnter = (element) => {
  const { left, right, top, bottom } = element.getBoundingClientRect();
  Math.round(left);
  Math.round(right);
  Math.round(top);
  Math.round(bottom);
  return { left, right, top, bottom };
}

export const shortcut = (e) => {
  if (e.key === "Shift") {
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