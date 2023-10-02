import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCSESS, SIGNUP_SUCCESS, WISHLIST_ADD } from "./actionType"

let URL = "https://woozy-luck-thunbergia.glitch.me";




export const login = (user) => (dispatch) => {
     dispatch({type:LOGIN_REQUEST});
 return  axios.get(`${URL}/users/${user.id}`)
}

export const addWish = (id,newWishlist) =>  (dispatch) => {
        axios.patch(`${URL}/users/${id}`, {
                wishlist: newWishlist
        })
        .then((res) => {
                dispatch({type:WISHLIST_ADD, payload:res.data})
        })
        .catch((err) => {
                dispatch({type:LOGIN_FAILURE})
        })
}
  

export const register = (user) => (dispatch) =>{
        dispatch({type:LOGIN_REQUEST});
   return axios.post(`${URL}/users`,user)
}