import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LandingPageNavbar from "./LandingPageNavbar";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="hero-section">
      <LandingPageNavbar />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <Typography variant="h3" className="hero-title">
          Welcome to Staff Management
        </Typography>
        <Typography variant="body1" className="hero-subtitle">
          Manage your employees efficiently with our system.
        </Typography>
        <div className="hero-buttons">
          <Link to="/register">
            <Button variant="contained" color="primary">
              Register
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outlined" color="primary">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
