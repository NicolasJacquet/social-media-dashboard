import { createStore, combineReducers } from "redux";
import colorThemeReducer from "./colorThemeReducer";
import followersReducer from "./followersReducer";
import statsReducer from "./statsReducer";

const initialState = {};

const reducers = combineReducers({
    theme: colorThemeReducer,
    followersData: followersReducer,
    stats: statsReducer,
});

const store = createStore(reducers, initialState);

export default store;
