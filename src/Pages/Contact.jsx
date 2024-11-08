import React, { Component } from 'react';
import './CSS/Contact.css';
import banner3 from '../Components/Assets/banner3.png';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import fb from '../Components/Assets/fb.jpeg';
import ig from '../Components/Assets/ig.jpeg';
import linkd from '../Components/Assets/linkd.webp';
import twiter from '../Components/Assets/twiter.png';
import logo from '../Components/Assets/logo.png';

function Contact() {
  return (
    <div className="contact-section">
      <div className="header">
        
        <h1>Let's get in <span>touch</span> now</h1>
        <p>Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly.</p>
        <p>Home &gt; Contact</p>
      </div>

      <div className="contact-box">
        <h2>Contact Us</h2>
        <h3>How can we help?</h3>
  <h2>Have a question or feedback? Fill out the form below, and we'll get back to you.</h2>
        <form>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea placeholder="Your message" name="message" required></textarea>
          <button type="submit">Send Message</button>
        
        </form>
      </div>
      <footer className="footer-container">
      <div className="footer-main">
       
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
            <p><FaPhoneAlt /> +91 8252189778</p>
            <p><FaEnvelope /> Siyapandey64@gmail.com</p>
          </div>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>© Empower Her project based on menusration awareness  All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms & conditions</a>
          <a href="#">Privacy policy</a>
        </div>
      </div>
    </footer>
</div>

     


  );
}

export default Contact;
