import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './CSS/Aboutus.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';

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
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  
  const [showMore, setShowMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  const handleToggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  return (
    

      <div className="aboutus-container">
        <div className="aboutus-box" data-aos="fade-right">
          <div className="aboutus-main-section">
            <div className="aboutus-text">
              <h3 className="aboutus-heading">Empowering Hope</h3>
              <h1 className="aboutus-title">Our work creates lasting change</h1>
              <p className="aboutus-paragraph">
                The MHH workshops offered by Empower Her are highly regarded and specifically designed for schools,
                aiming to foster shame-free and pain-free periods for girls aged 9 to 18 years.
              </p>
              <ul className="aboutus-list">
                <li><strong>Educating and Empowering Participants</strong> with crucial knowledge about menstrual health.</li>
                <li><strong>Emphasis on pain management</strong> through Yoga asanas.</li>
              </ul>
              <p className="aboutus-paragraph">
                Our workshops encourage open and healthy conversations on Menarche, Menstruation, and Menopause.
              </p>
            </div>
            <div className="aboutus-banner">
              <img src={salwi1} alt="Banner Image for Empower Her" />
            </div>
          </div>

          <div className="campaign-photo-section" data-aos="fade-right">
            <h2 className="campaign-photo-title">Our Campaign Photos</h2>
            <div className="campaign-photo-gallery">
              <img src={hemant3} alt="Campaign Event 1" className="campaign-photo" />
              <img src={salwi} alt="Campaign Event 2" className="campaign-photo" />
              <img src={rishav} alt="Campaign Event 3" className="campaign-photo" />
              {showMore && (
                <>
                  <img src={salwi2} alt="Additional Campaign Event 4" className="campaign-photo" />
                  <img src={hemant2} alt="Additional Campaign Event 5" className="campaign-photo" />
                  <img src={hemant} alt="Additional Campaign Event 6" className="campaign-photo" />
                </>
              )}
            </div>
            <button className="view-more-photos-btn" onClick={handleViewMore}>
              {showMore ? 'View Less Photos' : 'View More Photos'}
            </button>
          </div>
        </div>

        <div>
          <h2>Get informed now. Answers to your common questions</h2>
        </div>
        <div className="outer-container"data-aos="fade-right">
    <div className="container">
      <div className="textSection">
        <h1 className="title">Pain</h1>
        <h2 className="subtitle">Free Menstruation</h2>
        <p className="description">
          Empower her is a project based on mensuration awareness and educational campaign .
          Our mission is to empower women, fostering positive transformation, joy, and freedom.
        </p>
        
        <div className="buttons">
          <button className="button" aria-label="Donate Now">Login</button>
          <button className="button" aria-label="Play Video">Play</button>
        </div>
        <div className="footerIcons">
          <div className="icon">Workshops</div>
          <div className="icon">Contact</div>
           <Link to="/volunteer" className="icon">Volunteering</Link>
        </div>
      </div>

      <div className="imageGallery">
        <img src={hemant3} alt="Empower Her Workshop - Event 1" className="image" />
        <img src={salwi} alt="Empower Her Workshop - Event 2" className="image" />
        <img src={rishav} alt="Empower Her Workshop - Event 3" className="image" />
       
        
      </div>
      </div>


        <div className="faq-section" data-aos="fade-right">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p>Can't find what you're looking for? Get in touch with our team and we will gladly help out.</p>
          
          <div className="faq-list">
            {[
              { question: 'What topics are covered in the workshops?', answer: 'Our workshops cover puberty, biology of menstruation, hygiene practices, breaking myths and taboos, emotional well-being, and more.' },
              { question: 'Who can attend these workshops?', answer: 'These workshops are open to girls aged 9 to 18 years.' },
              { question: 'How long is each workshop session?', answer: 'Each workshop session typically lasts around 1 to 2 hours.' }
            ].map((faq, index) => (
              <div className="faq-item" key={index} onClick={() => handleToggleFAQ(index)}>
                <div className="faq-question">
                  <span>{index + 1}. {faq.question}</span>
                  <span>{activeIndex === index ? '▲' : '▼'}</span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <footer className="footer-container" data-aos="fade-right">
          <div className="footer-main">
            <div className="footer-left">
              <div className="footer-logo">
                <img src={logo} alt="Safe N' Happy Periods Logo" style={{ width: '50px', height: 'auto' }} />
              </div>
              <p className="footer-description">
                Safe N' Happy Periods aims to foster a shame-free, dignified, and sustainable menstruation experience for women.
              </p>
              <div className="social-icons">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/siya-pandey64" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <img src={linkd} alt="LinkedIn Logo" />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img src={ig} alt="Instagram Logo" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <img src={fb} alt="Facebook Logo" />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <img src={twiter} alt="Twitter Logo" />
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
                <h4>OUR WORKSHOP</h4>
                <ul>
                  <li><a href="#">School Workshops</a></li>
                  <li><a href="#">College Workshops</a></li>
                  <li><a href="#">Community Workshops</a></li>
                  <li><a href="#">Corporate Workshops</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>CONTACT US</h4>
                <ul>
                  <li><FaPhoneAlt /> <span>+91 8252189778</span></li>
                  <li><FaEnvelope /> <span>siyapandey642gamil.com</span></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Aboutus;
