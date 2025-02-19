import React, { useEffect, useState } from 'react';
import './Staffs.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


function Staffs() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    // Fetch the staff data from the JSON server
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        // Filter users with the role 'Staff'
        const staffData = data.filter(user => user.role === 'Staff');
        setStaff(staffData);
      })
      .catch(error => console.error('Error fetching staff data:', error));
  }, []);

  return (
    <div className="staff-container">
      <Navbar />
      <Sidebar /> 
      <h2>Staff Members</h2>
      <div className="staff-list">
        {staff.length === 0 ? (
          <p>No staff members available</p>
        ) : (
          staff.map(member => (
            <div key={member.id} className="staff-card">
              <img 
                src={`https://api.adorable.io/avatars/100/${member.email}.png`} 
                alt="Profile" 
                className="staff-img" 
              />
              <div className="staff-info">
                <h3>{member.name}</h3>
                <p>{member.email}</p>
                <p>Role: {member.role}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Staffs;
