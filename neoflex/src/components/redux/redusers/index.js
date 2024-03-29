import { initialState } from "../store";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const existingItemIndex = state.basket.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
      const updatedBasket = [...state.basket];
      updatedBasket[existingItemIndex].quantity += 1;

      return {
        ...state,
        basket: updatedBasket,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.priceNow,
      };
      } else {
      const newItem = { ...action.payload, quantity: 1 };
      return {
        ...state,
        basket: [...state.basket, newItem],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.priceNow,
      };
    }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.payload.id),
        totalItems: state.totalItems - action.payload.quantity,
        totalPrice: state.totalPrice - (action.payload.priceNow * action.payload.quantity),
      };
    case 'INCREASE_ITEM_QUANTITY':
      const updatedBasketOnIncrease = state.basket.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return {
        ...state,
        basket: updatedBasketOnIncrease,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.priceNow,
      };
    case 'DECREASE_ITEM_QUANTITY':
      const updatedBasketOnDecrease = state.basket.map(item => {
        if (item.id === action.payload.id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else if(item.id === action.payload.id && item.quantity > 1) {
          return item;
        }
        return item;
      });
      return {
        ...state,
        basket: updatedBasketOnDecrease,
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - action.payload.priceNow,
      };
    default:
      return state;
    }
};

export default rootReducer;