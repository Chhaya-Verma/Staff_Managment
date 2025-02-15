import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Home, Info, ContactMail, Menu as MenuIcon } from "@mui/icons-material"; // Icons
import "./LandingPage.css";

const LandingPageNavbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const menuItems = [
      { text: "Home", icon: <Home /> },
      { text: "About", icon: <Info /> },
      { text: "Contact Us", icon: <ContactMail /> },
    ];

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

    return (
      <AppBar position="fixed" sx={{ background: "#2d5d77" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Staff Management
          </Typography>
          <div className="nav-links">
            {menuItems.map((item) => (
              <Button key={item.text} color="inherit" startIcon={item.icon}>
                {item.text}
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

export default LandingPageNavbar;
