import React from 'react';
import '../css/floor.css'; // Adjust the path as necessary
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'; // Importing icons from react-icons
import imgFooter from '../images/מצגת1.png'; // Importing the footer image
const Floor = () => {
    return (
        <footer class="footer">
          <div class="footer-menu">
            <a href="#">חנות</a>
            <a href="#">מוצרי ריביירה</a>
            <a href="#">בלוג</a>
            <a href="#">מי אנחנו</a>
            <a href="#">תקנון</a>
            <a href="#">תנאי משלוחים</a>
            <a href="#">החשבון שלי</a>
            <a href="#">צור קשר</a>
          </div>
          <div id='line-white'></div>
          <div class="footer-content">
            <div class="footer-section visit-us">
              <h3>בקרו אותנו</h3>
              <p>שדרות ירושלים 9</p>
              <p>רמת גן 5238105</p>
              <p>* יש לתאם הגעה</p>
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
              <p>טלפון: 1-700-55-22-44 📞</p>
              <p> מייל: info@rivierahair.com ✉️</p>
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




  
