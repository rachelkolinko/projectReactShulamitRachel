import React from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { decreaseProductQuantity } from '../actions/productActions';
import Item from './Item';
import '../css/ProductsPage.css';
import '../css/Item.css';

export default function ProductList(){
    const products = useSelector(state => state.productsState.products);
    // const dispatch = useDispatch();


    // const handleAddToCart = (product) => {
    //     if (product.count > 0) {
    //         dispatch(addToCart(product));
    //         dispatch(decreaseProductQuantity(product.id));
    //     } else {
    //         alert("המוצר אזל מהמלאי");
    //     }
    // };
    
    // const handleAddToCart = (product) => {
    //     if (product.count > 0) {
    //         dispatch(addToCart(product));
    //         dispatch(decreaseProductQuantity(product.id));
    //     } else {
    //         alert("המוצר אזל מהמלאי");
    //     }
    // };

    return (
        <div className="products-page">
            {/* <h2>מוצרים בחנות</h2> */}
            {/* <div className='br'></div> */}
            <div className="products-container">
                {products.map(product => (
                    
                  
                    <Item key={product.id}  product={product} className="item product-item"/>
                    // <li key={product.id}>
                    //     {product.name} - {product.price} ש"ח
                    //     ({product.quantity} במלאי)
                    //     <button onClick={() => handleAddToCart(product)}>הוסף לסל</button>
                    // </li>
                ))}
            </div>
        </div>
    );
}
