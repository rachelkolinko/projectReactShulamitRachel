import React from 'react';

function Item(props) {
    return (
      <div>
        <img src={props.imageUrl} alt="תמונה" />
        <h2>{props.title}</h2>
        <p>{props.price}</p>
        <button>הוספה לסל</button>
      </div>
    );
  }
  export default Item;
