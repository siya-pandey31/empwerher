import React from 'react';
import './CSS/Aboutus.css'; 
import banner3 from '../Components/Assets/banner3.png'; 
import hemant3 from '../Components/Assets/hemant3.jpg';

const Aboutus = () => {
  const handleViewMore = () => {
    alert("Redirect to gallery or load mmore photos here!")
  }
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <div className="aboutus-banner">
          <img src={banner3} alt="" />
        </div>
        <div className="aboutus-text">
          <h3 className="aboutus-heading">Empowering Hope</h3>
          <h1 className="aboutus-title">Our work create lasting change</h1>
          <p className="aboutus-paragrapgh">
          The MHH workshops offered by Empower Her are highly regarded and specifically designed for schools,
          aiming to foster shame-free and pain-free periods for girls aged 9 to 18 years. These workshops focus on:
          </p>
          <ul className="aboutus-list">
            <li><strong>Educating and Empowering Participants</strong>by imparting crucial knowledge about various aspects of menstrual health and hygiene.</li>
            <li><strong>Particular emphasis on pain managments </strong>through Yoga asanas</li>
          </ul>
          <p className="aboutus-paragraph">
          Our workshops encourage open and healthy conversations surrounding Menarche, Menstruation, and Menopause.
          They are crafted to ensure inclusivity and support, allowing women to share their experiences, perceptions, and celebrate their periods together.
          </p>

        </div>
        <div className="campaign-photo-section">
          <h2 className="campaign-photo-title">Our Campaign Photos</h2>
          <div className="campaign-photo-gallery">
            <img src={hemant3} alt="Campaign Photo 1" className="campaign-photo" />
            
          </div>
          <button className="view-more-photos-btn" onClick={handleViewMore}>
            View More Photos
          </button>
        </div>
      </div>
        </div>
  
  );
};

export default Aboutus;
