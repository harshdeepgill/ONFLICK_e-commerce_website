import axios from "axios"
import { END_OF_PRODUCT_LIST, GET_FAILEAR, GET_NEW_SUCCESS, GET_REQUEST, GET_SUCCESS } from "./actionType"

export const getProducts = (parameter) => (dispatch) =>{
    dispatch({type:GET_REQUEST})
    axios.get(`https://productdecisiveduck.onrender.com/products`, {
        params: parameter
    })
    .then((res)=>{
        if(res.data.length == 0){
            dispatch({type: END_OF_PRODUCT_LIST})
        }else{
            dispatch({type:GET_SUCCESS, payload:res.data})
        }
    })
    .catch((err)=>{
        dispatch({type:GET_FAILEAR})
    })
}

export const getFirstProducts = (parameter) => (dispatch) => {
    dispatch({type:GET_REQUEST})
    axios.get(`https://productdecisiveduck.onrender.com/products`, {
        params: parameter
    })
    .then((res)=>{
        dispatch({type:GET_NEW_SUCCESS, payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_FAILEAR})
    })
}