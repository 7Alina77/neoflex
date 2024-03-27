export function calculateTotal(cart) {
  let total = 0;
  for (let item of cart) {
    total += item.price * item.quantity;
  }
  return total;
}

export function calculateQuantity(cart) {
  const quantities = {};
  for (let item of cart) {
    if (quantities[item.id]) {
      quantities[item.id] += 1;
    } else { 
      quantities[item.id] = 1;
    }
  }

  const cartWithQuantity = cart.map(item => ({
    ...item,
    quantity: quantities[item.id] 
  }));
  
  return cartWithQuantity;
}