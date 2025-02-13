import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; // Import LandingPage
import Login from "./auth/Login"; // Import Login
import Register from "./auth/Register"; // Import Register

function App() {
  return (
    <Router>
    <div>
      {/* Use Routes instead of Switch */}
      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<LandingPage />} />
  
        {/* Route for Register Page */}
        <Route path="/register" element={<Register />} />
  
        {/* Route for Login Page */}
        <Route path="/login" element={<Login />} />
  
        {/* Catch-all route (for invalid paths) */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
