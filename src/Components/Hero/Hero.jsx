import React from 'react';
import './Hero.css';
import banner from '../Assets/banner.png';
import menstruation_1 from '../Assets/menstruation_1.png';
import dispose from '../Assets/dispose.png';
import pain from '../Assets/pain.png';
import taboo from '../Assets/taboo.png';
import health from '../Assets/health.png';
import role from '../Assets/role.png';
import Donation1 from '../Assets/Donation1.jpg';
import Donation2 from '../Assets/Donation2.jpg';
import Donation3 from '../Assets/Donation3.jpg';
import Donation4 from '../Assets/Donation4.jpeg';
import fb from '../Assets/fb.jpeg'
import ig from '../Assets/ig.jpeg'
import linkd from '../Assets/linkd.webp'
import twiter from '../Assets/twiter.png'
import janas from '../Assets/janas.png'


export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Creating Awareness on Shame-Free and Pain-Free Menstruation</h2>

        <div className="pic1-container">
          <div className="pic1-text">
            <p>A Social Impact Initiative, Empower Her is a humble step towards a shame-free and pain-free menstruation time. We create awareness on different aspects of menstruation for adolescent girls & women through talks & workshops.</p>
            <p>We have features like a Period tracker, chatbot, and many more.</p>
            <p>Empower Her is working on an organization but for now, we are raising awareness on menstruation issues such as myths and taboos in rural areas and among small workers, under a registered Trust in Mumbai.</p>
          </div>
          <img src={banner} alt="Women participating in menstruation awareness activities" />
        </div>

        <section className="info-container">
          <article className="info-item1">
            <img src={menstruation_1} alt="Infographic explaining menstruation" />
            <p>What is Menstruation? It's important for women to know what menstruation is, why it happens, and why it's important—especially before her first period.</p>
          </article>

          <article className="info-item2">
            <img src={dispose} alt="Menstrual waste disposal methods" />
            <p>Correct Usage & Disposal: Today, civic authorities and individuals are struggling with the enormous menstrual waste generated. Through dialogue, we advocate for adopting better disposal habits.</p>
          </article>

          <article className="info-item3">
            <img src={pain} alt="Yoga poses for menstrual pain relief" />
            <p>Dealing with Menstrual Pain: Irrespective of geography and age, women grapple with period pain. We utilize tried-and-tested yoga postures to ease menstrual discomfort.</p>
          </article>

          <article className="info-item4">
            <img src={taboo} alt="Breaking menstrual taboos" />
            <p>Myths & Taboos: We are initiating dialogue to examine taboos and myths with a fresh perspective to accept some and discard others.</p>
          </article>

          <article className="info-item5">
            <img src={health} alt="Menstrual hygiene practices" />
            <p>Menstrual Hygiene & Disorders: These are strongly connected. It's important to emphasize the need for hygiene and explore various ways to manage disorders through yoga and lifestyle changes.</p>
          </article>

          <article className="info-item6">
            <img src={role} alt="Individual Roles in Society" />
            <p>Individual Roles in Society: A single man or woman can create a difference in the lives of girls and women around them. We have been able to inspire people to join this movement in different ways and bring a change in the society we live in.</p>
          </article>
        </section>

        <div>
          <img src={janas} alt="Women participating in menstruation awareness activities" />
        </div>

        
        <div className="cta">
          <button onClick={() => alert("Getting involved!")}>Get Involved</button>
          <div className="PM">
            <a href="https://youtu.be/krgjh-O5QRc?si=EwADRJON82-u26nb" target="_blank" rel="noopener noreferrer">
              Watch our introduction video
            </a>
          </div>
        </div>

      <div className="hero-right">
        {/* Additional content can go here */}
      </div>

      <div className="contact-section">
        <h2>Workshops done on</h2>
        <h2>19th June</h2>
        <img src={Donation1} alt="Donation event 1" />
        <img src={Donation2} alt="Donation event 2" />
        <img src={Donation3} alt="Donation event 3" />
        <img src={Donation4} alt="Donation event 4" />
        
        <form>
          <h2>Get in touch with us</h2>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Contact us</button>
        </form>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>We are committed to creating awareness about menstrual hygiene and breaking the associated taboos. Our goal is to empower women and promote health education.</p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#events">Upcoming Events</a></li>
              <li><a href="#workshops">Workshops</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: <a href="siyapandey64@gamil.com">siyapandey64@gamil.com</a></p>
            <p>Phone: <a href="tel:+918252189778">+91 82521 89778</a></p>
          </div>

          <div className="footer-section social">
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

        <div className="footer-bottom">
          <p>&copy; 2024 Your Organization. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  );
};
