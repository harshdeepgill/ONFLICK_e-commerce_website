import axios from "axios";
import { CART_ADD, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCSESS, SIGNUP_SUCCESS, WISHLIST_ADD } from "./actionType"

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

export const addCart = (id, newCart) => (dispatch) => {
        axios.patch(`${URL}/users/${id}`, {
                cart: newCart
        })
        .then((res) => {
                dispatch({type:CART_ADD, payload:res.data})
        })
        .catch((err) => {
                dispatch({type:LOGIN_FAILURE})
        })
}
  

export const register = (user) => (dispatch) =>{
        dispatch({type:LOGIN_REQUEST});
   return axios.post(`${URL}/users`,user)
}