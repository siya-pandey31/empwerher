import React, { useState } from 'react';
import './CSS/Login.css';
import banner3 from '../Components/Assets/banner3.png'; // Replace with the correct path to your image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h3>Contact Us</h3>
        <h1>How can we help?</h1>
        <p>
          Have a question or feedback? Fill out the form below, and we'll get back to you.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={banner3} alt="Children smiling" />
      </div>
    </div>
  );
};

export default Contact;
