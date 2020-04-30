import { createStore } from "redux";

export const switchThemeColor = () => {
    return {
        type: "SWITCH_THEME_COLOR",
    };
};

const colorThemeReducer = (themeColorIsLight = false, action) => {
    switch (action.type) {
        case "SWITCH_THEME_COLOR":
            return !themeColorIsLight;
        default:
            return themeColorIsLight;
    }
};

export default createStore(
    colorThemeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
