// Volunteer.js
import React from 'react';


const Volunteer = () => {
  return (
    <div className="volunteer">
      <h1>Become a Volunteer</h1>
      <p>Thank you for your interest in volunteering with us! Please fill out the form below:</p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdNUH-LVevReKvaFui_pyGyJa-vvv6ZzsR9R0jtiD9TiLgDkQ/viewform?usp=sf_link" // Replace with your Google Form URL
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
  );
};

export default Volunteer;
