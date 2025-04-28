import React from 'react';
import TerminationNoticePage from './TerminationNoticePage';
import { useNavigate } from 'react-router-dom';
function PaymentPage() {
    const navigate = useNavigate();
    const handlePayment = () => {
        // Add payment handling logic here
        navigate('/termination');
        // alert('תשלום בוצע בהצלחה!');
    };

    // onSubmit={(e) => {
    //     e.preventDefault();
    //     handlePayment();
    // }}

    const isFormValid = () => {
        const cardNumber = document.querySelector('input[placeholder="1234 5678 9012 3456"]').value;
        const expiryDate = document.querySelector('input[placeholder="MM/YY"]').value;
        const cvv = document.querySelector('input[placeholder="123"]').value;

        return cardNumber && expiryDate && cvv;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            handlePayment();
        } else {
            alert('אנא מלא את כל השדות!');
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>דף התשלום</h1>
            <p>:אנא הזן את פרטי התשלום שלך למטה</p>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        <input type="text" placeholder="1234 5678 9012 3456" required />
                        :מספר כרטיס
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        <input type="text" placeholder="MM/YY" required />
                        :תוקף
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        <input type="text" placeholder="123" required />
                        :CVV
                    </label>
                </div>
                <button type="submit" onClick={handlePayment}>בצע הזמנה</button>
            </form>
        </div>
    );
};

export default PaymentPage;