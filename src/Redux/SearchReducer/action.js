import axios from "axios";
import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./actionTypes"


export const getSearch = (val) => (dispatch) =>{
    dispatch({type: SEARCH_REQUEST});
    axios.get(`https://productdecisiveduck.onrender.com/products`, {
      params: {
        _limit: 6,
        _page: 1,
        q: val
      }
    })
    .then((res)=>{
        console.log(res.data)
        dispatch({type:SEARCH_SUCCESS, payload: res.data});
    })
    .catch((err)=>{
        dispatch({type: SEARCH_FAILURE})
    })
}