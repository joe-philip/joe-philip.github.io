import { DARK_THEME, LIGHT_THEME, TOGGLE_REFRESH, TOGGLE_THEME } from "../actions/toggleTheme";

const initialState = {
    theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 0 : 1,
    refresh: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME: return {
            ...state,
            theme: state.theme === 1 ? 0 : 1
        }
        case DARK_THEME: return {
            ...state,
            theme: 0
        }
        case LIGHT_THEME: return {
            ...state,
            theme: 1
        }
        case TOGGLE_REFRESH: return {
            ...state,
            refresh: !state.refresh
        }
        default: return state
    }
}

export default reducer;