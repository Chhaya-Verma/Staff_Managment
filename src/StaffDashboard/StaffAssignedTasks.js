
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, TextField, Card, CardContent } from "@mui/material";

const SupervisorAssignedTasks = () => {
  const [tasks, setTasks] = useState([]); // State to store assigned tasks
  const [users, setUsers] = useState([]); // State to store users data
  const [search, setSearch] = useState(""); // State for search input

  const location = useLocation();
  const loggedInUserId = location.state?.userId; // Get the logged-in user ID from route state

  // 🔹 Fetch Tasks & Users Data when component mounts
  useEffect(() => {
    // Fetch tasks assigned to the logged-in user
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => {
        const filteredTasks = data.filter(task => task.assignedTo === loggedInUserId);
        setTasks(filteredTasks);
      });

    // Fetch users to get admin names
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [loggedInUserId]);

  // 🔹 Get Assigner Name using assignedBy ID
  const getAdminName = (assignerId) => {
    const assigner = users.find(user => user.id === assignerId);
    return assigner ? assigner.name : "Unknown";
  };

  // 🔹 Filtered Tasks for Search
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) || // Filter by Task Title
    task.dueDate.includes(search) || // Filter by Due Date
    task.assignerRole.toLowerCase().includes(search.toLowerCase()) || // Filter by Assigner Role
    getAdminName(task.assignedBy).toLowerCase().includes(search.toLowerCase()) // Filter by Assigned By (Admin Name)
  );

  return (
    <Box sx={{ p: 3 }}>
      {/* 🔹 White Patti with Heading */}
      <Card sx={{ bgcolor: "white", p: 2, mb: 2, boxShadow: 3, borderRadius: 1, mt: 10 }}>
        <Typography variant="h5" fontWeight="bold">Assigned Tasks</Typography>
      </Card>

      {/* 🔹 Search Bar */}
      <TextField
        label="Search by Task Title, Date, Role or Assigner Name"
        variant="outlined"
        fullWidth
        sx={{ mb: 2, boxShadow: 3, borderRadius: 1 }}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔹 Assigned Tasks - Card View */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <Card 
              key={task.id} 
              sx={{
                width: { xs: "100%", sm: "48%", md: "30%" }, // Responsive Width for different devices
                bgcolor: "white",
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                transition: "0.3s",
                "&:hover": { boxShadow: 6, transform: "scale(1.02)", border: "2px solid #2d5d77" },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" color="primary">
                  {task.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  {task.description}
                </Typography>
                <Typography variant="body2">
                  <strong>Assigned By:</strong> {getAdminName(task.assignedBy)}
                </Typography>
                <Typography variant="body2">
                  <strong>Role:</strong> {task.assignerRole}
                </Typography>
                <Typography variant="body2">
                  <strong>Assign Date:</strong> {task.assignDate}
                </Typography>
                <Typography variant="body2">
                  <strong>Due Date:</strong> {task.dueDate}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            No tasks assigned yet.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SupervisorAssignedTasks;
