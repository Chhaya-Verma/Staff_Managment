import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ profileImage, handleProfileImageChange, userData }) {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="profile">
        {/* Profile Image */}
        <div className="profile-img-container">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="profile-img"
            style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
          />
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleProfileImageChange}
            className="profile-img-upload" 
          />
        </div>
      </div>
      <div className="nav">
        <ul>
          <li onClick={() => navigate("/admin")}>Dashboard</li>
          <li onClick={() => navigate("/create-task")}>Create Task</li>
          <li onClick={() => navigate("/tasks")}>All Tasks</li>
          <li onClick={() => navigate("/supervisors")}>Supervisors</li>
          <li onClick={() => navigate("/staffs")}>Staffs</li>
          <li onClick={() => navigate("/leaves")}>Leaves</li>
          <li onClick={() => navigate("/notifications")}>Notifications</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
