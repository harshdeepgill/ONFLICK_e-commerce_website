import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./actionTypes"

const initState = {
    isLoading: false,
    isError: false,
    products: []
}

export const reducer = (state = initState, {type, payload})=>{
    switch(type){
        case SEARCH_REQUEST: return {
            ...state,
            isLoading: true
        }
        case SEARCH_SUCCESS: return {
            ...state,
            isLoading: false,
            products: payload
        }
        case SEARCH_FAILURE: return {
            ...state,
            isLoading: false,
            isError: true
        }
        default: return state
    }
}