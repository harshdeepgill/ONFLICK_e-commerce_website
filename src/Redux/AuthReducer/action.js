import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCSESS, SIGNUP_SUCCESS } from "./actionType"

let URL = "https://woozy-luck-thunbergia.glitch.me";




export const login = (user) => (dispatch) => {
     dispatch({type:LOGIN_REQUEST});
 return  axios.get(`${URL}/users/${user.id}`)
  
}

  

export const register= (user) => (dispatch) =>{
        dispatch({type:LOGIN_REQUEST});
      
   return axios.post(`${URL}/users`,{...user,image:"",cart:[],orders:[]}).then((res)=>{
      
      dispatch({type:SIGNUP_SUCCESS});
    }).catch((err)=>{
      dispatch({type:LOGIN_FAILURE})
    })
   
}