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
import { Provider } from 'react-redux';
// import store from './redux/store';
import TerminationNoticePage from './components/TerminationNoticePage';
import store from './store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      
          <Top />
          <br />
          <br />
          <br />
          {/* <br /> */}
          <br />
          <br />
          <br />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/my-basket" element={<MyBasketPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/termination" element={<TerminationNoticePage />} />

            </Routes>
          </div>
          <Floor />
      
    </BrowserRouter></Provider>
    // <Provider store={store}>
    //   <div>
    //     <ProductList />
        
    //   </div>
    // </Provider>
  );
}

export default App;
