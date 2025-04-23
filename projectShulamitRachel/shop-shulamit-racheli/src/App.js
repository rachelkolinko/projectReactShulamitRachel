import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import PaymentPage from './components/PaymentPage';
import MyBasketPage from './components/MyBasketPage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to = "/products">products</Link>
        <Link to = "/payment">payment</Link>
        <Link to = "/my-basket">my-basket</Link>
        <Link to = "/">home</Link>
      </nav>
      <Routes>
        <Route path = "/products" element = {<ProductsPage />} />
        <Route path = "/payment" element = {<PaymentPage />} />
        <Route path = "/my-basket" element = {<MyBasketPage />} />
        <Route path = "/" element = {<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
