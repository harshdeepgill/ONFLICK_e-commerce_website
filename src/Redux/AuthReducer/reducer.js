import { CART_ADD, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCSESS, SIGNOUT, SIGNUP_SUCCESS, WISHLIST_ADD } from "./actionType";

const intialstate = {
    isAuth:false,
    isLoading:false,
    isError:false,
    name: "",
    wishlist: [],
    cart: [],
    orders:[],
    id: ""
};


export const reducer = (state= intialstate,{type,payload}) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading : true
            }
        case LOGIN_SUCSESS:
            return{
                ...state,
                name: payload.name,
                wishlist: payload.wishlist,
                orders:payload.orders,
                id: payload.id,
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
            case WISHLIST_ADD: return {
                ...state,
                wishlist: payload.wishlist
            }
            case CART_ADD: return {
                ...state,
                cart: payload.cart
            }
            case SIGNOUT: return intialstate
        default:
            return state;
    }
}