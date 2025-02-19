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


// // src/components/SupervisorNavbar.js
// import React, { useState } from "react";
// import { AppBar, Toolbar, Typography, IconButton, Avatar, Menu, MenuItem } from "@mui/material";
// import ProfileEdit from "./ProfileEdit";

// const SupervisorNavbar = ({ userName }) => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [openProfile, setOpenProfile] = useState(false);

//   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);

//   return (
//     <>
//       <AppBar position="fixed" sx={{ backgroundColor: "#2d5d77", zIndex: 1201 }}>
//         <Toolbar>
//           {/* Left side title */}
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Staff Management
//           </Typography>

//           {/* Right side user profile with name */}
//           <Typography variant="body1" sx={{ marginRight: 2 }}>
//             {userName || "User Name"}
//           </Typography>
//           <IconButton onClick={handleMenuOpen} color="inherit">
//             <Avatar src="https://img.freepik.com/premium-photo/abstract-blue-background_196038-15599.jpg" />
//           </IconButton>

//           {/* Dropdown Menu for Edit Profile */}
//           <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//             <MenuItem onClick={() => setOpenProfile(true)}>Edit Photo</MenuItem>
//           </Menu>
//         </Toolbar>
//       </AppBar>

//       {/* Profile Edit Dialog */}
//       <ProfileEdit open={openProfile} handleClose={() => setOpenProfile(false)} />
//     </>
//   );
// };

// export default SupervisorNavbar;
