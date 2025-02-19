import React, { useEffect, useState } from 'react';
import './Supervisors.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


function Supervisors() {
  const [supervisors, setSupervisors] = useState([]);
  useEffect(() => {
    // Fetch the supervisor data from the JSON server
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        console.log("Data fetched:", data); // Check what data is returned
        // Filter users with the role 'Supervisor'
        const supervisorData = data.filter(user => user.role === 'Supervisor');
        console.log("Filtered Supervisor Data:", supervisorData); // Check filtered data
        setSupervisors(supervisorData);
      })
      .catch(error => console.error('Error fetching supervisor data:', error));
  }, []);
  

  return (
    <div className="supervisors-container">
      <Navbar />
      <Sidebar />
      <h2>Supervisors</h2>
      <div className="supervisors-list">
        {supervisors.length === 0 ? (
          <p>No supervisors available</p>
        ) : (
          supervisors.map(supervisor => (
            <div key={supervisor.id} className="supervisor-card">
              <img 
                src={`https://api.adorable.io/avatars/100/${supervisor.email}.png`} 
                alt="Profile" 
                className="supervisor-img" 
              />
              <div className="supervisor-info">
                <h3>{supervisor.name}</h3>
                <p>{supervisor.email}</p>
                <p>Role: {supervisor.role}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Supervisors;
