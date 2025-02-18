//////////////second changes sidebar/////////////////////
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AdminDashboard.css'; 
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
function AdminDashboard() {
  const location = useLocation();
  const { userData } = location.state || {}; 
  const navigate = useNavigate();
  
  // State to handle profile image
  const [profileImage, setProfileImage] = useState(userData.profileImage || 'https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179856.jpg'); 

  // Handle profile image change
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set the new profile image
      };
      reader.readAsDataURL(file); // Convert file to base64 URL
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  // Mock data for metrics
  const totalSupervisors = 5;
  const totalStaffs = 10;
  const totalLeaveRequests = 3;
  const totalTasks = 15;

  // Handle logout
  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      <Navbar />
      <div className="admin-dashboard">
       <Sidebar profileImage={profileImage} handleProfileImageChange={handleProfileImageChange} userData={userData} />
        <div className="main-content">
          <div className="dashboard-header">
            <h1>Welcome, {userData.name}</h1>
          </div>

          <div className="metrics">
            <div className="metric">
              <h3>Total Supervisors</h3>
              <p>{totalSupervisors}</p>
            </div>
            <div className="metric">
              <h3>Total Staffs</h3>
              <p>{totalStaffs}</p>
            </div>
            <div className="metric">
              <h3>Total Leave Requests</h3>
              <p>{totalLeaveRequests}</p>
            </div>
            <div className="metric">
              <h3>Total Tasks</h3>
              <p>{totalTasks}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
