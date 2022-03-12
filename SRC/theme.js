import { DOM } from './updown.js';
import { changeClassList, changeClassListNode } from "./changeStyle.js";


const currentTheme = localStorage.getItem("theme");

export const identifyTheme = (spanBtn) => {
  
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)"),
      selectorsWords = DOM.querySelectorAll("[data-theme]"),
      selectorsDiv = DOM.querySelectorAll("[dataBack-theme]");
    
    //const theme = localStorage.getItem("theme");
    if (prefersDarkScheme.matches) {
      changeClassList(document.body, "light-theme");
      spanBtn.textContent = "brightness_6";
      changeClassListNode(selectorsWords, "dark-theme-others");
      selectorsDiv.forEach((selector) => {
        selector.classList.toggle("dark-background-others");
      });
    } else {
      changeClassList(document.body, "dark-theme");
      spanBtn.textContent = "brightness_5";
      changeClassListNode(selectorsWords, "light-theme-others");
      selectorsDiv.forEach((selector) => {
        selector.classList.toggle("light-background-others");
      });
    }
}