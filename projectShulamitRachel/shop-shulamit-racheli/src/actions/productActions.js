export const decreaseProductQuantity = (productId) => ({
    type: 'DECREASE_PRODUCT_QUANTITY',
    payload: productId
});

export const increaseQuantity = (productId, amount) => ({
    type: 'INCREASE_QUANTITY',
    payload: { productId, amount }
  });