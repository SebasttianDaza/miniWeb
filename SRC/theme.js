
export const identifyTheme = () => {
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const userPrefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  if (userPrefersDark) {
    console.log("User prefers a dark interface");
  }
  if (userPrefersLight) {
    console.log("User prefers a light interface");
  }
}