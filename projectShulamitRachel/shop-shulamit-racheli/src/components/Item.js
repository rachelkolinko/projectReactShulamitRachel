import React from 'react';
import '../css/Item.css';
import '../css/ProductsPage.css';
import { useDispatch , useSelector} from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { decreaseProductQuantity } from '../actions/productActions';
import { Link } from 'react-router-dom';
import { cartState } from '../reducers/cartReducer';

function Item({ product}) {
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.cartState.cart);
    const handleAddToCart = (product) => {
            if (product.count > 0) {
               console.log("product.count", product.count);
                dispatch(addToCart(product));
                dispatch(decreaseProductQuantity(product.id));
                console.log("product.count", product.count);
            } else {
                alert("המוצר אזל מהמלאי");
            }
        };


    return (
      <div className="item product-item" >
        <Link to={`/product/${product.id}`}><img src={product.imageUrl} alt="תמונה" /></Link>
        
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        {/* <h1>כמות במלאי: {product.count}</h1> */}
        <button onClick={() => handleAddToCart(product)} className='add-to-cart-btn'>הוספה לסל</button>
      </div>
    );
  }
  export default Item;
// import React from 'react';

// export default function Item({ product, onAddToCart }) {
//     return (
//         <div className="item">
//             <h3>{product.name}</h3>
//             <p>מחיר: {product.price} ש"ח</p>
//             <p>במלאי: {product.count}</p>
//             <button onClick={() => onAddToCart(product)}>הוסף לסל</button>
//         </div>
//     );
// }