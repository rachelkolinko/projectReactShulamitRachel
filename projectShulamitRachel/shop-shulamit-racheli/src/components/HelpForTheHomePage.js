import React from 'react';
import '../css/helpForTheHomePage.css';

export const ProductsType = (line) => {
    return (
        <p className="productsType">{line.emoji}<strong><em>{line.boldText}</em></strong>{line.plainText}</p>
    );
};

export const Title = () => {
    return (
        <div className="landing-section landing-header">
            <h1 className="landing-title">ברוכים הבאים לאתר שלי - שרה קצבורג</h1>
            <p className="landing-subtitle">פסיפס של חלומות</p>
        </div>
    )
}

export const AboutMe = (line) => {
    return (
        <p className="section-text">{line.line}</p>
    )
}

export const How_does_it_work = () => {
    return (
        <ol className="process-list">
            <li>בוחרים מוצר בעיצוב אישי</li>
            <li>יוצרים איתי קשר לתיאום</li>
            <li>אני יוצרת במיוחד בשבילכם</li>
        </ol>    )
}

export const Pay_attention = () => {
    return (
        <ol className="highlight-list">
            <li>אין לי את יכולת ליצור את העבודה שוב במדויק</li>
            <li>יתכנו שינויי גוונים קלים עד משמעותיים בהתאם לחומרים שיש לי בסטודיו</li>
            <li>כל עבודה מיוצרת מחדש  - דבר שלוקח זמן</li>
            <li>המחירים הם להשראה בלבד - אין התחייבות למחיר שבאתר</li>
            <li>אם יש לכם איזשהו אלמט בבית שאתם רוצים לשלב בתוך העבודה - אני כאן בשבילכם🥰</li>
        </ol>
    )
}