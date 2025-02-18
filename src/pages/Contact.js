import React from "react";
import "./Contact.css"; // Linking external CSS
import { FaRunning, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container">
      {/* Background sections */}
      <div className="background white-bg"></div>
      <div className="background blue-bg"></div>

      {/* Form Section */}
      <div className="form-section">
        <h1>ℂ𝕠𝕟𝕥𝕒𝕔𝕥 𝕌𝕤</h1>
        <p>𝑯𝒂𝒗𝒆 𝒂 𝒒𝒖𝒆𝒔𝒕𝒊𝒐𝒏? 𝑭𝒊𝒍𝒍 𝒐𝒖𝒕 𝒕𝒉𝒆 𝒇𝒐𝒓𝒎 𝒃𝒆𝒍𝒐𝒘 𝒕𝒐 𝒈𝒆𝒕 𝒊𝒏 𝒕𝒐𝒖𝒄𝒉 𝒘𝒊𝒕𝒉 𝒖𝒔!</p>

        {/* Form Fields */}
        <div className="contact-form">
          <input type="text" placeholder="Enter your Name" />
          <input type="email" placeholder="Enter your Email" />
          <textarea placeholder="Enter your Message" rows="4"></textarea>
          <button className="submit-btn">Submit</button>
        </div>
      </div>

      {/* Overlapping Grey Card with Info Section */}
      <div className="card">
        {/* Info Section */}
        <div className="info-section">
          <div className="info-box">
            <div className="icon"><FaRunning /></div>
            <h3>ABOUT CLUB</h3>
            <p>Running Guide <br /> Workouts</p>
          </div>
          <div className="info-box">
            <div className="icon"><FaPhone /></div>
            <h3>PHONE (LANDLINE)</h3>
            <p>+912 3 567 8987 <br /> +912 5 252 3336</p>
          </div>
          <div className="info-box">
            <div className="icon"><FaMapMarkerAlt /></div>
            <h3>OUR OFFICE LOCATION</h3>
            <p>The Interior Design Studio <br /> Al Quoz 1, Colorado, USA</p>
          </div>
          {/* Email Support Info Box */}
          <div className="info-box">
            <div className="icon"><FaEnvelope /></div>
            <h3>SUPPORT EMAIL</h3>
            <p>support@staffmanagement.io</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
