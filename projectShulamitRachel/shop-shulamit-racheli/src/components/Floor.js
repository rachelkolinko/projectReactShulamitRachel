import React from 'react';
import '../css/floor.css'; 
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'; 
const Floor = () => {
    return (
        <footer class="footer">
          <div class="footer-menu">
            <a href="">חנות</a>
            <div className="pass-links">|</div>
            <a href="">בלוג</a>
            <div className="pass-links">|</div>
            <a href="">מי אנחנו</a>
            <div className="pass-links">|</div>
            <a href="">תקנון</a>
            <div className="pass-links">|</div>
            <a href="">תנאי משלוחים</a>
            <div className="pass-links">|</div>
            <a href="">החשבון שלי</a>
            <div className="pass-links">|</div>
            <a href="">צור קשר</a>
          </div>
          <div id='line-white'></div>
          <div class="footer-content">
            <div class="footer-section visit-us">
              <h3>בקרו אותנו</h3>
              <p>יהודה הנשיא 13</p>
              <p>מודיעין עילית</p>
              <p>* יש לתאם הגעה מראש</p>
            </div>

            <div className="footer-center">
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook-f"></i>
            </div>

            <div class="footer-section contact-us">
              <h3>צרו קשר</h3>
              <p>טלפון: 058-324-8325 📞</p>
              <p> מייל: sara.psifas@gmail.com ✉️</p>
              <p></p>
            </div>
          </div>

        </footer>
    );
};
    


export default Floor;




  
