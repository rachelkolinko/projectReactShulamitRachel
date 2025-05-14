import React from 'react';
import '../css/ProductDescriptionPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import { decreaseProductQuantity } from '../actions/productActions';
const ProductDescriptionPage = () => {
    const { id } = useParams(); 
    const products = useSelector(state => state.productsState.products);
    const product = products[id - 1]; 
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
            <div className="product-description-page">
                <h1>{product.title}</h1>
                <img src={product.imageUrl} alt="Product" />
                <p>מחיר: {product.price}</p>
                <p>{product.description}</p>
                <button onClick={() => handleAddToCart(product)}>הוספה לסל</button>
            </div>
    );
};

export default ProductDescriptionPage;