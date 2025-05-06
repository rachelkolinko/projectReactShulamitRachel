import React from 'react';
import '../css/recommendation.css';

const Recommendation = (recommendation) => {
    return (
        <div className="recommendation-grid">
            <p className="recommendation-text">{recommendation.recommendation}</p>
            <p>{recommendation.name}</p>
        </div>
    );
};

export default Recommendation;