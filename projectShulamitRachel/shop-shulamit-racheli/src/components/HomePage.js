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
            <div className="landing-section landing-header">
                <h1 className="landing-title">ברוכים הבאים לאתר שלי - שרה קצבורג</h1>
                <p className="landing-subtitle">פסיפס של חלומות</p>
            </div>
        
            <p className="intermediate-sentences">"פסיפס של צבע, לב וידיים – יצירות בעבודת יד שמכניסות שמחה לכל חלל"</p>

            <div className="landing-section landing-about">
                <h2 className="section-title">קצת עלי</h2>
                <p className="section-text">אני יוצרת באהבה פסיפסים צבעוניים וייחודיים, מתוך חיבור עמוק לחומר, לצבע ולצורה. הסטודיו שלי הוא מקום של השראה, ביטוי אישי וחוויה יצירתית – ואני מזמינה אתכם להצטרף.</p>
                <p className="section-text"> אני מאמינה שהאמנות היא שפה אוניברסלית, שמחברת בין אנשים ובין תרבויות. כל עבודה שלי היא סיפור – סיפור של צבעים, צורות וחומרים, שמתחברים יחד ליצירה אחת שלמה. </p>
                <p className="section-text">הפסיפס שלי הוא לא רק טכניקת אמנות, אלא גם דרך חיים: הוא מלמד אותנו לקבל את השונה והלא מושלם, ולראות את היופי שבכל פרט ופרט. </p>
                <p className="section-text">במהלך השנה אני מקיימת קבוצות קבועות וסדנאות חד-פעמיות למבוגרים, לנוער וגם לאירועים פרטיים או ימי גיבוש. כל מפגש הוא הזדמנות לעצור את השגרה, לגעת ביצירה וליהנות מהתהליך.</p>
                <p className="section-text">בנוסף, אני יוצרת ומוכרת עבודות פסיפס בעבודת יד – כל אחת מהן נולדת מתוך רעיון, השראה ומשיכה גדולה לאמנות.</p>
                <p className="section-text">אם אתם מחפשים חוויה משמעותית, מתנה מקורית או פשוט זמן לעצמכם – אתם מוזמנים לסטודיו שלי.</p>
                <p className="section-text">אני מזמינה אתכם ליצור קשר, לבוא לבקר ולהתנסות ביצירה.</p>
                <p className="section-text">אני כאן בשבילכם, עם המון אהבה, סבלנות וידע.</p>
            </div>
        
            <p className="intermediate-sentences">"כל פריט נוצר באהבה, בשקט של הסטודיו, ומגיע אליכם עם המון אופי וייחודיות"</p>

            <div className="landing-section landing-products">
                <h2 className="section-title">מה אני מכינה</h2>
                <p className="productsType">🖼️ קישוטי קיר</p>
                <p className="productsType">🍲 בסיסים לסירים</p>
                <p className="productsType">🌳 פסלים לגינה</p>
                <p className="productsType">🪴 עציצים</p>
                <p className="productsType">💡 גופי תאורה</p>
                <p className="productsType">🍕 מגשים לאוכל</p>
                <p className="productsType">ועוד המון המון דברים נוספים...</p>
            </div>

            <p className="intermediate-sentences">"הפסיפס – אמנות של רסיסים – הופך כאן לסיפור שלם: צבעוני, מרגש ומלא חיים"</p>

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

            <p className="intermediate-sentences">"כל פסיפס הוא פיסה מהלב שלי ותודה שאתן חלק מהמסע"</p>

            <div className="landing-section landing-recommendations">
                <h2 className="section-title">המלצות עלי</h2>
                <div className="recommendation-grid">
                    <p className="recommendation-text">"שרה היא אמנית מדהימה! כל עבודה שלה היא יצירת אמנות בפני עצמה. אני ממליצה בחום!"</p>
                    <p>פנינה</p>
                </div>
                <div className="recommendation-grid">
                <p className="recommendation-text">"הסדנאות של שרה הן חוויה בלתי נשכחת. אני לא מפסיקה לחזור!"</p>
                    <p>מירה</p>
                </div>
                <div className="recommendation-grid">
                <p className="recommendation-text">"הסטודיו של שרה הוא מקום קסום. אני ממליצה לכל אחד לבקר!"</p>
                    <p>יעל</p>
                </div>
                <div className="recommendation-grid">
                <p className="recommendation-text">"העבודות של שרה מוסיפות צבע וחיים לכל חלל. אני מאוד אוהבת את העבודה שלי!"</p>
                    <p>יהודית</p>
                </div>
                <div className="recommendation-grid">
                <p className="recommendation-text">"שרה את מדהימה! גם בתקופות הכי קשות שלי לא וותרתי על הבריחה השבועית אליך!"</p>
                    <p>דינה</p>
                </div>
                <div className="recommendation-grid">
                <p className="recommendation-text">"שרה אין עליך! יותר פסיכולוגית מאמנית. מקום לפורקן של רגשות בתוספת אומנות!"</p>
                    <p>ברכה</p>
                </div>
            </div>
        
            <p className="intermediate-sentences">"אמנות פסיפס אישית בעבודת יד – יצירה עם נשמה"</p>

            <div className="landing-section landing-process">
                <h2 className="section-title">איך זה עובד?</h2>
                <ol className="process-list">
                    <li>בוחרים מוצר או עיצוב אישי</li>
                    <li>יוצרים קשר איתנו לתיאום</li>
                    <li>אנחנו יוצרים במיוחד בשבילכם</li>
                </ol>
            </div>

            <p className="intermediate-sentences">"עבודות פסיפס בעיצוב אישי – מתנות, קישוטים לבית ולגן, וסדנאות מותאמות"</p>

            <div className="landing-section landing-highlight">
                <h2>שימו❤️❗</h2>
                <ol className="highlight-list">
                    <li>המוצרים שנמצאים כאן באתר נמכרו כבר</li>
                    <li>אין לי יכות ליצור את העבודה שוב במדויק - יתכנו שינויי גוונים קלים עד משמעותיים בהתאם לחומרים שיש לי בסטודיו</li>
                    <li>כל עבודה מיוצרת מחדש  - אין עבודות למכירה במלאי</li>
                    <li>המחירים הם להשראה בלבד - אין התחייבות למחיר שבאתר</li>
                    <li>אם יש לכם איזשהו אלמט בבית שאתם רוצים לשלב בתוך העבודה - אני כאן בשבילכם🥰</li>
                </ol>
            </div>
        </div>
    );
}
export default HomePage;