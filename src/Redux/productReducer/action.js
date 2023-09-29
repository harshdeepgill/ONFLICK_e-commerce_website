import axios from "axios"
import { GET_FAILEAR, GET_REQUEST, GET_SUCCESS } from "./actionType"

export const getProducts = () => (dispatch) =>{
    dispatch({type:GET_REQUEST})
    axios.get(`https://productdecisiveduck.onrender.com/products`)
    .then((res)=>{
        dispatch({type:GET_SUCCESS, payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:GET_FAILEAR})
    })
}