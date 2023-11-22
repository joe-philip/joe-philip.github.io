import { DARK_THEME, LIGHT_THEME, TOGGLE_THEME } from "../actions/toggleTheme";

const initialState = {
    theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 0 : 1
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
        default: return state
    }
}

export default reducer;