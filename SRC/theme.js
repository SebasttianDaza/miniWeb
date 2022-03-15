import { DOM } from './updown.js';
import { changeClassList, changeClassListNode } from "./changeStyle.js";

export const identifyTheme = (spanBtn) => {
  
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)"),
      selectorsWords = DOM.querySelectorAll("[data-theme]"),
      selectorsDiv = DOM.querySelectorAll("[dataBack-theme]");

    const currentTheme = localStorage.getItem("theme");
    
    if (currentTheme === "dark") {
      changeThemeDark(spanBtn, selectorsWords, selectorsDiv);
    } else if (currentTheme === "light") {
      changeThemeLight(spanBtn, selectorsWords, selectorsDiv);
    }
    

    DOM.addEventListener("click", (e) => {
      if (e.target.matches("#btnTheme") || e.target.matches(`#btnTheme *`)) {
        let theme = "";
        if (prefersDarkScheme.matches) {
          changeThemeLight(spanBtn, selectorsWords, selectorsDiv);
          theme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
        }
        else {
          changeThemeDark(spanBtn, selectorsWords, selectorsDiv);
          theme = document.body.classList.contains("dark-theme") 
            ? "dark" 
            : "light";  
        }
        localStorage.setItem("theme", theme);
      }
    })
}


const changeThemeLight = (spanBtn, selectorsWords, selectorsDiv) => {
  changeClassList(document.body, "light-theme");
  spanBtn.textContent = "brightness_7";
  changeClassListNode(selectorsWords, "dark-theme-others");
  changeClassListNode(selectorsDiv, "light-background-others");
}

const changeThemeDark = (spanBtn, selectorsWords, selectorsDiv) => {
  changeClassList(document.body, "dark-theme");
  spanBtn.textContent = "brightness_6";
  changeClassListNode(selectorsWords, "light-theme-others");
  changeClassListNode(selectorsDiv, "dark-background-others");
}