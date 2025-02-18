import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>𝔸𝕓𝕠𝕦𝕥 𝕊𝕥𝕒𝕗𝕗 𝕄𝕒𝕟𝕒𝕘𝕖𝕞𝕖𝕟𝕥</h1>
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
            <img src="https://sabimages.com/wp-content/uploads/2024/07/cute-girl-pic-dp12.jpg" alt="Team Member 1" className="team-img" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTOVQrZNUkmmPB83Omw4NK_Yqp3N3U1EdCJ8x8Ost0z8INm65LaG9NiCO3KMsY63fSjI&usqp=CAU" alt="Team Member 2" className="team-img" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-logo">
      <img src="logo.png" alt="Staff Management Logo" />
    </div>
    <p>&copy; 2025 Staff Management | All Rights Reserved</p>
    <div className="footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Careers</a>
      <a href="mailto:support@staffmanagement.io">Contact</a>
      <a href="#">About Us</a>
      <a href="#">FAQ</a>
      <a href="#">Blog</a>
    </div>
    <div className="footer-social">
      <a href="#" className="social-icon">Facebook</a>
      <a href="#" className="social-icon">Twitter</a>
      <a href="#" className="social-icon">LinkedIn</a>
      <a href="#" className="social-icon">Instagram</a>
    </div>
    <div className="newsletter">
      <p>Subscribe to our newsletter:</p>
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
    <button className="back-to-top">Back to Top</button>
  </div>
</footer>

    </div>
  );
};

export default About;
