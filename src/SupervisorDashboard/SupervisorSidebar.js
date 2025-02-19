// // src/components/Sidebar.js
// import React, { useState } from "react";
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, IconButton, Box, Typography } from "@mui/material";
// import { Dashboard, Task, Assignment, People, Notifications, ExitToApp, Menu } from "@mui/icons-material";

// const SupervisorSidebar = ({ user }) => {
//   const [open, setOpen] = useState(true);

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: open ? 250 : 70,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: open ? 250 : 70,
//           boxSizing: "border-box",
//           backgroundColor: "rgba(45, 93, 119, 0.8)",
//           color: "white",
//           backdropFilter: "blur(10px)"
//         }
//       }}
//     >
//       <Box sx={{ display: "flex", alignItems: "center", p: 2, justifyContent: "space-between" }}>
//         <Avatar src={"https://img.freepik.com/premium-photo/abstract-blue-background_196038-15599.jpg?semt=ais_hybrid"} />
//         {open && (
//           <Box>
//             <Typography>User name</Typography>
//             <Typography variant="caption">user email</Typography>
//           </Box>
//         )}
//         <IconButton onClick={() => setOpen(!open)} color="inherit">
//           <Menu />
//         </IconButton>
//       </Box>

//       <Divider />

//       <List>
//         {[
//           { text: "Dashboard", icon: <Dashboard /> },
//           { text: "Create Task", icon: <Task /> },
//           { text: "All Tasks", icon: <Assignment /> },
//           { text: "Assigned Task", icon: <Task /> },
//           { text: "Staff", icon: <People /> },
//           { text: "Leaves", icon: <Assignment /> },
//           { text: "Notifications", icon: <Notifications /> },
//           { text: "Logout", icon: <ExitToApp /> }
//         ].map(({ text, icon }) => (
//           <ListItem button key={text}>
//             <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
//             {open && <ListItemText primary={text} />}
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default SupervisorSidebar;

//////////////////////// Second perfect code ////////////////////////

// import React, { useState } from "react";
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, IconButton, Box, Typography } from "@mui/material";
// import { Dashboard, Task, Assignment, People, Notifications, ExitToApp, Menu } from "@mui/icons-material";
// import ProfileEdit from "./ProfileEdit";

// const SupervisorSidebar = ({ user }) => {
//   const [open, setOpen] = useState(true);
//   const [openProfile, setOpenProfile] = useState(false);

//   return (
//     <>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: open ? 250 : 70,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: open ? 250 : 70,
//             boxSizing: "border-box",
//             backgroundColor: "rgba(45, 93, 119, 0.8)",
//             color: "white",
//             backdropFilter: "blur(10px)"
//           }
//         }}
//       >
//         <Box sx={{ display: "flex", alignItems: "center", p: 2, justifyContent: "space-between" }}>
//           <Avatar 
//             src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=170667a&w=0&k=20&c=LPUo_WZjbXXNnF6ok4uQr8I_Zj6WUVnH_FpREg21qaY=" 
//             sx={{ cursor: "pointer" }}
//             onClick={() => setOpenProfile(true)} 
//           />
//           {open && (
//             <Box>
//               <Typography>User Name</Typography>
//             </Box>
//           )}
//           <IconButton onClick={() => setOpen(!open)} color="inherit">
//             <Menu />
//           </IconButton>
//         </Box>

//         <Divider />

//         <List>
//           {[{ text: "Dashboard", icon: <Dashboard /> }, { text: "Create Task", icon: <Task /> }, { text: "All Tasks", icon: <Assignment /> }, { text: "Assigned Task", icon: <Task /> }, { text: "Staff", icon: <People /> }, { text: "Leaves", icon: <Assignment /> }, { text: "Notifications", icon: <Notifications /> }, { text: "Logout", icon: <ExitToApp /> }].map(({ text, icon }) => (
//             <ListItem button key={text}>
//               <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
//               {open && <ListItemText primary={text} />}
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>

//       {/* Profile Edit Dialog */}
//       <ProfileEdit open={openProfile} handleClose={() => setOpenProfile(false)} />
//     </>
//   );
// };

// export default SupervisorSidebar;

import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, IconButton, Box, Typography } from "@mui/material";
import { Dashboard, Task, Assignment, People, Notifications, ExitToApp, Menu } from "@mui/icons-material";
import ProfileEdit from "./ProfileEdit";

const SupervisorSidebar = ({ onMenuSelect }) => {
  const [open, setOpen] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);

  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, page: "dashboard" },
    { text: "Create Task", icon: <Task />, page: "create-task" },
    { text: "All Tasks", icon: <Assignment />, page: "all-tasks" },
    { text: "Assigned Task", icon: <Task />, page: "assigned-tasks" },
    { text: "Staff", icon: <People />, page: "staff" },
    { text: "Leaves", icon: <Assignment />, page: "leaves" },
    { text: "Notifications", icon: <Notifications />, page: "notifications" },
    { text: "Logout", icon: <ExitToApp />, page: "logout" },
  ];

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? 250 : 70,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 250 : 70,
            boxSizing: "border-box",
            backgroundColor: "rgba(45, 93, 119, 0.8)",
            color: "white",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", p: 2, justifyContent: "space-between" }}>
          <Avatar
            src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=170667a&w=0&k=20&c=LPUo_WZjbXXNnF6ok4uQr8I_Zj6WUVnH_FpREg21qaY="
            sx={{ cursor: "pointer" }}
            onClick={() => setOpenProfile(true)}
          />
          {open && <Typography>User Name</Typography>}
          <IconButton onClick={() => setOpen(!open)} color="inherit">
            <Menu />
          </IconButton>
        </Box>

        <Divider />

        <List>
          {menuItems.map(({ text, icon, page }) => (
            <ListItem button key={text} onClick={() => onMenuSelect(page)}>
              <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
              {open && <ListItemText primary={text} />}
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Profile Edit Dialog */}
      <ProfileEdit open={openProfile} handleClose={() => setOpenProfile(false)} />
    </>
  );
};

export default SupervisorSidebar;
