
export const identifyTheme = (spanBtn) => {
  
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    //const theme = localStorage.getItem("theme");
    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light-theme");
      spanBtn.innerHTML = "brightness_6";
    } else {
      document.body.classList.toggle("dark-theme");
      spanBtn.innerHTML = "brightness_5";
    }
}