import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

export const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>Empower Her</p>
 
    
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("home") }}>
          <Link style={{ textDecoration: 'none' }} to='/'>HOME</Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("aboutus") }}>
          <Link style={{ textDecoration: 'none' }} to='/aboutus'>ABOUT US</Link>
          {menu === "aboutus" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("ourimpact") }}>
          <Link style={{ textDecoration: 'none' }} to='/ourimpact'> OUR IMPACT </Link>
          {menu === "ourimpact" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("volunteer") }}>
          <Link style={{ textDecoration: 'none' }} to='/volunteer'>VOLUNTEER</Link>
          {menu === "volunteer" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("periodtracker") }}>
          <Link style={{ textDecoration: 'none' }} to='/periodtracker'>PERIOD TRACKER</Link>
          {menu === "periodtracker" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("contact") }}>
          <Link style={{ textDecoration: 'none' }} to='/contact'>CONTACT</Link>
          {menu === "contact" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("login") }}>
          <Link style={{ textDecoration: 'none' }} to='/login'>
          <button onClick={handleOpen} className="get-in-touch-button">
        Get in Touch
        </button>
              
 
    <div>
      {/* Button to open the form */}
      

      {/* Conditional rendering of the modal */}
      {isVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
          <button onClick={handleClose} className="close-button">
            ×
              </button>
            <form>
              <label>
                Name:
                <input type="text" name="name" placeholder="Your Name" />
              </label>
              <label>
                Email:
                <input type="email" name="email" placeholder="Your Email" />
              </label>
              <label>
                Message:
                <textarea name="message" placeholder="Your Message"></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>

           </Link>
          {menu === "login" ? <hr /> : <></>}
        </li>
      </ul>
      </div>
   
  )
}
