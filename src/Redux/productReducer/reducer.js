import { END_OF_PRODUCT_LIST, GET_FAILEAR, GET_NEW_SUCCESS, GET_REQUEST, GET_SUCCESS } from "./actionType";
const initialState = {
    isLoading:false,
    isError:false,
    isFinished: false,
    products:[]
}
export const reducer = (state=initialState, {type, payload})=>{
    switch(type){
        case GET_REQUEST:
            return {...state, isLoading:true}
        case GET_SUCCESS:
            return {...state, isLoading:false, isFinished:false, products:[...state.products,...payload]}
        case GET_NEW_SUCCESS:
            return {...state, isLoading:false,isFinished:false, products:payload}
        case GET_FAILEAR:
            return {...state, isLoading:false, isError:true}
        case END_OF_PRODUCT_LIST: return {
            ...state,
            isFinished: true
        }
        default:
            return state
    }
}