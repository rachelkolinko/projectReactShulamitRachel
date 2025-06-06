import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, addToCart } from "../actions/cartActions";
import { increaseQuantity, decreaseProductQuantity } from "../actions/productActions";
import '../css/myBasketPage.css';
import { Link } from "react-router-dom";

export default function MyBasketPage() {
    const products = useSelector(state => state.productsState.products);
    const cart = useSelector(state => state.cartState.cart);
    const dispatch = useDispatch();

    const handleRemoveOne = (item) => {
       
            dispatch(removeFromCart(item.id));
            dispatch(increaseQuantity(item.id));
        
      };
    
      const handleAddOne = (item) => {
        const count = products.find(product => product.id === item.id).count;
        if(count > 0){
        dispatch(addToCart(item));
        dispatch(decreaseProductQuantity(item.id));
    }
    else{
        alert("המוצר אזל מהמלאי");
    }
        
      };

      const handleClearCart = () => {
        cart.forEach(item => {
          dispatch(increaseQuantity(item.id, item.cartQuantity));
        });
        dispatch(clearCart());
      };
      const total = cart.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^\d.-]/g, "")); 
        return sum + price * (item.cartQuantity || 0);
       }, 0);

    return (
        <div className="my-basket-page">
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
                </div>
            )}
        </div>
    );
}