// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";

const SupervisorNavbar = () => {
  const [userName, setUserName] = useState("User Name");
  const location = useLocation();
  const userId = location.state?.userId;

  // Fetch user user name from database
  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3000/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUserName(data.name));
    }
  }, [userId]);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#2d5d77" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Staff Management
        </Typography>
        <Typography variant="subtitle1">Welcome, {userName}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SupervisorNavbar;