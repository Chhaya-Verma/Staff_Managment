// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { Box, Typography, TextField, IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { Edit, Delete } from "@mui/icons-material";

// const SupervisorAllTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [users, setUsers] = useState([]); 
//   const [search, setSearch] = useState("");
//   const [editTask, setEditTask] = useState(null);
//   const [openEditDialog, setOpenEditDialog] = useState(false);

//   const location = useLocation();
//   const loggedInSupervisorId = location.state?.userId;

//   // Fetch tasks and users from db.json
//   useEffect(() => {
//     fetch("http://localhost:3000/tasks")
//       .then((res) => res.json())
//       .then((data) => {
//         const filteredTasks = data.filter((task) => task.assignedBy === loggedInSupervisorId);
//         console.log("Filtered Tasks:", filteredTasks);
//         setTasks(filteredTasks);
//       });

//     fetch("http://localhost:3000/users") 
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Users Data:", data);
//         setUsers(data);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" }).then(() => {
//       setTasks(tasks.filter((task) => task.id !== id));
//     });
//   };

//   const handleEditClick = (task) => {
//     setEditTask(task);
//     setOpenEditDialog(true);
//   };

//   const handleEditChange = (e) => {
//     setEditTask({ ...editTask, [e.target.name]: e.target.value });
//   };

//   const handleSaveEdit = () => {
//     fetch(`http://localhost:3000/tasks/${editTask.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(editTask),
//     }).then(() => {
//       setTasks(tasks.map((task) => (task.id === editTask.id ? editTask : task)));
//       setOpenEditDialog(false);
//     });
//   };

//   const getUserName = (userId) => {
//     const user = users.find((user) => user.id === userId);
//     return user ? user.name : "Unknown";
//   };

//   const filteredTasks = tasks.filter(
//     (task) =>
//       task.title.toLowerCase().includes(search.toLowerCase()) ||
//       task.assignDate.includes(search) ||
//       task.endDate.includes(search)
//   );

//   const columns = [
//     { field: "id", headerName: "Task ID", width: 90 },
//     { field: "title", headerName: "Task Title", width: 200, flex: 1 },
//     {
//       field: "assignTo",
//       headerName: "Assigned To",
//       width: 150,
//       valueGetter: (params) => {
//         if (!params || !params.row) return "Unknown"; // Fix for undefined error
//         return getUserName(params.row.assignTo);
//       },
//     },
//     { field: "assignDate", headerName: "Assign Date", width: 150 },
//     { field: "endDate", headerName: "End Date", width: 150 },
//     { field: "description", headerName: "Description", width: 250, flex: 2 },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 150,
//       renderCell: (params) => (
//         <>
//           <IconButton onClick={() => handleEditClick(params.row)} color="primary">
//             <Edit />
//           </IconButton>
//           <IconButton onClick={() => handleDelete(params.row.id)} color="error">
//             <Delete />
//           </IconButton>
//         </>
//       ),
//     },
//   ];

//   return (
//     <Box sx={{ p: 3 }}>
//       <Box sx={{ width: "98s%", bgcolor: "white", p: 2, mb: 2, boxShadow: 3, borderRadius: 1, mt: 10 }}>
//         <Typography variant="h5" fontWeight="bold">
//           All Tasks
//         </Typography>
//       </Box>

//       <TextField
//         label="Search by Name or Date"
//         variant="outlined"
//         fullWidth
//         sx={{ mb: 2 }}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <Box sx={{ width: "100%", overflowX: "auto", boxShadow: 3, borderRadius: 1 }}>
//         <DataGrid
//           rows={filteredTasks}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5, 10]}
//           autoHeight
//           sx={{
//             "& .MuiDataGrid-columnHeaders": {
//               bgcolor: "#2d5d77",
//               color: "white",
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

