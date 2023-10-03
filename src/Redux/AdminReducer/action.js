import axios from "axios";
import { ADMIN_FAILURE, ADMIN_PRODUCT_ADD, ADMIN_PRODUCT_DELETE, ADMIN_PRODUCT_SUCCESS, ADMIN_PRODUCT_UPDATE, ADMIN_REQUEST, ADMIN_USERS_DELETE, ADMIN_USERS_SUCCESS } from "./actionType";
const url=`https://productdecisiveduck.onrender.com/products`
let usersURL = `https://woozy-luck-thunbergia.glitch.me`;
  
  export const getInventory = (dispatch) => {
    dispatch({type:ADMIN_REQUEST})
     axios.get(`${url}`).then((res)=>{
      dispatch({type:ADMIN_PRODUCT_SUCCESS,payload:res.data})
      //  console.log(res.data,"shiva eripuka")
    }).catch((error)=>{
      dispatch({type:ADMIN_FAILURE})
    })
  };
  
  export const getUsers = (dispatch) => {
    dispatch({type:ADMIN_REQUEST})
    return axios.get(`https://woozy-luck-thunbergia.glitch.me/users`).then((res)=>{
      dispatch({type:ADMIN_USERS_SUCCESS,payload:res.data})
      // console.log(res.data,"guru")
    }).catch((error)=>{
      dispatch({type:ADMIN_FAILURE})
    })
  };


  export const updateProduct = (id,updatedProduct) =>(dispatch)=> {
    dispatch({type:ADMIN_REQUEST})
    return axios.patch(`${url}/${id}`,updatedProduct).then((res)=>{
      dispatch({type:ADMIN_PRODUCT_UPDATE})
      getInventory(dispatch)
      
    }).catch((error)=>{
      dispatch({type:ADMIN_FAILURE})
    })
  };
  export const addProduct = (newProduct) =>(dispatch)=> {
    dispatch({type:ADMIN_REQUEST})
    return axios.post(`${url}`,newProduct).then((res)=>{
      dispatch({type:ADMIN_PRODUCT_ADD})
      getInventory(dispatch)
    }).catch((error)=>{
      dispatch({type:ADMIN_FAILURE})
    })
  };
  export const deleteProduct = (id) =>(dispatch)=> {
    dispatch({type:ADMIN_REQUEST})
    return axios.delete(`${url}/${id}`).then((res)=>{
      dispatch({type:ADMIN_PRODUCT_DELETE})
      console.log("shiva")
      getInventory(dispatch)
    }).catch((error)=>{
      dispatch({type:ADMIN_FAILURE})
    })
  };
 
  export const getSingleProduct=(id)=>(dispatch)=>{
    return axios.get(`${url}/${id}`)
  }
  export const updatedSingleProduct=(id,data)=>(dispatch)=>{
    console.log(id,data)
    return axios.patch(`${url}/${id}`,data)
  }

  export const getOrders = () => {
    return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
  };
  
  export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
  };



 export const deleteUser=(id) =>(dispatch)=> {
      dispatch({type:ADMIN_REQUEST})
      return axios.delete(`${usersURL}/users/${id}`).then((res)=>{
        dispatch({type:ADMIN_USERS_DELETE})
        console.log("shiva")
        dispatch(getUsers)
      }).catch((error)=>{
        dispatch({type:ADMIN_FAILURE})
      })
    };
  