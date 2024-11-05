import React from 'react';
import './CSS/Login.css';
import hemant3 from '../Components/Assets/hemant3.jpg';
import rishav from '../Components/Assets/rishav.jpg';
import salwi from '../Components/Assets/salwi.jpg';
import salwi1 from '../Components/Assets/salwi1.jpg';

const Login = () => {
  return (
    <div className="container">
      <div className="textSection">
        <h1 className="title">Pain</h1>
        <h2 className="subtitle">Free Menstruation</h2>
        <p className="description">
          Safe N’ Happy Periods is a project of AMODINI Foundation, a registered charitable trust in India.
          Our mission is to empower women, fostering positive transformation, joy, and freedom.
        </p>
        <p className="taxInfo">
          <em>All Donations are tax-exempt under Section 80G of the India Income Tax Act.</em>
        </p>
        <div className="buttons">
          <button className="button">Donate now</button>
          <button className="button">Play</button>
        </div>
        <div className="footerIcons">
          <div className="icon">Workshops</div>
          <div className="icon">Pad Donation</div>
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
  );
};

export default Login;
