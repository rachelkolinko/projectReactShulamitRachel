import React from 'react';

const ProductDescriptionPage = (props) => {
    if (!props) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-description-page">
            <h1>{props.title}</h1>
            <img src={props.imageUrl} alt="Product" />
            <p>{props.description}</p>
            <p>Price: {props.price}</p>
            <button>הוספה לסל</button>
        </div>
    );
};

export default ProductDescriptionPage;