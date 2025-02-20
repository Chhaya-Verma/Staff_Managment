import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Home, Info, ContactMail, Menu as MenuIcon } from "@mui/icons-material"; // Icons
import { Link } from "react-router-dom"; // Import Link for routing
import "./LandingPage.css";

// Define the LandingPageNavbar component
const LandingPageNavbar = () => {
  // Define the state variable for mobile menu open/close
  const [mobileOpen, setMobileOpen] = useState(false);

  // Function to handle the toggle of mobile menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Define the menu items with their corresponding icons
  const menuItems = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "About", icon: <Info />, path: "/about" }, // Added path
    { text: "Contact Us", icon: <ContactMail />, path: "/contact" }, // Added path
  ];

  // Define the drawer component for the mobile menu
  const drawer = (
    <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      classes={{ paper: "mobile-menu" }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} onClick={handleDrawerToggle} className="mobile-menu-item">
            <ListItemIcon style={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  // Render the LandingPageNavbar component
  return (
    <AppBar position="fixed" sx={{ background: "#2d5d77" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Staff Management
        </Typography>
        <div className="nav-links">
          {menuItems.map((item) => (
            <Button key={item.text} color="inherit" startIcon={item.icon}>
              <Link to={item.path} style={{ color: "inherit", textDecoration: "none" }}> {/* Link wrapper */}
                {item.text}
              </Link>
            </Button>
          ))}
        </div>
        <IconButton edge="end" color="inherit" onClick={handleDrawerToggle} className="menu-icon">
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {drawer}
    </AppBar>
  );
};

// Export the LandingPageNavbar component as the default export
export default LandingPageNavbar;
