function setDarkTheme() {
    const root = document.documentElement;
    root.style.setProperty('--color-background-primary', '#333333');
    root.style.setProperty('--color-background-alternate', '#222222');
    root.style.setProperty('--color-text-primary', '#FFFFFF');
    root.style.setProperty('--color-text-secondary', '#CCCCCC');
}
function setLightTheme() {
    const root = document.documentElement;
    root.style.setProperty('--color-background-primary', '#ffffff');
    root.style.setProperty('--color-background-alternate', '#f5ff5f5');
    root.style.setProperty('--color-text-primary', '#333333');
    root.style.setProperty('--color-text-secondary', '#666666');
}

export { setDarkTheme, setLightTheme };
