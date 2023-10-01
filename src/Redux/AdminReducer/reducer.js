import { ADMIN_FAILURE, ADMIN_PRODUCT_ADD, ADMIN_PRODUCT_DELETE, ADMIN_PRODUCT_SUCCESS, ADMIN_PRODUCT_UPDATE, ADMIN_REQUEST, ADMIN_USERS_SUCCESS } from "./actionType"

const initialState = {
    isLoading : false,
    isError : false,
    products:[],
    users:[],
  }
  
  export const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADMIN_REQUEST : {
            return {
                ...state,
                isLoading : true
            }
        }
        case ADMIN_PRODUCT_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                products : payload
            }
        }
        case ADMIN_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }
        case ADMIN_PRODUCT_ADD:
            return{
                ...state,
                isLoading : false,
                isError : false
            }
        case ADMIN_PRODUCT_DELETE:
            return{
                ...state,
                isLoading : false,
                isError : false
            }
        case ADMIN_PRODUCT_UPDATE:
            return{
                ...state,
                isLoading : false,
                isError : false
            }
        case ADMIN_USERS_SUCCESS:
            return{
                ...state,
                users:payload,
                isLoading : false,
                isError : false
            }
         default : {
            return state
        }
    }
  }