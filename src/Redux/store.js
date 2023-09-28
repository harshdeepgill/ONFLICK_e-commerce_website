import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {reducer as authReducer} from "../Redux/AuthReducer/reducer";
import { reducer as searchReducer } from "./SearchReducer/reducer";

const rootReducer = combineReducers({
    authReducer,
    searchReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))