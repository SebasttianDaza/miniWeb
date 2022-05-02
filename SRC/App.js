import { changeMainStyle, changeMainStyleLink } from "./Functions/btnhamburger.js";
import { startRelog, stopRelog, startAlarm, stopAlarm } from "./Utils/relog-digital.js";
import { countDown } from "./Functions/coutdown.js";
import digitalDraw from "./Functions/digitalDraw.js";
import { startKeyBoard, shortcut } from "./Functions/keyBoard.js";


const div = document.querySelector(".hour");

document.addEventListener("click", (e) => {
    if (e.target.matches("#btn") || e.target.matches(`#btn *`)) {
      changeMainStyle();
    }
    if (e.target.matches(".menuLink")) {
      changeMainStyleLink();
    }
    if (e.target.matches("#start")) {
       startRelog(div, e);
    }
    if (e.target.matches("#stop")) {
       stopRelog(div);
    }
    if (e.target.matches("#startAlarm")) {
       startAlarm(e);
    }
    if (e.target.matches("#stopAlarm")) {
       stopAlarm();
    }
    if (e.target.matches("#btnCountDown")) {
      countDown(
        document.getElementById("Date").value,
        document.getElementById("countDownTime"),
        e
      );
    }
    if (e.target.matches("#random")) {
      digitalDraw(document.querySelectorAll(".listDraw"));
    }

});

document.addEventListener("keydown", (e) => {
  shortcut(e);
  startKeyBoard(
    e,
    document.getElementById("background"),
    document.querySelector("#elementBall")
  );
});
