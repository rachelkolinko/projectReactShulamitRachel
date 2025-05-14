import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, addToCart } from "../actions/cartActions";
import { increaseQuantity, decreaseProductQuantity } from "../actions/productActions";
import '../css/myBasketPage.css';
import { Link } from "react-router-dom";

export default function MyBasketPage() {
    const cart = useSelector(state => state.cartState.cart);
    const dispatch = useDispatch();

    const handleRemoveOne = (item) => {
        dispatch(removeFromCart(item.id));
        dispatch(increaseQuantity(item.id, 1));
      };
    
      const handleAddOne = (item) => {
        console.log("item", item);
        dispatch(addToCart(item));
        dispatch(decreaseProductQuantity(item.id));
      };

      const handleClearCart = () => {
        cart.forEach(item => {
          dispatch(increaseQuantity(item.id, item.cartQuantity));
        });
        dispatch(clearCart());
      };
      const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.-]/g, "")); // הסרת סימנים לא מספריים
    return sum + price * (item.cartQuantity || 0);
}, 0);
    // const total = cart.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);
    // const total = cart.reduce((sum, item) => sum + (Number(item.price) ) * (Number(item.cartQuantity) ), 0);

    return (
        <div className="my-basket-page">
            {/* <h2>הסל שלי</h2> */}
            {cart.length === 0 ? (
                <div className="products-not-found">
                    <br />
                    <br />
                    <p>הסל ריק</p>
                    <Link to="/products">
                        <button className="to-products">לחצו כאן כדי להוסיף מוצרים</button>
                    </Link>
                    
                </div>
            ):(
                <div className="producst-block">
                        <div className="total-price">
                            <h3>סה"כ לתשלום: ₪{total}</h3>
                            <Link to="/products">
                                <button>לחצו כאן כדי להוסיף מוצרים</button>
                            </Link>
                            <button onClick={handleClearCart}>רוקן סל</button>
                            <Link to="/payment">
                                <button>לתשלום</button>
                            </Link>
                    </div>
                    <ul className="products-list">
                        {cart.map(item => (
                            <li key={item.id} className="products-item">
                                <div><img src={item.imageUrl} alt={item.title} className="product-img" /></div>
                                <div><p className="product-name_price">{item.title} - {item.price} ש"ח</p></div>
                                <div className="product-count">
                                    <button onClick={() => handleAddOne(item)} className="add_minuss-product">+</button>
                                    <p className="count">{item.cartQuantity}</p>
                                    <button onClick={() => handleRemoveOne(item)} className="add_minuss-product">-</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* <div className="total-price">
                        <h3>סה"כ לתשלום: ₪{total}</h3>
                        <Link to="/products">
                            <button>לחצו כאן כדי להוסיף מוצרים</button>
                        </Link>
                        <button onClick={handleClearCart}>רוקן סל</button>
                        <Link to="/payment">
                            <button>לתשלום</button>
                        </Link>
                    </div> */}
                </div>
            )}
        </div>
    );
}