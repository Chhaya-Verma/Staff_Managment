import React, { useState } from "react";
import SupervisorSidebar from "./SupervisorSidebar";
import Navbar from "../components/Navbar";
import SupervisorCreateTask from "./SupervisorCreateTask";
import SupervisorAllTasks from "./SupervisorAllTasks";
import SupervisorAssignedTasks from "./SupervisorAssignedTasks";
import SupervisorStaffList from "./SupervisorStaffList";
import SupervisorComposeLeave from "./SupervisorComposeLeave";
import SupervisorSentLeaves from "./SupervisorSentLeaves";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { People, Task, AssignmentTurnedIn, Work } from "@mui/icons-material";

const SupervisorLayout = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard"); // Sidebar control

  const cardData = [
    { title: "Total Staffs", count: 10, icon: <People fontSize="large" /> },
    { title: "Total Leave Requests", count: 5, icon: <Work fontSize="large" /> },
    { title: "Total Tasks", count: 15, icon: <Task fontSize="large" /> },
    { title: "Assigned Tasks", count: 7, icon: <AssignmentTurnedIn fontSize="large" /> }
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <SupervisorSidebar onMenuSelect={setSelectedPage} />

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Navbar */}
        <Navbar />

        {/* Conditional Rendering for Selected Page */}
        {selectedPage === "create-task" ? (
          <SupervisorCreateTask />
        ) : selectedPage === "all-tasks" ? (
          <SupervisorAllTasks />
        ) : selectedPage === "assigned-tasks" ? (
          <SupervisorAssignedTasks />
        ) : selectedPage === "staff" ? (
          <SupervisorStaffList />
        ) : selectedPage === "compose-leave" ? (
          <SupervisorComposeLeave />
        ) : selectedPage === "sent-leaves" ? (
          <SupervisorSentLeaves />
        ) : (
          <Box sx={{ p: 3, mt: 8 }}>
            <Grid container spacing={3}>
              {cardData.map(({ title, count, icon }) => (
                <Grid item xs={12} sm={6} md={3} key={title}>
                  <Card
                    sx={{
                      minWidth: 250,
                      textAlign: "center",
                      p: 2,
                      boxShadow: 3,
                      transition: "0.3s",
                      "&:hover": { boxShadow: 6, border: "2px solid #2d5d77" }
                    }}
                  >
                    <CardContent>
                      {icon}
                      <Typography variant="h5">{count}</Typography>
                      <Typography variant="subtitle1">{title}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SupervisorLayout;
