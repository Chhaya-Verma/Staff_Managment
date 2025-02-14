import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; // Import LandingPage
import Login from "./auth/Login"; // Import Login
import Register from "./auth/Register"; // Import Register
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import SupervisorDashboard from "./pages/SupervisorDashboard";

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

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/supervisor" element={<StaffDashboard />} />
        <Route path="/staff" element={<SupervisorDashboard />} />
      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
