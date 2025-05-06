import React from 'react';
import '../css/homePage.css'; 
import img1 from '../images/IMG_3424.png';
import img2 from '../images/IMG_6954.png';
import img3 from '../images/IMG_6963.png';
import img4 from '../images/IMG_6955.png';
import img5 from '../images/IMG_6959.png';
import img6 from '../images/IMG_6967.png';
import img7 from '../images/IMG_6961.png';
import img8 from '../images/IMG_6964.png';
import img9 from '../images/IMG_6965.png';

const HomePage = () => {
    return (
        <div className="landing-wrapper">
            <div className="landing-section landing-header" id='title'>
                <h1 className="landing-title">ברוכים הבאים לאתר שלי - שרה קצבורג</h1>
                <p className="landing-subtitle">פסיפס של חלומות</p>
            </div>
        
            <p className="intermediate-sentences">"הסטודיו שלי הוא מקום של שקט, אבל כל יצירה בו מלאה חיים"</p>

            <div className="landing-section landing-about">
                <h2 className="section-title">קצת עלי</h2>
                <p className="section-text">שלום, אני שרה קצבורג, אומנית, בעלת סטודיו לפסיפס בלב מודיעין עילית.</p>
                <p className="section-text">אני יוצרת בעבודת יד פסיפסים צבעוניים ומקוריים – כל יצירה היא שילוב של השראה, חומר, וצבע.                </p>
                <p className="section-text"> בסטודיו שלי תמצאו מקום של יצירה, חיבור וקסם, שמתאים גם למי שמעולם לא נגע באמנות.</p>
                <p className="section-text"> אני מזמינה אתכם להצטרף לסדנאות, קבוצות קבועות או מפגשים חד-פעמיים – למבוגרים, נוער, ימי גיבוש ואירועים.                </p>
                <p className="section-text"> הפסיפס הוא לא רק אמנות – זו דרך להתחבר, לעצור רגע, וליהנות מהתהליך.</p>
                <p className="section-text">רוצים חוויה אחרת? זמן לעצמכם? מתנה עם ערך?  </p>
                <p className="section-text">הסטודיו שלי פתוח בשבילכם – באהבה, סבלנות והמון ניסיון.</p>
            </div>
        
            <p className="intermediate-sentences">"הפסיפס הוא כמו מסע – לפעמים רק בסוף רואים איך הכול התחבר"</p>

            <div className="landing-section landing-products">
                <h2 className="section-title">מה אני מכינה</h2>
                <div>
                    <p className="productsType">🧩 <strong><em>פסיפסים בעבודת יד</em></strong> – כל אחד מהם הוא יצירת אמנות</p>
                    <p className="productsType">🖼️ <strong><em>קישוטי קיר</em></strong> – צבעוניים, ייחודיים ומלאי אופי</p>
                    <p className="productsType">🥘 <strong><em>בסיסים לסירים</em></strong> – שכל שולחן היה רוצה</p>
                    <p className="productsType">🪴 <strong><em>עציצים מעוצבים</em></strong> – מתנה מושלמת לעצמך או לחבר</p>
                    <p className="productsType">💡 <strong><em>גופי תאורה</em></strong> – שעושים אור גם בלב</p>
                    <p className="productsType">🍕 <strong><em>מגשים לאוכל</em></strong> – שהאוכל יוגש עם סטייל</p>
                    <p className="productsType">✨ ועוד המון הפתעות קטנות וצבעוניות – כל אחת שונה, כל אחת עם סיפור...</p>
                </div>
            </div>

            <p className="intermediate-sentences">"הפסיפס לימד אותי סבלנות, גמישות, ואמונה בזה שגם מהשברים אפשר לבנות משהו שלם"</p>

            <div className="landing-section landing-gallery">
                <h2 className="section-title">עבודות שעשיתי בעבר</h2>
                <div className="gallery-grid">
                    <img src={img1} alt="עבודה 1" className="gallery-img" />
                    <img src={img2} alt="עבודה 2" className="gallery-img" />
                    <img src={img3} alt="עבודה 3" className="gallery-img" />
                    <img src={img4} alt="עבודה 4" className="gallery-img" />
                    <img src={img5} alt="עבודה 5" className="gallery-img" />
                    <img src={img6} alt="עבודה 6" className="gallery-img" />
                    <img src={img7} alt="עבודה 7" className="gallery-img" />
                    <img src={img8} alt="עבודה 8" className="gallery-img" />
                    <img src={img9} alt="עבודה 9" className="gallery-img" />
                </div>
            </div>

            <p className="intermediate-sentences">"אני מוצאת יופי דווקא בשברים – משם מגיע הריפוי האמיתי"</p>

            <div className="landing-section landing-recommendations">
                <h2 className="section-title">המלצות עלי</h2>
                <div className="recommendations-grid">
                    <div className='recommendations-column'>
                        <div className="recommendation-grid">
                        <p className="recommendation-text">"שרה אין עליך! יותר פסיכולוגית מאמנית. מקום לפורקן של רגשות בתוספת אומנות!"</p>
                            <p>ברכה</p>
                        </div>
                        <div className="recommendation-grid">
                            <p className="recommendation-text">"שרה היא אמנית מדהימה! כל עבודה שלה היא יצירת אמנות בפני עצמה. אני ממליצה בחום!"</p>
                            <p>פנינה</p>
                        </div>
                        <div className="recommendation-grid">
                        <p className="recommendation-text">"הסטודיו של שרה הוא מקום קסום. אני ממליצה לכל אחד לבקר!"</p>
                            <p>יעל</p>
                        </div>
                    </div>
                    <div className='recommendations-column'>
                        <div className="recommendation-grid">
                        <p className="recommendation-text">"העבודות של שרה מוסיפות צבע וחיים להכל. אני מאוד אוהבת את העבודה שלי!"</p>
                            <p>יהודית</p>
                        </div>
                        <div className="recommendation-grid">
                        <p className="recommendation-text">"שרה את מדהימה! גם בתקופות הכי קשות שלי לא וותרתי על הבריחה השבועית אליך!"</p>
                            <p>דינה</p>
                        </div>
                        <div className="recommendation-grid">
                        <p className="recommendation-text">"הסדנאות של שרה הן חוויה בלתי נשכחת. אני לא מפסיקה לחזור!"</p>
                            <p>מירה</p>
                        </div>
                    </div>
                </div>
            </div>
        
            <p className="intermediate-sentences">"פסיפס הוא כמו החיים – מלא ניגודים, צבעים, וחתיכות שמתיישבות בדיוק איפה שצריך"</p>

            <div className="landing-section landing-process">
                <h2 className="section-title">איך זה עובד?</h2>
                <ol className="process-list">
                    <li>בוחרים מוצר בעיצוב אישי</li>
                    <li>יוצרים איתי קשר לתיאום</li>
                    <li>אני יוצרת במיוחד בשבילכם</li>
                </ol>
            </div>

            <p className="intermediate-sentences">"מהחלקים הלא שלמים – נולדת שלמות מסוג אחר"</p>

            <div className="landing-section landing-highlight">
                <h2>שימו❤️❗ כל המוצרים שנמצאים כאן באתר נמכרו כבר ולכן:</h2>
                <ol className="highlight-list">
                    <li>אין לי את יכולת ליצור את העבודה שוב במדויק</li>
                    <li>יתכנו שינויי גוונים קלים עד משמעותיים בהתאם לחומרים שיש לי בסטודיו</li>
                    <li>כל עבודה מיוצרת מחדש  - דבר שלוקח זמן</li>
                    <li>המחירים הם להשראה בלבד - אין התחייבות למחיר שבאתר</li>
                    <li>אם יש לכם איזשהו אלמט בבית שאתם רוצים לשלב בתוך העבודה - אני כאן בשבילכם🥰</li>
                </ol>
            </div>
        </div>
    );
}
export default HomePage;