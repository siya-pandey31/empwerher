import React from 'react';
import './CSS/Volunteer.css';

const Volunteer = () => {
  return (
    <div className="volunteer-container">
      <header className="volunteer-header">
        <h1>Become a Volunteer</h1>
        <p>Join us in making a difference! Fill out the form below to get started.</p>
      </header>

      <section className="volunteer-info">
        <div className="info-section">
          <h2>Why Volunteer With Us?</h2>
          <p>
            Volunteering with us is a rewarding experience. You’ll gain new skills, make friends, 
            and contribute to meaningful causes. Together, we can create a positive impact in the community.
          </p>
        </div>

        <div className="info-section">
          <h2>What You’ll Gain</h2>
          <ul>
            <li>Professional Development and Training</li>
            <li>Networking Opportunities</li>
            <li>Recognition and Certificates</li>
            <li>Sense of Purpose and Fulfillment</li>
          </ul>
        </div>
      </section>

      <section className="volunteer-form">
    
      <div className="volunteer-form-box">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdNUH-LVevReKvaFui_pyGyJa-vvv6ZzsR9R0jtiD9TiLgDkQ/viewform?usp=sf_link"
          width="100%"
          height="780"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Volunteer Form"
        >
          Loading…
        </iframe>
        </div>
      </section>

      <section className="volunteer-testimonials">
        <h2>What Our Volunteers Say</h2>
        <div className="testimonial">
          <p>"Volunteering here has been life-changing! The team is so supportive, and I feel like I’m truly making a difference."</p>
          <cite>- hemant raj</cite>
        </div>
        <div className="testimonial">
          <p>"I’ve gained invaluable skills and met some amazing people along the way. Highly recommend joining this team!"</p>
          <cite>- Salwi Pandey.</cite>
        </div>
      </section>

      <section className="volunteer-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How much time do I need to commit?</h3>
          <p>Our volunteers usually commit a few hours each week, but we offer flexible schedules.</p>
        </div>
        <div className="faq-item">
          <h3>Do I need prior experience?</h3>
          <p>No prior experience is necessary! We provide all the training you need.</p>
        </div>
      </section>

      <footer className="volunteer-footer">
        <p>Thank you for considering joining our volunteer team! We look forward to making a difference together.</p>
      </footer>
    </div>
  );
};

export default Volunteer;
