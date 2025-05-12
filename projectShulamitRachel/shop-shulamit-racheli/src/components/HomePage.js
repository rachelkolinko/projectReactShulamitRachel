import React from 'react';
import '../css/homePage.css'; 
import ImgHome from './ImgHome';
import img1 from '../images/IMG_3424.png';
import img2 from '../images/IMG_6954.png';
import img3 from '../images/IMG_6963.png';
import img4 from '../images/IMG_6955.png';
import img5 from '../images/IMG_6959.png';
import img6 from '../images/IMG_6967.png';
import img7 from '../images/IMG_6961.png';
import img8 from '../images/IMG_6964.png';
import img9 from '../images/IMG_6965.png';
import stones from '../images/אבנים.png';
import Recommendation from './Recommendation';
import {ProductsType, Title, AboutMe, How_does_it_work, Pay_attention} from './HelpForTheHomePage';

const HomePage = () => {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    const recommendations_column1 = [{recommendation: '"שרה אין עליך! יותר פסיכולוגית מאמנית. מקום לפורקן של רגשות עם תוספת אומנות!"', name: "ברכה"}, {recommendation: '"שרה היא אמנית מדהימה! כל עבודה שלה היא יצירת אמנות בפני עצמה. אני ממליצה בחום!"', name: "פנינה"}, {recommendation: '"הסטודיו של שרה הוא מקום קסום. אני ממליצה לכל אחד לבקר!"', name: "יעל"}];
    const recommendations_column2 = [{recommendation: '"העבודות של שרה מוסיפות צבע וחיים לכל דבר. אני מאוד אוהבת את העבודה שלי!"', name: "יהודית"}, {recommendation: '"שרה את מדהימה! גם בתקופות הכי קשות שלי לא וותרתי על הבריחה השבועית אליך!"', name: "דינה"}, {recommendation: '"הסדנאות של שרה הן חוויה בלתי נשכחת. אני לא מפסיקה לחזור!"', name: "מירה"}];
    const sentences_of_sara = ['"הסטודיו שלי הוא מקום של שקט, אבל כל יצירה בו מלאה חיים"', '"הפסיפס הוא כמו מסע – לפעמים רק בסוף רואים איך הכול מתחבר"', '"הפסיפס לימד אותי סבלנות, גמישות, ואמונה בזה שגם מהשברים אפשר לבנות משהו שלם"', '"אני מוצאת יופי דווקא בשברים – משם מגיע הריפוי האמיתי"', '"פסיפס הוא כמו החיים – מלא ניגודים, צבעים, וחתיכות שמתיישבות בדיוק איפה שצריך"', '"מהחלקים הלא שלמים – נולדת שלמות מסוג אחר"'];
    const productsType = [{emoji: '🧩 ', boldText: 'פסיפסים בעבודת יד', plainText:' – כל אחד מהם הוא יצירת אמנות'}, {emoji: '🖼️ ', boldText: 'קישוטי קיר', plainText:' – צבעוניים, ייחודיים ומלאי אופי'}, {emoji: '🥘 ', boldText: 'בסיסים לסירים', plainText:' – שכל שולחן היה רוצה'}, {emoji: '🪴 ', boldText: 'עציצים מעוצבים', plainText:' – מתנה מושלמת לעצמך או לחבר'}, {emoji: '💡 ', boldText: 'גופי תאורה', plainText:' – שעושים אור גם בלב'}, {emoji: '🍕 ', boldText: 'מגשים לאוכל', plainText:' – שהאוכל יוגש עם סטייל'}, {emoji: '✨ ', boldText: '', plainText:'עוד המון הפתעות קטנות וצבעוניות – כל אחת שונה, כל אחת עם סיפור...'}]
    const a_little_about_me = ['שלום, אני שרה קצבורג, אומנית, בעלת סטודיו לפסיפס בלב מודיעין עילית.', 'אני יוצרת בעבודת יד פסיפסים צבעוניים ומקוריים – כל יצירה היא שילוב של השראה, חומר, וצבע.', 'בסטודיו שלי תמצאו מקום של יצירה, חיבור וקסם, שמתאים גם למי שמעולם לא נגע באמנות.', 'אני מזמינה אתכם להצטרף לסדנאות, קבוצות קבועות או מפגשים חד-פעמיים – למבוגרים, נוער, ימי גיבוש ואירועים.', 'הפסיפס הוא לא רק אמנות – זו דרך להתחבר, לעצור רגע, וליהנות מהתהליך.', 'רוצים חוויה אחרת? זמן לעצמכם? מתנה עם ערך?', 'הסטודיו שלי פתוח בשבילכם – באהבה, סבלנות והמון ניסיון.'];


    return (
        <div className="landing-wrapper">
            <Title />
        
            <p className="intermediate-sentences">{sentences_of_sara[0]}</p>

            <div className="landing-section landing-about">
                <h2 className="section-title">קצת עלי</h2>
                {a_little_about_me.map((line, index) => (
                    <AboutMe key={index} line={line} />
                ))}
                <img src={stones} class="bottom-left-img" />
            </div>
        
            <p className="intermediate-sentences">{sentences_of_sara[1]}</p>

            <div className="landing-section landing-products">
                <h2 className="section-title">מה אני מכינה</h2>
                <div>
                    {productsType.map((product, index) => (
                        <ProductsType key={index} emoji={product.emoji} boldText={product.boldText} plainText={product.plainText} />
                    ))}
                </div>
                <img src={stones} class="bottom-left-img" />
            </div>

            <p className="intermediate-sentences">{sentences_of_sara[2]}</p>

            <div className="landing-section landing-gallery">
                <h2 className="section-title">עבודות שעשיתי בעבר</h2>
                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-img-container">
                            <ImgHome image={{ imageUrl: image }} />
                        </div>
                    ))}
                    
                </div>
                <img src={stones} class="bottom-left-img" />
            </div>

            <p className="intermediate-sentences">{sentences_of_sara[3]}</p>

            <div className="landing-section landing-recommendations">
                <h2 className="section-title">המלצות עלי</h2>
                <div className="recommendations-grid">
                    <div className='recommendations-column'>
                        {recommendations_column1.map((rec, index) => (
                            <Recommendation key={index} recommendation={rec.recommendation} name={rec.name} />
                        ))}
                    </div>
                    <div className='recommendations-column'>
                        {recommendations_column2.map((rec, index) => (
                            <Recommendation key={index} recommendation={rec.recommendation} name={rec.name} />
                        ))}
                    </div>
                </div>
                <img src={stones} class="bottom-left-img" />
            </div>
        
            <p className="intermediate-sentences">{sentences_of_sara[4]}</p>

            <div className="landing-section landing-process">
                <h2 className="section-title">איך זה עובד?</h2>
                <How_does_it_work />
                <img src={stones} class="bottom-left-img" />
            </div>

            <p className="intermediate-sentences">{sentences_of_sara[5]}</p>

            <div className="landing-section landing-highlight">
                <h2>שימו❤️❗ כל המוצרים שנמצאים כאן באתר נמכרו כבר ולכן:</h2>
                <Pay_attention />
                <img src={stones} class="bottom-left-img" />
            </div>
        </div>
    );
}
export default HomePage;