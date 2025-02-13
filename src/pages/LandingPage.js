import React from "react";
import { Link } from "react-router-dom"; // Link from react-router-dom for navigation

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Staff Management</h1>
      <p>Manage staff, tasks, and much more easily.</p>

      {/* Link to Register page */}
      <Link to="/register">
        <button className="register-btn">Register</button>
      </Link>
      
      {/* Link to Login page */}
      <Link to="/login">
        <button className="login-btn">Login</button>
      </Link>
    </div>
  );
}

export default LandingPage;
