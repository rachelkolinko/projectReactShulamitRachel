import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/paymentPage.css';
import { useSelector,useDispatch } from 'react-redux';
import { increaseQuantity } from '../actions/productActions';
import { clearCart } from '../actions/cartActions';

const PaymentPage = () => {
  const cart = useSelector(state => state.cartState.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    cart.forEach(item => {
      dispatch(increaseQuantity(item.id, item.cartQuantity));
    });
    dispatch(clearCart());
  };


  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const isFormValid = Object.values(form).every((value) => value.trim() !== '');
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.-]/g, "")); 
    return sum + price * (item.cartQuantity || 0);
}, 0);
  return (
    <div className="payment-container">
      <h1 className="payment-title">דף תשלום</h1>
      <h3 className='sum'>סה"כ לתשלום: ₪{total}</h3>
      <form className="payment-form">
        <input className="payment-input" name="firstName" placeholder="שם פרטי" onChange={handleChange} />
        <input className="payment-input" name="lastName" placeholder="שם משפחה" onChange={handleChange} />
        <input className="payment-input" name="email" placeholder="כתובת דוא״ל" onChange={handleChange} />
        <input className="payment-input" name="address" placeholder="כתובת" onChange={handleChange} />
        <input className="payment-input" name="cardNumber" placeholder="מספר כרטיס" onChange={handleChange} />
        <input className="payment-input" name="expiry" placeholder="תוקף" onChange={handleChange} />
        <input className="payment-input" name="cvv" placeholder="CVV" onChange={handleChange} />

        {isFormValid ? (
          <Link to="/termination">
            <button type="button" className="payment-button" onClick={handleClearCart}>בצע הזמנה</button>
          </Link>
        ) : (
          <button type="button" className="payment-button" disabled>יש למלא את כל השדות</button>
        )}
      </form>
    </div>
  );
};

export default PaymentPage;
