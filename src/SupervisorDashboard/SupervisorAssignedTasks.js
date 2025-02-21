/////////// Table form code ////////////

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { Box, Typography, TextField, Card } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";

// const SupervisorAssignedTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");

//   const location = useLocation();
//   const loggedInUserId = location.state?.userId;

//   // 🔹 Fetch Tasks & Users Data
//   useEffect(() => {
//     fetch("http://localhost:3000/tasks")
//       .then((res) => res.json())
//       .then((data) => {
//         const filteredTasks = data.filter(task => task.assignedTo === loggedInUserId);
//         setTasks(filteredTasks);
//       });

//     fetch("http://localhost:3000/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, [loggedInUserId]);

//   // 🔹 Get Admin Name using assignedBy ID
//   const getAdminName = (adminId) => {
//     const admin = users.find(user => user.id === adminId);
//     return admin ? admin.name : "Unknown";
//   };

//   // 🔹 Filtered Tasks for Search
//   const filteredTasks = tasks.filter(task =>
//     task.title.toLowerCase().includes(search.toLowerCase()) ||
//     task.dueDate.includes(search)
//   );

//   // 🔹 Table Columns
//   const columns = [
//     { field: "title", headerName: "Task Title", width: 200, flex: 1 },
//     { field: "description", headerName: "Description", width: 300, flex: 2 },
//     { field: "assignDate", headerName: "Assign Date", width: 150 },
//     { field: "dueDate", headerName: "Due Date", width: 150 },
//     {
//       field: "assignedBy",
//       headerName: "Assigned By (Admin)",
//       width: 180,
//       valueGetter: (params) => params.row?.assignedBy ? getAdminName(params.row.assignedBy) : "Unknown"
//     },
//   ];

//   return (
//     <Box sx={{ p: 3 }}>
//       {/* 🔹 White Patti with Heading */}
//       <Card sx={{ bgcolor: "white", p: 2, mb: 2, boxShadow: 3, borderRadius: 1, mt: 10 }}>
//         <Typography variant="h5" fontWeight="bold">Assigned Tasks</Typography>
//       </Card>

//       {/* 🔹 Search Bar */}
//       <TextField
//         label="Search by Name, Task Title or Date"
//         variant="outlined"
//         fullWidth
//         sx={{ mb: 2, boxShadow: 3, borderRadius: 1 }}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* 🔹 DataGrid for Assigned Tasks */}
//       <Box sx={{ width: "100%", overflowX: "auto", boxShadow: 3, borderRadius: 1 }}>
//         <DataGrid
//           rows={filteredTasks || []}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5, 10]}
//           autoHeight
//           sx={{
//             "& .MuiDataGrid-columnHeaders": {
//               bgcolor: "#2d5d77",
//               color: "#2d5d77",
//               fontWeight: "bold",
//             },
//             "& .MuiDataGrid-root": {
//               bgcolor: "white",
//             },
//             "& .MuiDataGrid-row": {
//               transition: "0.3s",
//               "&:hover": {
//                 bgcolor: "#f0f8ff",
//               },
//             },
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default SupervisorAssignedTasks;

/////////// Card form code second ////////////

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

  // 🔹 Get Admin Name using assignedBy ID
  const getAdminName = (adminId) => {
    const admin = users.find(user => user.id === adminId);
    return admin ? admin.name : "Unknown";
  };

  // 🔹 Filtered Tasks for Search
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) || // Filter by Task Title
    task.dueDate.includes(search) || // Filter by Due Date
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
        label="Search by Task Title, Due Date, or Admin Name"
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
