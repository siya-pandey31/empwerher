import React, { useState } from 'react';
import './CSS/Aboutus.css'; 
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import logo from '../Components/Assets/logo.png';
import hemant3 from '../Components/Assets/hemant3.jpg';
import rishav from '../Components/Assets/rishav.jpg';
import salwi from '../Components/Assets/salwi.jpg';
import salwi2 from '../Components/Assets/salwi2.jpg';
import salwi1 from '../Components/Assets/salwi1.jpg';
import hemant from '../Components/Assets/hemant.jpg';
import hemant2 from '../Components/Assets/hemant2.jpg';
import fb from '../Components/Assets/fb.jpeg';
import ig from '../Components/Assets/ig.jpeg';
import linkd from '../Components/Assets/linkd.webp';
import twiter from '../Components/Assets/twiter.png';


const Aboutus = () => {
  const [showMore, setShowMore] = useState(false); 
  const [activeIndex, setActiveIndex] = useState(null); // State for FAQ

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  const handleToggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="aboutus-container">
      {/* Existing About Us Content */}
      <div className="aboutus-box">
        <div className="aboutus-main-section">
          <div className="aboutus-text">
            <h3 className="aboutus-heading">Empowering Hope</h3>
            <h1 className="aboutus-title">Our work creates lasting change</h1>
            <p className="aboutus-paragraph">
              The MHH workshops offered by Empower Her are highly regarded and specifically designed for schools,
              aiming to foster shame-free and pain-free periods for girls aged 9 to 18 years. These workshops focus on:
            </p>
            <ul className="aboutus-list">
              <li><strong>Educating and Empowering Participants</strong> by imparting crucial knowledge about various aspects of menstrual health and hygiene.</li>
              <li><strong>Particular emphasis on pain management</strong> through Yoga asanas.</li>
            </ul>
            <p className="aboutus-paragraph">
              Our workshops encourage open and healthy conversations surrounding Menarche, Menstruation, and Menopause.
              They are crafted to ensure inclusivity and support, allowing women to share their experiences, perceptions, and celebrate their periods together.
            </p>
          </div>
          <div className="aboutus-banner">
            <img src={salwi1} alt="Banner" />
          </div>
        </div>

        {/* Campaign Photos Section */}
        <div className="campaign-photo-section">
          <h2 className="campaign-photo-title">Our Campaign Photos</h2>
          <div className="campaign-photo-gallery">
            <img src={hemant3} alt="Campaign Photo 1" className="campaign-photo" />
            <img src={salwi} alt="Campaign Photo 2" className="campaign-photo" />
            <img src={rishav} alt="Campaign Photo 3" className="campaign-photo" />
            {showMore && (
              <>
                <img src={salwi2} alt="Additional Campaign Photo 4" className="campaign-photo" />
                <img src={hemant2} alt="Additional Campaign Photo 5" className="campaign-photo" />
                <img src={hemant} alt="Additional Campaign Photo 6" className="campaign-photo" />
              </>
            )}
          </div>
          <button className="view-more-photos-btn" onClick={handleViewMore}>
            {showMore ? 'View Less Photos' : 'View More Photos'}
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h2>Get informed now.
        Answers to your common questions</h2>
      </div>
      <div className="faq-section">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <p>Can't find what you're looking for? Get in touch with our team and we will gladly help out.</p>
        
        <div className="faq-list">
          <div className="faq-item" onClick={() => handleToggleFAQ(1)}>
            <div className="faq-question">
              <span>1. What topics are covered in the workshops?</span>
              <span>{activeIndex === 1 ? '▲' : '▼'}</span>
            </div>
            {activeIndex === 1 && (
              <div className="faq-answer">
                <p>
                  Our workshops cover a range of topics including puberty, biology of menstruation, hygiene practices, 
                  breaking myths and taboos, emotional well-being, and access to menstrual products. We also teach 
                  a few Yoga asanas for relieving a broad range of menstrual health problems, including menstrual cramps.
                </p>
              </div>
            )}
          </div>

          <div className="faq-item" onClick={() => handleToggleFAQ(2)}>
            <div className="faq-question">
              <span>2. Who can attend these workshops?</span>
              <span>{activeIndex === 2 ? '▲' : '▼'}</span>
            </div>
            {activeIndex === 2 && (
              <div className="faq-answer">
                <p>
                  These workshops are open to girls aged 9 to 18 years, providing them with essential knowledge and 
                  tools for menstrual health and hygiene.
                </p>
              </div>
            )}
          </div>

          <div className="faq-item" onClick={() => handleToggleFAQ(3)}>
            <div className="faq-question">
              <span>3. How long is each workshop session?</span>
              <span>{activeIndex === 3 ? '▲' : '▼'}</span>
            </div>
            {activeIndex === 3 && (
              <div className="faq-answer">
                <p>
                  Each workshop session typically lasts around 1 to 2 hours, depending on the depth of the material and the level of interaction with participants.
                </p>
              </div>
            )}
          </div>
          <footer className="footer-container">
      <div className="footer-main">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Safe N' Happy Periods Logo"style={{ width: '50px', height: 'auto' }}  />
          </div>
          <p className="footer-description">
            Safe N' Happy Periods aims to foster a shame-free, dignified, and sustainable menstruation experience for women. By combining education and pad distribution, we raise awareness and improve access to sanitation.
          </p>
          <div className="social-icons">
          <h3>Follow Us</h3>
            <div className="social-links">
            <a href="https://www.linkedin.com/in/siya-pandey64" target="_blank">
           <img src={linkd} alt=""/>
           </a>
           <a href="https://www.linkedin.com/in/siya-pandey64" target="_blank">
           <img src={ig} alt=""/>
           </a>
           <a href="https://www.linkedin.com/in/siya-pandey64" target="_blank">
           <img src={fb} alt=""/>
           </a>
           <a href="https://www.linkedin.com/in/siya-pandey64" target="_blank">
           <img src={twiter} alt=""/>
           </a>
          </div>
        </div>
        </div>

       
        <div className="footer-middle">
          <div className="footer-section">
            <h4>WHAT WE DO</h4>
            <ul>
              <li><a href="#">Menstrual Health & Hygiene (MHH)</a></li>
              <li><a href="#">POSH Training</a></li>
              <li><a href="#">Period Friendly Workplaces</a></li>
              <li><a href="#">Menstrual Educator</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>RESOURCES</h4>
            <ul>
              <li><a href="#">Annual Reports</a></li>
              <li><a href="#">Media Kit</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>

      
        <div className="footer-right">
          <h4>STAY IN TOUCH</h4>
          <div className="subscribe">
            <input type="email" placeholder="Email" />
            <button>Subscribe</button>
          </div>
          <div className="contact-info">
            <p><FaPhoneAlt /> +91 84250 63301</p>
            <p><FaEnvelope /> connect@safenhappyperiods.org</p>
          </div>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>© Safe N' Happy Periods, operating under AMODINI FOUNDATION, is a Charitable Trust registered in India (Registration No. E 11500/Thane) with 12AA & 80G certifications. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms & conditions</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
    </footer>

          

          {/* Add more FAQ items as needed */}
        </div>
      </div>
    </div>
    
  );
};

export default Aboutus;