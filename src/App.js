import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage"; // Import LandingPage
import Login from "./auth/Login"; // Import Login
import Register from "./auth/Register"; // Import Register
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import StaffDashboard from "./StaffDashboard/StaffDashboard";
import SupervisorDashboard from "./SupervisorDashboard/SupervisorDashboard";
import CreateTask from "./AdminDashboard/CreateTask";
import About from "./pages/About"; 
import ContactUs from "./pages/Contact";
import AdminAllTask from "./AdminDashboard/AdminAllTask";
import Supervisors from "./AdminDashboard/Supervisors";
import Staffs from "./AdminDashboard/Staffs";

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
    <Route path="/staff" element={<StaffDashboard />} />
    <Route path="/supervisor" element={<SupervisorDashboard />} />
       <Route path="/create-task" element={<CreateTask />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<ContactUs />} />
       <Route path="/admin/all-tasks" element={<AdminAllTask />} />
      <Route path="/supervisors" element={<Supervisors />} />
      <Route path="/staffs" element={<Staffs />} />
      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