//       <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
//         <DialogTitle>Edit Task</DialogTitle>
//         <DialogContent>
//           <TextField label="Title" name="title" fullWidth sx={{ mb: 2 }} value={editTask?.title || ""} onChange={handleEditChange} />
//           <TextField label="Assign To" name="assignTo" fullWidth sx={{ mb: 2 }} value={editTask?.assignTo || ""} onChange={handleEditChange} />
//           <TextField label="Assign Date" name="assignDate" type="date" fullWidth sx={{ mb: 2 }} value={editTask?.assignDate || ""} onChange={handleEditChange} />
//           <TextField label="End Date" name="endDate" type="date" fullWidth sx={{ mb: 2 }} value={editTask?.endDate || ""} onChange={handleEditChange} />
//           <TextField label="Description" name="description" fullWidth multiline rows={3} value={editTask?.description || ""} onChange={handleEditChange} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenEditDialog(false)} color="secondary">Cancel</Button>
//           <Button onClick={handleSaveEdit} color="primary" variant="contained">Save</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default SupervisorAllTasks;
////////////////////// Second perfect code ////////////////////////
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { Box, Typography, TextField, IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { Edit, Delete } from "@mui/icons-material";

// const SupervisorAllTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [editTask, setEditTask] = useState(null);
//   const [openEditDialog, setOpenEditDialog] = useState(false);

//   const location = useLocation();
//   const loggedInSupervisorId = location.state?.userId;

//   // Fetch tasks and users from API
//   useEffect(() => {
//     fetch("http://localhost:3000/tasks")
//       .then((res) => res.json())
//       .then((data) => {
//         const filteredTasks = data.filter((task) => task.assignedBy === loggedInSupervisorId);
//         setTasks(filteredTasks);
//       });

//     fetch("http://localhost:3000/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//       });
//   }, [loggedInSupervisorId]);

//   // Function to delete a task
//   const handleDelete = (id) => {
//     fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" }).then(() => {
//       setTasks(tasks.filter((task) => task.id !== id));
//     });
//   };

//   // Open edit dialog with selected task
//   const handleEditClick = (task) => {
//     setEditTask(task);
//     setOpenEditDialog(true);
//   };

//   // Handle input changes in edit dialog
//   const handleEditChange = (e) => {
//     setEditTask({ ...editTask, [e.target.name]: e.target.value });
//   };

//   // Save the updated task
//   const handleSaveEdit = () => {
//     fetch(`http://localhost:3000/tasks/${editTask.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(editTask),
//     }).then(() => {
//       setTasks(tasks.map((task) => (task.id === editTask.id ? editTask : task)));
//       setOpenEditDialog(false);
//     });
//   };

//   // Function to get the name of the assigned user
//   const getUserName = (userId) => {
//     const user = users.find((user) => user.id === userId);
//     return user ? user.name : "Unknown";
//   };

//   // Filter tasks based on search input
//   const filteredTasks = tasks.filter(
//     (task) =>
//       task.title.toLowerCase().includes(search.toLowerCase()) ||
//       task.assignDate.includes(search) ||
//       task.endDate.includes(search)
//   );

//   // Define table columns
//   const columns = [
//     { field: "id", headerName: "Task ID", width: 90 },
//     { field: "title", headerName: "Task Title", width: 200, flex: 1, cellClassName: "wrap-text" },
//     {
//       field: "assignedTo",
//       headerName: "Assigned To",
//       width: 150,
//       valueGetter: (params) => {
//         if (!params || !params.row) return "Unknown"; // ✅ Ensure params.row exists
//         return params.row.assignTo ? getUserName(params.row.assignTo) : "Unknown";
//       },
//     },
//     { field: "assignDate", headerName: "Assign Date", width: 150 },
//     { field: "endDate", headerName: "End Date", width: 150 },
//     { field: "description", headerName: "Description", width: 250, flex: 2, cellClassName: "wrap-text" },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 150,
//       renderCell: (params) => {
//         if (!params || !params.row) return null; // ✅ Ensure params.row exists
//         return (
//           <>
//             <IconButton onClick={() => handleEditClick(params.row)} color="primary">
//               <Edit />
//             </IconButton>
//             <IconButton onClick={() => handleDelete(params.row.id)} color="error">
//               <Delete />
//             </IconButton>
//           </>
//         );
//       },
//     },
//   ];
  

//   return (
//     <Box sx={{ p: 3 }}>
//       <Box sx={{ width: "98%", bgcolor: "white", p: 2, mb: 2, boxShadow: 3, borderRadius: 1, mt: 10 }}>
//         <Typography variant="h5" fontWeight="bold">
//           All Tasks
//         </Typography>
//       </Box>

//       <TextField
//         label="Search by Name or Date"
//         variant="outlined"
//         fullWidth
//         sx={{ mb: 2 }}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <Box sx={{ width: "100%", overflowX: "auto", boxShadow: 3, borderRadius: 1 }}>
//         <DataGrid
//           rows={filteredTasks || []} // Ensuring rows is never undefined
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5, 10]}
//           autoHeight
//           sx={{
//             "& .MuiDataGrid-columnHeaders": {
//               bgcolor: "#2d5d77",
//               color: "white",
//               fontWeight: "bold",
//             },
//             "& .wrap-text": {
//               whiteSpace: "normal",
//               wordWrap: "break-word",
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

//       {/* Edit Dialog */}
//       <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
//         <DialogTitle>Edit Task</DialogTitle>
//         <DialogContent>
//           <TextField label="Title" name="title" fullWidth sx={{ mb: 2 }} value={editTask?.title || ""} onChange={handleEditChange} />
//           <TextField label="Assign To" name="assignTo" fullWidth sx={{ mb: 2 }} value={editTask?.assignTo || ""} onChange={handleEditChange} />
//           <TextField label="Assign Date" name="assignDate" type="date" fullWidth sx={{ mb: 2 }} value={editTask?.assignDate || ""} onChange={handleEditChange} />
//           <TextField label="End Date" name="endDate" type="date" fullWidth sx={{ mb: 2 }} value={editTask?.endDate || ""} onChange={handleEditChange} />
//           <TextField label="Description" name="description" fullWidth multiline rows={3} value={editTask?.description || ""} onChange={handleEditChange} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenEditDialog(false)} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={handleSaveEdit} color="primary" variant="contained">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default SupervisorAllTasks;

