import React from 'react';
import './CSS/Impact.css';  
import salwi from '../Components/Assets/salwi.jpg';
import hemant3 from '../Components/Assets/hemant3.jpg';
import rishav from '../Components/Assets/rishav.jpg';
import salwi1 from '../Components/Assets/salwi1.jpg';

const Ourimpact = () => {
  return (
    <div className="impact-container">
      <header className="impact-header">
        
        <h1>Our Impact</h1>
        <p>Empowering women, one period at a time.</p>
      </header>

      <section className="impact-stats">
        <h2>Key Statistics</h2>
        <div className="stats-grid">
          <div className="stat-item"><h3>5000+</h3><p>Women Reached</p></div>
          <div className="stat-item"><h3>100+</h3><p>Workshops Conducted</p></div>
          <div className="stat-item"><h3>50+</h3><p>Schools Educated</p></div>
          <div className="stat-item"><h3>300+</h3><p>Volunteers Engaged</p></div>
        </div>
      </section>

      <section className="impact-about">
        <h2>Pain Free </h2>
        <h2>Shame Free Mensuration</h2>
        <p>Empower Her is a project based on Mensuration, a registered organization focused on awareness campaigns.</p>
        <p>Our mission is to empower women by providing knowledge and fostering positive transformation, joy, and freedom.</p>
        
      </section>
      <nav className="navbar">
        <a href="#" className="nav-link active">Menstrual Health & Hygiene (MHH)</a>
        <a href="#" className="nav-link">POSH Act Awareness & Education</a>
        <a href="#" className="nav-link">Creating Period-Friendly Workplaces</a>
        <a href="#" className="nav-link">Menstrual Educator Program</a>
      </nav>


      <section className="blog">
        <div className="blog-content">
          <div className="blog-text">
            <h1>Menstrual Health and Hygiene Awareness Workshops</h1>
            <h3>Educating & Empowering</h3>
            <p>MHH workshops are creatively designed for school girls (9-18 yrs) and college students, aiming to create Shame-Free and Pain-Free Periods.</p>
            <p>Our workshops foster gender-neutral and healthy conversations about Menarche, Menstruation, and Menopause.</p>
          </div>
          <div className="blog-photo">
  <img src={salwi} alt="Campaign Photo" className="campaign-photo" style={{ width: '500px', height: 'auto' }} />
</div>
        </div>

        <div className="info-boxes">
          <div className="info-box">
            <h2>Menstruation</h2>
            <p>Menstruation, or period, is normal vaginal bleeding that occurs as part of a woman's monthly cycle...</p>
          </div>
          <div className="info-box">
            <h2>Menopause</h2>
            <p>Menopause is the time in a woman's life when her periods (menstruation) stop, usually occurring between ages 45 to 55...</p>
          </div>
          <div className="info-box">
            <h2>Menarche</h2>
            <p>Menarche is defined as the first menstrual period in a female adolescent, typically occurring between the ages of 10 and 16...</p>
        
          </div>
        </div>
        <section className="blog1">
        <div className="blog-content1">
        <div className="blog-text1">
  
    <h1>Awareness and Sanitization</h1>
    <h3>Training & Sensitization</h3>
    <p>These workshops are designed to benefit schools, colleges, and workplaces by preparing college students, creating safer workplaces, and ensuring dignity and self-respect.</p>
    <h3>Sanitation and Facilities</h3>
    <p>Having access to clean and private spaces is crucial for managing menstruation. This includes access to toilets, clean water, soap, and disposal facilities. Many schools, workplaces, and public areas lack adequate facilities for menstruation management, which can lead to absenteeism, especially among young girls.</p>
  </div>
  <div className="blog-photo1">
    <img src={hemant3} alt="Campaign Photo" className="campaign-photo" />
  </div>
  </div>
</section>

<section className="blog2">
<div className="blog-content2">
<div className="blog-text2">
    <h1>Establishing a menstrual-friendly environment</h1>
    <h3>Creating Period-Friendly Workplaces</h3>
    <p>Our workshops aim to create menstrual-friendly workplaces by promoting inclusive,</p><p> gender neutral discussions on key aspects of menstrual health. By fostering sensitivity and understanding, we strive to build supportive and respectful environments where women feel comfortable and valued.</p>
  </div>
  <div className="blog-photo2">
    <img src={rishav} alt="Campaign Photo" className="campaign-photo" />
  </div>
  </div>
</section>
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
        <button className="donate-button">Donate Now</button>
      </section>
      <div className="container">
      <div className="textSection">
        <h1 className="title">Pain</h1>
        <h2 className="subtitle">Free Menstruation</h2>
        <p className="description">
         Empower Her is a project based on menusration awareness and education
          Our mission is to empower women, fostering positive transformation, joy, and freedom.
        </p>
       
        <div className="buttons">
          <button className="button">Login</button>
          <button className="button">Play</button>
        </div>
        <div className="footerIcons">
          <div className="icon">Workshops</div>
          <div className="icon">Login</div>
          <div className="icon">Volunteering</div>
        </div>
      </div>
      <div className="imageGallery">
        <img src={hemant3} alt="Workshop 1" className="image" />
        <img src={salwi} alt="Workshop 2" className="image" />
        <img src={rishav} alt="Workshop 3" className="image" />
        <img src={salwi1} alt="Workshop 4" className="image" />
      </div>
    </div>
    </div>
    
  );
};

export default Ourimpact;
