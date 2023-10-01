import { GET_FAILEAR, GET_REQUEST, GET_SUCCESS } from "./actionType";
const initialState = {
    isLoading:false,
    isError:false,
    products:[]
}
export const reducer = (state=initialState, {type, payload})=>{
    switch(type){
        case GET_REQUEST:
            return {...state, isLoading:true}
        case GET_SUCCESS:
            return {...state, isLoading:false, products:[...state.products,...payload]}
        case GET_FAILEAR:
            return {...state, isLoading:false, isError:true}
        default:
            return state
    }
}