// SupervisorAllTasks.js

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, TextField, IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, Delete } from "@mui/icons-material";

const SupervisorAllTasks = () => {
  const [tasks, setTasks] = useState([]);  // Tasks data store karega
  const [users, setUsers] = useState([]);  // Users data store karega
  const [search, setSearch] = useState(""); // Search filter ke liye
  const [editTask, setEditTask] = useState(null); // Edit task ke liye
  const [openEditDialog, setOpenEditDialog] = useState(false); // Dialog open/close state
  
  const location = useLocation();
  const loggedInSupervisorId = location.state?.userId; // Current logged-in supervisor ID

  // 🔹 Data Fetching (Tasks & Users)
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => {
        const filteredTasks = data.filter(task => task.assignedBy === loggedInSupervisorId);
        setTasks(filteredTasks);
      });

    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [loggedInSupervisorId]);

  // 🔹 Get Staff Name using assignedTo ID
  const getUserName = (userId) => {
    const user = users.find(user => user.id === userId);
    return user ? user.name : "Unknown";
  };

  // 🔹 Task Delete Function (DB.json se bhi delete karega)
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" })
      .then(() => setTasks(tasks.filter(task => task.id !== id)));
  };

  // 🔹 Edit Task Handlers
  const handleEditClick = (task) => {
    setEditTask(task);
    setOpenEditDialog(true);
  };

  const handleEditChange = (e) => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value });
  };

  const handleSaveEdit = () => {
    fetch(`http://localhost:3000/tasks/${editTask.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editTask),
    }).then(() => {
      setTasks(tasks.map(task => (task.id === editTask.id ? editTask : task)));
      setOpenEditDialog(false);
    });
  };

  // 🔹 Filtered Tasks (Search ke liye)
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.assignDate.includes(search) ||
    task.endDate.includes(search)
  );

  // 🔹 Table Columns Definition
  const columns = [
    { field: "id", headerName: "Task ID", width: 100 },
    { field: "title", headerName: "Task Title", width: 200, flex: 1, cellClassName: "wrap-text" },
    {
      field: "assignedTo",
      headerName: "Assigned To",
      width: 180,
      valueGetter: (params) => params.row?.assignedTo ? getUserName(params.row.assignedTo) : "Unknown"
    },
    { field: "assignDate", headerName: "Assign Date", width: 150 },
    { field: "endDate", headerName: "End Date", width: 150 },
    { field: "description", headerName: "Description", width: 250, flex: 2, cellClassName: "wrap-text" },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleEditClick(params.row)} color="primary">
            <Edit />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)} color="error">
            <Delete />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ width: "98%", bgcolor: "white", p: 2, mb: 2, boxShadow: 3, borderRadius: 1, mt: 10 }}>
        <Typography variant="h5" fontWeight="bold">All Tasks</Typography>
      </Box>

      {/* 🔹 Search Bar */}
      <TextField
        label="Search by Name or Date"
        variant="outlined"
        fullWidth
        sx={{ mb: 2, boxShadow: 3, borderRadius: 1 }}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔹 Tasks Table */}
      <Box sx={{ width: "100%", overflowX: "auto", boxShadow: 3, borderRadius: 1 }}>
        <DataGrid
          rows={filteredTasks || []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          autoHeight
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              bgcolor: "#2d5d77",
              color: "white",
              fontWeight: "bold",
            },
            "& .wrap-text": {
              whiteSpace: "normal",
              wordWrap: "break-word",
            },
            "& .MuiDataGrid-root": {
              bgcolor: "white",
            },
            "& .MuiDataGrid-row": {
              transition: "0.3s",
              "&:hover": {
                bgcolor: "#f0f8ff",
              },
            },
          }}
        />
      </Box>

      {/* 🔹 Edit Dialog */}
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField label="Title" name="title" fullWidth sx={{ mb: 2 }} value={editTask?.title || ""} onChange={handleEditChange} />
          <TextField label="Assign To" name="assignedTo" fullWidth sx={{ mb: 2 }} value={editTask?.assignedTo || ""} onChange={handleEditChange} />
          <TextField label="Assign Date" name="assignDate" type="date" fullWidth sx={{ mb: 2 }} value={editTask?.assignDate || ""} onChange={handleEditChange} />
          <TextField label="End Date" name="endDate" type="date" fullWidth sx={{ mb: 2 }} value={editTask?.endDate || ""} onChange={handleEditChange} />
          <TextField label="Description" name="description" fullWidth multiline rows={3} value={editTask?.description || ""} onChange={handleEditChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)} color="secondary">Cancel</Button>
          <Button onClick={handleSaveEdit} color="primary" variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SupervisorAllTasks;
