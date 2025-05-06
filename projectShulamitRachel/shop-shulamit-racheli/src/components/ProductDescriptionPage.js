import React from 'react';
import '../css/ProductDescriptionPage.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDescriptionPage = () => {
    const { id } = useParams(); // שליפת ה-id מה-URL
    const products = useSelector(state => state.productsState.products);
    // const dispatch = useDispatch();

    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-description-page">
            <h1>{products.title}</h1>
            <img src={products.imageUrl} alt="Product" />
            <p>מחיר: {products.price}</p>
            <p>{products.description}</p>
            <button>הוספה לסל</button>
        </div>
    );
};

export default ProductDescriptionPage;