import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import PaymentPage from './components/PaymentPage';
import MyBasketPage from './components/MyBasketPage';
import Top from './components/Top';
import imgFooter from './images/חתימת מייל.jpg';

function App() {
  return (
    <BrowserRouter>
      <Top></Top>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route path = "/products" element = {<ProductsPage />} />
        <Route path = "/payment" element = {<PaymentPage />} />
        <Route path = "/my-basket" element = {<MyBasketPage />} />
        <Route path = "/" element = {<HomePage />} />
      </Routes>
      <img src={imgFooter} className="App-logo" alt="footer" />
      </BrowserRouter>
  );
}

export default App;
