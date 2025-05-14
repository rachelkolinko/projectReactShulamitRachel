import React from 'react';
import { useSelector, useDispatch }  from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { decreaseProductQuantity } from '../actions/productActions';
import Item from './Item';
import '../css/ProductsPage.css';
import '../css/Item.css';

export default function ProductList(){
    const products = useSelector(state => state.productsState.products);
    function filterProduct(products, category) {
        return products.filter(function(product) {
            return category == product.category;
        });
    }
    const category1 = filterProduct(products, 1);
    const category2 = filterProduct(products, 2);
    const category3 = filterProduct(products, 3);
    const category4 = filterProduct(products, 4);

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
            <br />
            <br />
            <div className='category'>מוצרים בהזמנה אישית</div>
            <div className="products-container">{category1.map(product => (<Item key={product.id}  product={product} className="item product-item"/>))}</div>
            <div className='category'>קישוטי קיר</div>
            <div className="products-container">{category2.map(product => (<Item key={product.id}  product={product} className="item product-item"/>))}</div>
            <div className='category'>מגשים לאוכל</div>
            <div className="products-container">{category3.map(product => (<Item key={product.id}  product={product} className="item product-item"/>))}</div>
            <div className='category'>ועוד המון הפתעות...</div>
            <div className="products-container">{category4.map(product => (<Item key={product.id}  product={product} className="item product-item"/>))}</div>
        </div>
    );
}





function filterProduct(array, threshold) {
    return array.filter(function(number) {
        return number > threshold;
    });
}

// דוגמה לשימוש
const numbers = [1, 5, 10, 15, 20];
const result = filterProduct(numbers, 10);
console.log(result); // פלט: [15, 20]
