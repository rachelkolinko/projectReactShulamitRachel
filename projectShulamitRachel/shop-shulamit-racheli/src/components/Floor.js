import React from 'react';
import '../css/floor.css';

import imgFooter from '../images/מצגת1.png';
import imgFooterMobile from '../images/חתימת מייל.jpg'; // Assuming you have a mobile version of the image

const Floor = () => {
    return (
        <footer>
            <img src={imgFooter} className="App-logo imgFooter" alt="footer" style={{ width: '100%', height: 'auto' }} />
            
            <img src={imgFooterMobile} className="App-logo imgFooterMobile" alt="footer" style={{ width: '100%', height: 'auto' }} />
        </footer>
    );
};

export default Floor;