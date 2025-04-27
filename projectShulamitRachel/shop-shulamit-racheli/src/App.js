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
import Floor from './components/Floor';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Top />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/my-basket" element={<MyBasketPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Floor />
      </div>
    </BrowserRouter>
  );
}

export default App;
