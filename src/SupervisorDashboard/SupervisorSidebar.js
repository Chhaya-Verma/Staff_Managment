import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Avatar, Divider, IconButton, Box, Typography } from "@mui/material";
import { Dashboard, Task, Assignment, People, Notifications, ExitToApp, Menu, ExpandLess, ExpandMore, Send, Inbox } from "@mui/icons-material";
import ProfileEdit from "./ProfileEdit";

const SupervisorSidebar = ({ onMenuSelect }) => {
  const [open, setOpen] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);
  const [openLeaveMenu, setOpenLeaveMenu] = useState(false);

  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, page: "dashboard" },
    { text: "Create Task", icon: <Task />, page: "create-task" },
    { text: "All Tasks", icon: <Assignment />, page: "all-tasks" },
    { text: "Assigned Task", icon: <Task />, page: "assigned-tasks" },
    { text: "Staff", icon: <People />, page: "staff" },
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
          {/* Leave Menu */}
          <ListItem button onClick={() => setOpenLeaveMenu(!openLeaveMenu)}>
            <ListItemIcon sx={{ color: "white" }}><Assignment /></ListItemIcon>
            <ListItemText primary="Leaves" />
            {openLeaveMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openLeaveMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => onMenuSelect("compose-leave")}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Send />
                </ListItemIcon>
                <ListItemText primary="Compose" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => onMenuSelect("sent-leaves")}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Inbox />
                </ListItemIcon>
                <ListItemText primary="Sent" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => onMenuSelect("inbox")}>
                <ListItemIcon sx={{ color: "white" }}>
                  <Inbox />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
            </List>
          </Collapse>

        </List>
      </Drawer>

      {/* Profile Edit Dialog */}
      <ProfileEdit open={openProfile} handleClose={() => setOpenProfile(false)} />
    </>
  );
};

export default SupervisorSidebar;
