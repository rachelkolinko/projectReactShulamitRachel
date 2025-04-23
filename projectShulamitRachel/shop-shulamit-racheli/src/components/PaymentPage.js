import React from 'react';

const PaymentPage = () => {
    const handlePayment = () => {
        // Add payment handling logic here
        alert('Payment processed successfully!');
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Payment Page</h1>
            <p>Please enter your payment details below:</p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handlePayment();
                }}
            >
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Card Number:
                        <input type="text" placeholder="1234 5678 9012 3456" required />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Expiry Date:
                        <input type="text" placeholder="MM/YY" required />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        CVV:
                        <input type="text" placeholder="123" required />
                    </label>
                </div>
                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
};

export default PaymentPage;