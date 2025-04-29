import React from 'react';
import '../css/ProductDescriptionPage.css';


const ProductDescriptionPage = (props) => {
    if (!props) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-description-page">
            <h1>{props.title}</h1>
            <img src={props.imageUrl} alt="Product" />
            <p>מחיר: {props.price}</p>
            <p>{props.description}</p>
            <button>הוספה לסל</button>
        </div>
    );
};

export default ProductDescriptionPage;