import React from 'react';
import '../css/Item.css';
import '../css/ProductsPage.css';
import { useDispatch , useSelector} from 'react-redux';
import { addToBasket , removeFromBasket} from '../redux/actions.js';


function Item(props) {
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.basket);

    return (
      <div className="item product-item" >
        <img src={props.imageUrl} alt="תמונה" />
        <h2>{props.title}</h2>
        <p>{props.price}</p>
        <button onClick={() => dispatch(addToBasket())} className='add-to-cart-btn'>הוספה לסל</button>
      </div>
    );
  }
  export default Item;
