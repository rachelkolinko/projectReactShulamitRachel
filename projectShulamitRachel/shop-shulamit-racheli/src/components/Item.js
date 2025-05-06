import React from 'react';
import '../css/Item.css';
import '../css/ProductsPage.css';
import { useDispatch , useSelector} from 'react-redux';
import { addToBasket , removeFromBasket} from '../redux/actions.js';
import { addToCart } from '../actions/cartActions';
import { decreaseProductQuantity } from '../actions/productActions';

function Item({product}) {
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.basket);
    const handleAddToCart = (product) => {
            if (product.count > 0) {
                dispatch(addToCart(product));
                dispatch(decreaseProductQuantity(product.id));
            } else {
                alert("המוצר אזל מהמלאי");
            }
        };


    return (
      <div className="item product-item" >
        <img src={product.imageUrl} alt="תמונה" />
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <button onClick={() => handleAddToCart(product)} className='add-to-cart-btn'>הוספה לסל</button>
      </div>
    );
  }
  export default Item;
