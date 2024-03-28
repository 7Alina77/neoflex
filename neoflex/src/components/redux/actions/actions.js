export const addToBasket = (card) => ({
  type: 'ADD_TO_BASKET',
  payload: card,
});

export const removeFromBasket = (card) => ({
  type: 'REMOVE_FROM_BASKET',
  payload: card,
});
