export const TOGGLE_THEME = 'TOGGLE_THEME';
export const DARK_THEME = 'DARK_THEME';
export const LIGHT_THEME = 'LIGHT_THEME';
export const TOGGLE_REFRESH = 'TOGGLE_REFRESH';

export const toggleThemeAction = () => {
    return {
        type: TOGGLE_THEME
    };
};
export const darkThemeAction = () => {
    return {
        type: DARK_THEME
    };
};
export const lightThemeAction = () => {
    return {
        type: LIGHT_THEME
    };
};
export const toggleRefreshAction = () => {
    return {
        type: TOGGLE_REFRESH
    };
};