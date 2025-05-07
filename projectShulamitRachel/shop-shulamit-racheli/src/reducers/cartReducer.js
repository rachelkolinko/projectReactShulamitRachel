const initialState = {
    cart: []
};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const itemInCart = state.cart.find(item => item.id === action.payload.id);
        if (itemInCart) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, cartQuantity: item.cartQuantity + 1 }
                : item
            )
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, cartQuantity: 1 }]
          };
        }
      case 'REMOVE_FROM_CART':
        return {
            ...state,
            cart: state.cart.map(item =>
                item.id === action.payload
                ? { ...item, cartQuantity: item.cartQuantity - 1}
            :item            
            ).filter(item => Number(item.cartQuantity) > 0)
        };
      case 'CLEAR_CART':
        return { cart: [] };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  