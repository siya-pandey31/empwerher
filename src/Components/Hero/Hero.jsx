import React, { useState , useEffect } from 'react';
import './Hero.css';
import salwi from '../Assets/salwi.jpg';
import hemant3 from '../Assets/hemant3.jpg';
import rishav from '../Assets/rishav.jpg';
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
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import logo from '../Assets/logo.png';


export const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [showInfoBoxes, setShowInfoBoxes] = useState(false);
  const handleKnowMore = () => {
    setShowInfoBoxes(!showInfoBoxes);
  };
 
  return (
    <div className='hero'>
      <div className="hero-left"data-aos="fade-right">
     <div className="banner"data-aos="fade-right">
      <img src={banner} alt="Women participating in menstruation awareness activities" />
      </div>
        <h2>Creating Awareness on Shame-Free and Pain-Free Menstruation</h2>

        <div className="pic1-container"data-aos="fade-left">
          <div className="pic1-text">
            <p>A Social Impact Initiative, Empower Her is a humble step towards a shame-free and pain-free menstruation time. We create awareness on different aspects of menstruation for adolescent girls & women through talks & workshops.</p>
            <p>We have features like a Period tracker, chatbot, and many more.</p>
            <p>Empower Her is working on an organization but for now, we are raising awareness on menstruation issues such as myths and taboos in rural areas and among small workers, under a registered Trust in Mumbai.</p>
          </div>
          
        </div>

        <section className="info-container"data-aos="fade-right">
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
  <a href="https://youtu.be/krgjh-O5QRc?si=EwADRJON82-u26nb" target="_blank" rel="noopener noreferrer">
    <img src={janas} alt="Women participating in menstruation awareness activities" className="janas-image" />
  </a>
</div>
<section className="blog"data-aos="fade-up">
  <div className="blog-content"data-aos="fade-up">
    <div className="blog-text"data-aos="fade-up">
      <h1>Menstrual Health and Hygiene Awareness Workshops</h1>
      <h3>Educating & Empowering</h3>
      <p>MHH workshops are creatively designed for school girls (9-18 yrs) and college students, aiming to create Shame-Free and Pain-Free Periods.</p>
      <p>Our workshops foster gender-neutral and healthy conversations about Menarche, Menstruation, and Menopause.</p>
      <button className="know-more-btn" onClick={handleKnowMore}>
            {showInfoBoxes ? 'Show Less' : 'Know More'}
          </button>
        </div>
        <div className="blog-photo"data-aos="fade-up">
          <img src={hemant3} alt="Campaign Photo" className="campaign-photo"  />
        </div>
      </div>


  {showInfoBoxes && (
  <div className="info-boxes"data-aos="fade-up">
          <div className="info-box"data-aos="fade-up">
            <h2>Menstruation</h2>
            <p>Menstruation, or period, is normal vaginal bleeding that occurs as part of a woman's monthly cycle...</p>
            </div>
          <div className="info-box"data-aos="fade-up">
            <h2>Menopause</h2>
            <p>Menopause is the time in a woman's life when her periods (menstruation) stop, usually occurring between ages 45 to 55...</p>
          </div>
          <div className="info-box"data-aos="fade-up">
            <h2>Menarche</h2>
            <p>Menarche is defined as the first menstrual period in a female adolescent, typically occurring between the ages of 10 and 16...</p>
          </div>
        </div>
      )}
      
     
</section>





        <section className="blog1"data-aos="fade-up">
        <div className="blog-content1">
        <div className="blog-text1">
  
    <h1>Awareness and Sanitization</h1>
    <h3>Training & Sensitization</h3>
    <p>These workshops are designed to benefit schools, colleges, and workplaces by preparing college students, creating safer workplaces, and ensuring dignity and self-respect.</p>
    <h3>Sanitation and Facilities</h3>
    <p>Having access to clean and private spaces is crucial for managing menstruation. This includes access to toilets, clean water, soap, and disposal facilities. Many schools, workplaces, and public areas lack adequate facilities for menstruation management, which can lead to absenteeism, especially among young girls.</p>
  
  <button className="know-more-btn" onClick={handleKnowMore}>
            {showInfoBoxes ? 'Show Less' : 'Know More'}
          </button>
          </div>
  <div className="blog-photo1"data-aos="fade-up">
    <img src={hemant3} alt="Campaign Photo" className="campaign-photo" />
  </div>
  </div>

  {showInfoBoxes && (
  <div className="info-boxes"data-aos="fade-up">
          <div className="info-box">
            <h2>Menstrual Hygiene Day – May 28</h2>
            <p>Each year on May 28, Menstrual Hygiene Day is observed to highlight good menstrual hygiene practices during your period and to raise awareness about the importance of access to menstrual products, period education, and sanitation facilities.</p>
            
          </div>
          <div className="info-box">
            <h2>Menstrual hygiene is important for your health</h2>
            <h3>Wear lightweight, breathable clothing </h3>
            <p>(such as cotton underwear). Tight fabrics can trap moisture and heat, allowing germs to grow.</p>
            <h3>Know More</h3>
          </div>
          <div className="info-box">
            <h2>Practice healthy habits during your period</h2>
            <h3>Wash your hands </h3>
            <p>before and after using the restroom and before and after using a menstrual product.
            </p>
           
        <h3>Know More</h3>
          </div>
        </div>
      )}
</section>
  

<section className="blog2"data-aos="fade-up">
<div className="blog-content2">
<div className="blog-text2">
    <h1>Establishing a menstrual-friendly environment</h1>
    <h3>Creating Period-Friendly Workplaces</h3>
    <p>Our workshops aim to create menstrual-friendly workplaces by promoting inclusive,</p><p> gender neutral discussions on key aspects of menstrual health. By fostering sensitivity and understanding, we strive to build supportive and respectful environments where women feel comfortable and valued.</p>
    <button className="know-more-btn" onClick={handleKnowMore}>
            {showInfoBoxes ? 'Show Less' : 'Know More'}
          </button>
          </div>
  <div className="blog-photo2"data-aos="fade-up">
    <img src={rishav} alt="Campaign Photo" className="campaign-photo" />
  </div>
  </div>

  {showInfoBoxes && (
  <div className="info-boxes">
          <div className="info-box">
            <h2>What is Sustainable Menstruation?
            </h2>
            <p>Sustainable menstruation refers to the use of alternative products during one’s menstrual cycle for the benefit of the body and earth...</p>
            <h3>Know More</h3>
          </div>
          <div className="info-box">
            <h2>Environmental benfitis of reuseable mensurational product</h2>
           <p>There are menstrual products that create less of a burden on the environment as compared with the disposable pads and tampons mentioned above. </p>
            <h3>Know More</h3>
          </div>
          <div className="info-box">
            <h2>Barriers and accessibilty of reusable menstrual product </h2>
           <p>Lack of awareness concerning the environmental impacts of disposable menstrual products is one important barrier to their use. </p>
           
        <h3>Know More</h3>
          </div>
        </div>
         )}
</section>
 
  
 

      <section className="testimonials">
        <h2>What People Are Saying</h2>
        <div className="testimonial-item">
          <p>"Empower Her has made me feel more confident and informed about my health. It's an amazing initiative!"</p>
          <h4>- A Participant</h4>
        </div>
        <div className="testimonial-item">
          <p>"The workshops are truly eye-opening and have helped me understand how to manage menstruation better."</p>
          <h4>- A Student</h4>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Help Us Reach More Women</h2>
        <p>Your support can help us expand our impact and empower more women. Donate today!</p>
        <button className="donate-button">Contact Now</button>
      </section>

      <footer className="footer-container">
      <div className="footer-main">
       
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Safe N' Happy Periods Logo"style={{ width: '50px', height: 'auto' }}  />
          </div>
          <p className="footer-description">
           Empower Her aims to foster a shame-free, dignified, and sustainable menstruation experience for women. By combining education and pad distribution, we raise awareness and improve access to sanitation.
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
  </div>
  );
};
