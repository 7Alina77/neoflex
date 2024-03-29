export const addToBasket = (card) => ({
  type: 'ADD_TO_BASKET',
  payload: card,
});

export const removeFromBasket = (card) => ({
  type: 'REMOVE_FROM_BASKET',
  payload: card,
});

export const increaseItemQuantity = (card) => ({
  type: 'INCREASE_ITEM_QUANTITY',
  payload: card,
});

export const decreaseItemQuantity = (card) => ({
  type: 'DECREASE_ITEM_QUANTITY',
  payload: card,
});
