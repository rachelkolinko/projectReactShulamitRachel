import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, addToCart } from "../actions/cartActions";
import { increaseQuantity, decreaseProductQuantity } from "../actions/productActions";
import '../css/myBasketPage.css';

export default function MyBasketPage() {
    const cart = useSelector(state => state.cartState.cart);
    const dispatch = useDispatch();

    const handleRemoveOne = (item) => {
        dispatch(removeFromCart(item.id));
        dispatch(increaseQuantity(item.id, 1));
      };
    
      const handleAddOne = (item) => {
        dispatch(addToCart(item));
        dispatch(decreaseProductQuantity(item.id));
      };

      const handleClearCart = () => {
        cart.forEach(item => {
          dispatch(increaseQuantity(item.id, item.cartQuantity));
        });
        dispatch(clearCart());
      };

    const total = cart.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);

    return (
        <div className="container">
            <h2>הסל שלי</h2>
            {cart.length === 0 ? (
                <p>הסל ריק</p>
            ):(
                <>
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.title} - {item.price} ש"ח
                            <button onClick={() => handleRemoveOne(item)}>-</button>
                            ({item.cartQuantity} כמות בסל)
                            <button onClick={() => handleAddOne(item)}>+</button>
                        </li>
                    ))}
                </ul>
                <h3>סה"כ לתשלום: ₪{total}</h3>
                <button onClick={handleClearCart}>רוקן סל</button>
                </>
            )}
        </div>
    );
}