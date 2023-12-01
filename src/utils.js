const darkThemeColors = {
    'color-background-primary': '#333333',
    'color-background-alternate': '#222222',
    'color-text-primary': '#ffffff',
    'color-text-secondary': '#cccccc',
    'background-image': 'url(dark_bg.jpg)',
    
}
const lightThemeColors = {
    'color-background-primary': '#ffffff',
    'color-background-alternate': '#f5f5f5',
    'color-text-primary': '#333333',
    'color-text-secondary': '#666666',
    'background-image': 'url(light_bg.jpg)',
}
var transparency = 'ff'
function setDarkTheme() {
    const root = document.documentElement;
    root.style.setProperty('--color-background-primary', darkThemeColors['color-background-alternate']);
    root.style.setProperty('--color-background-alternate', darkThemeColors['color-background-alternate']);
    root.style.setProperty('--color-text-primary', darkThemeColors['color-text-primary']);
    root.style.setProperty('--color-text-secondary', darkThemeColors['color-text-secondary']);
    root.style.setProperty('--background-img', darkThemeColors['background-image']);
    const navbarBG = getComputedStyle(root).getPropertyValue('--navbar-bg');
    if (navbarBG.length === 9) {
        transparency = navbarBG.slice(7);
    }
    root.style.setProperty('--navbar-bg', darkThemeColors['color-background-primary'] + transparency);
}
function setLightTheme() {
    const root = document.documentElement;
    root.style.setProperty('--color-background-primary', lightThemeColors['color-background-primary']);
    root.style.setProperty('--color-background-alternate', lightThemeColors['color-background-alternate']);
    root.style.setProperty('--color-text-primary', lightThemeColors['color-text-primary']);
    root.style.setProperty('--background-img', lightThemeColors['background-image']);
    const navbarBG = getComputedStyle(root).getPropertyValue('--navbar-bg');
    root.style.setProperty('--color-text-secondary', lightThemeColors['color-text-secondary']);
    if (navbarBG.length === 9) {
        transparency = navbarBG.slice(7);
    }
    root.style.setProperty('--navbar-bg', lightThemeColors['color-background-primary'] + transparency);
}

export { setDarkTheme, setLightTheme };
