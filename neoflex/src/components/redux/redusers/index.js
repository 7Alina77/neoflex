const initialState = {
  basket: [],
  totalItems: 0,
  totalPrice: 0
};

const rootReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.priceNow,
      };
      case 'REMOVE_FROM_BASKET':
        // const updatedBasket = state.basket.filter(item => item.id !== action.payload);
        // const removedItem = state.basket.find(item => item.id === action.payload);
        // const updatedTotalItems = state.totalItems - 1;
        // const updatedTotalPrice = state.totalPrice - removedItem.priceNow;
        return {
          ...state,
          basket: state.basket.filter(item => item.id !== action.payload.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - action.payload.priceNow,
        };
    default:
      return state;
    }
};

export default rootReducer;