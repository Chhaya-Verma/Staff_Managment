import React from 'react';
import './Navbar.css'; // You'll want to create a CSS file to style your Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://st4.depositphotos.com/11956860/28789/v/450/depositphotos_287891936-stock-illustration-illustration-icon-concept-sustainable-employee.jpg" alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <img src="https://img.icons8.com/m_rounded/200/FFFFFF/appointment-reminders.png" alt="Notifications" className="notification-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
