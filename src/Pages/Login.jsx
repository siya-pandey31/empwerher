import React, { useState } from "react";
import "./CSS/Login.css"; 


const GetInTouch = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  return (
    <div>
     
      {isVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
          
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
  );
};

export default GetInTouch;
