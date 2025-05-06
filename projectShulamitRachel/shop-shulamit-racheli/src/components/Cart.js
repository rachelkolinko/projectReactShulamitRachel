import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../actions/cartActions";
import { increaseQuantity } from "../actions/productActions";

export default function Cart() {
    const cart = useSelector(state => state.cartState.cart);
    const dispatch = useDispatch();

    const handleRemoveOne = (item) => {
        dispatch(removeFromCart(item.id));
        dispatch(increaseQuantity(item.id, 1));
      };
    
      const handleClearCart = () => {
        cart.forEach(item => {
          dispatch(increaseQuantity(item.id, item.cartQuantity));
        });
        dispatch(clearCart());
      };

    const total = cart.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);

    return (
        <div>
            <h2>הסל שלי</h2>
            {cart.length === 0 ? (
                <p>הסל ריק</p>
            ):(
                <>
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.title} - {item.price} ש"ח
                            ({item.cartQuantity} כמות בסל)
                            <button onClick={() => handleRemoveOne(item)}>הסר 1</button>
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