import React from 'react';

const TerminationNoticePage = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Termination Notice</h1>
            <p>
                We regret to inform you that your access to this service will be terminated. 
                If you have any questions or concerns, please contact our support team.
            </p>
            <button 
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                onClick={() => alert('Contact support for more information.')}
            >
                Contact Support
            </button>
        </div>
    );
};

export default TerminationNoticePage;