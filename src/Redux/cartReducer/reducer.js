import { ADD_TO_CART } from "./actionType";

const initialState = {
    items: [], 
    total: 0, 
  };
export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const updatedItems = [...state.items, action.payload];
        const updatedTotal = state.total + action.payload.price;
        return {
          ...state,
          items: updatedItems,
          total: updatedTotal,
        };
      default:
        return state;
    }
  };