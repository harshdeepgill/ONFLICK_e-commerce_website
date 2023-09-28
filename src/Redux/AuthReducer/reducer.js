import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCSESS, SIGNUP_SUCCESS } from "./actionType";

const intialstate = {
    isAuth:false,
    
    isLoading:false,
    isError:false,
    
};


export const reducer = (state= intialstate,{type,payload}) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        case LOGIN_SUCSESS:
            return{
                ...state,
                isAuth :true,
               
                isLoading : false,
                isError : false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading : false,
                isError : true,
                
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false
            }
        default:
            return state;
    }
}