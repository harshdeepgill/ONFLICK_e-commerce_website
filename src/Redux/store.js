import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {reducer as authReducer} from "../Redux/AuthReducer/reducer";
import { reducer as searchReducer } from "./SearchReducer/reducer";
import {reducer as productReducer} from "./productReducer/reducer"

const rootReducer = combineReducers({
    authReducer,
    searchReducer,
    productReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))