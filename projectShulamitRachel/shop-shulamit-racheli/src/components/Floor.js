import React from 'react';
import '../css/floor.css'; // Adjust the path as necessary
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // Importing icons from react-icons
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


            {/* <div class="footer-section social-icons">
              <a href="#"><img src="whatsapp-icon.png" alt="Whatsapp"></a>
              <a href="#"><img src="youtube-icon.png" alt="YouTube"></a>
              <a href="#"><img src="instagram-icon.png" alt="Instagram"></a>
              <a href="#"><img src="facebook-icon.png" alt="Facebook"></a>
            </div> */}

            <div class="footer-section contact-us">
              <h3>צרו קשר</h3>
              <p>טלפון: 058-324-8325 📞</p>
              <p> מייל: sara.psifas@gmail.com ✉️</p>
              <p></p>
            </div>
          </div>

          {/* <div class="footer-bottom">
            <a href="#">עברית</a> |
            <a href="#">العربية</a>
          </div> */}
        </footer>
    );
};
    


export default Floor;




  
