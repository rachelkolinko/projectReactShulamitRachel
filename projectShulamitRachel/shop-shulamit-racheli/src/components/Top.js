import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Top.css';
import logo from '../images/לוגו רקע שקוף (1).png';

const Top = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="top-nav">
            <div className="logo">
                <img src={logo} alt="Logo" id='logoNav'/>
            </div>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/payment" className="nav-link">תשלום</Link>
                <div className="pass-link">|</div>
                <Link to="/my-basket" className="nav-link">הסל שלי</Link>
                <div className="pass-link">|</div>
                <Link to="/products" className="nav-link">העבודות שלנו</Link>
                <div className="pass-link">|</div>
                <Link to="/" className="nav-link">עמוד הבית</Link>
            </div>

            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
        </nav>
    );
};

export default Top;