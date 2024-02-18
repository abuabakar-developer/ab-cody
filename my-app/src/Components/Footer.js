import React from 'react';
import { FaHome, FaPhone, FaMailBulk } from 'react-icons/fa';
import './FooterStyles.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
            <div>
              <p>40 MOR DEFENCE JARANWALA.</p>
              <p>PAKISTAN.</p>
              <h4>
                <FaMailBulk size={20} style={{ color: 'white', marginRight: '1rem' }} />
                abubakar@gmail.com
              </h4>
              <h4>
                <FaPhone size={20} style={{ color: 'white', marginRight: '1rem' }} />
                03154195240
              </h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>I am a fresher React developer in Pakistan. I am working as a Fresher Front end Website Develpoer in the company.Contact me for any kind Projects.</p>

          </div>
        </div>
      </div>
  );
};

export default Footer;


