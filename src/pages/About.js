import React from 'react';
import './About.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import LandingPageNavbar from "./LandingPageNavbar";

const About = () => {
  return (
    <div className="about-container">
      <LandingPageNavbar />
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>𝗔𝗯𝗼𝘂𝘁 𝗦𝘁𝗮𝗳𝗳 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁</h1>
          <p>Yₒᵤᵣ gₒ-ₜₒ ₚₗₐₜfₒᵣₘ fₒᵣ ₑffₑcₜᵢᵥₑ ₑₘₚₗₒyₑₑ ₜₐₛₖ ₘₐₙₐgₑₘₑₙₜ, ₛₜᵣₑₐₘₗᵢₙₑd ₗₑₐᵥₑ ₐₚₚᵣₒᵥₐₗₛ, ₐₙd ₑₙₕₐₙcₑd ₜₑₐₘ cₒₗₗₐbₒᵣₐₜᵢₒₙ.{/*𝐘𝐨𝐮𝐫 𝐠𝐨-𝐭𝐨 𝐩𝐥𝐚𝐭𝐟𝐨𝐫𝐦 𝐟𝐨𝐫 𝐞𝐟𝐟𝐞𝐜𝐭𝐢𝐯𝐞 𝐞𝐦𝐩𝐥𝐨𝐲𝐞𝐞 𝐭𝐚𝐬𝐤 𝐦𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭, 𝐬𝐭𝐫𝐞𝐚𝐦𝐥𝐢𝐧𝐞𝐝 𝐥𝐞𝐚𝐯𝐞 𝐚𝐩𝐩𝐫𝐨𝐯𝐚𝐥𝐬, 𝐚𝐧𝐝 𝐞𝐧𝐡𝐚𝐧𝐜𝐞𝐝 𝐭𝐞𝐚𝐦 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧.*/}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <h2>Our Features</h2>
        <div className="features-row">
          <div className="feature-card">
            <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Photos.png" alt="Admin" className="feature-img" />
            <h3>Admin</h3>
            <p>Admins have full control over the platform. They can monitor and manage employees, update tasks, and ensure seamless operations across departments.</p>
          </div>
          <div className="feature-card">
            <img src="supervisorimg.png" alt="Supervisor" className="feature-img" />
            <h3>Supervisor</h3>
            <p>Supervisors can manage their teams, assign tasks, track progress, and ensure smooth workflow within their department or team.</p>
          </div>
          <div className="feature-card">
            <img src="staffimg.png" alt="Staff" className="feature-img" />
            <h3>Staff</h3>
            <p>Staff members can view their assigned tasks, update progress, request leaves, and receive notifications about important updates.</p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="mission">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>At Staff Management, our mission is to empower businesses with the tools needed to manage employees, tasks, and leaves efficiently. We believe that streamlined processes lead to improved productivity and happier teams.</p>
          </div>
          <div className="mission-img">
            <img src='https://media.istockphoto.com/id/1443245439/photo/business-meeting-businesswoman-woman-office-portrait-job-career-happy-businessman-teamwork.jpg?s=612x612&w=0&k=20&c=1ZR02c1UKfGdBCNWzzKlrwrVZuEiOqnAKcKF4V_t038=' alt='teamwork' />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-row">
          <div className="team-card">
            <img src="https://media.discordapp.net/attachments/1272413876989984898/1341424027264356382/WhatsApp_Image_2024-11-13_at_11.05.24_PM.jpeg?ex=67b5f1fa&is=67b4a07a&hm=2550621d44a499be9c88200d3dad1b264184c2ad688cc1b7037cce3c7ce5b682&=&format=webp&width=471&height=627" alt="Team Member 1" className="team-img" />
            <h3>Ina Dewangan</h3>
           <a href='https://www.linkedin.com/in/ina-dewangan/' ><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <div className="team-card">
            <img src="https://i.pinimg.com/736x/1e/31/ff/1e31ff2b22c02f4c2c22b05ff75a9b0b.jpg" alt="Team Member 2" className="team-img" />
            <h3>Chhaya Verma</h3>
            <p>CTO</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
      <div className="footer-container"> {/* Container for centering and layout */}
        <div className="footer-section"> {/* Section for Logo & Legal */}
          <div className="footer-logo">
            <img src="your-logo.png" alt="Your Logo" /> {/* Replace with your logo */}
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Careers</a>
          </div>
        </div>

        <div className="footer-section"> {/* Section for Contact, About, etc. */}
          <div className="footer-links">
            <a href="#">Contact</a>
            <a href="#">About Us</a>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
          </div>
        </div>

        <div className="footer-section"> {/* Section for Social Media */}
            <div className="footer-social">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} /> {/* Use FontAwesomeIcon component */}
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

        <div className="footer-section"> {/* Section for Newsletter */}
          <div className="newsletter">
            <p>Subscribe to our newsletter:</p>
            <div className="newsletter-input"> {/* Wrap input and button */}
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom"> {/* Separate bottom bar for copyright */}
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>

    </div>
  );
};

export default About;
