import React from 'react';
import '../css/Item.css';
import '../css/ProductsPage.css';


function Item(props) {
    return (
      <div className="item product-item" >
        <img src={props.imageUrl} alt="תמונה" />
        <h2>{props.title}</h2>
        <p>{props.price}</p>
        <button>הוספה לסל</button>
      </div>
    );
  }
  export default Item;
