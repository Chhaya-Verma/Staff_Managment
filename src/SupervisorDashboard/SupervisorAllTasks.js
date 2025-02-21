// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { Box, Typography, TextField, IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { Edit, Delete } from "@mui/icons-material";

// const SupervisorAllTasks = () => {
//   const [tasks, setTasks] = useState([]);  // Tasks data store karega
//   const [users, setUsers] = useState([]);  // Users data store karega
//   const [search, setSearch] = useState(""); // Search filter ke liye
//   const [editTask, setEditTask] = useState(null); // Edit task ke liye
//   const [openEditDialog, setOpenEditDialog] = useState(false); // Dialog open/close state
  
//   const location = useLocation();
//   const loggedInSupervisorId = location.state?.userId; // Current logged-in supervisor ID

//   // 🔹 Data Fetching (Tasks & Users)
//   useEffect(() => {
//     fetch("http://localhost:3000/tasks")
//       .then((res) => res.json())
//       .then((data) => {
//         const filteredTasks = data.filter(task => task.assignedBy === loggedInSupervisorId);
//         setTasks(filteredTasks);
//       });

//     fetch("http://localhost:3000/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, [loggedInSupervisorId]);

//   // 🔹 Get Staff Name using assignedTo ID
//   const getUserName = (userId) => {
//     const user = users.find(user => user.id === userId);
//     return user ? user.name : "Unknown";
//   };

//   // 🔹 Task Delete Function (DB.json se bhi delete karega)
//   const handleDelete = (id) => {
//     fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" })
//       .then(() => setTasks(tasks.filter(task => task.id !== id)));
//   };

//   // 🔹 Edit Task Handlers
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
//       setTasks(tasks.map(task => (task.id === editTask.id ? editTask : task)));
//       setOpenEditDialog(false);
//     });
//   };

//   // 🔹 Filtered Tasks (Search ke liye)
//   const filteredTasks = tasks.filter(task =>
//     task.title.toLowerCase().includes(search.toLowerCase()) ||
//     task.assignDate.includes(search) ||
//     task.endDate.includes(search)
//   );

//   // 🔹 Table Columns Definition
//   const columns = [
//     { field: "id", headerName: "Task ID", width: 100 },
//     { field: "title", headerName: "Task Title", width: 200, flex: 1, cellClassName: "wrap-text" },
//     {
//       field: "assignedTo",
//       headerName: "Assigned To",
//       width: 180,
//       valueGetter: (params) => params.row?.assignedTo ? getUserName(params.row.assignedTo) : "Unknown"
//     },
//     { field: "assignDate", headerName: "Assign Date", width: 150 },
//     { field: "endDate", headerName: "End Date", width: 150 },
//     { field: "description", headerName: "Description", width: 250, flex: 2, cellClassName: "wrap-text" },
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
//       <Box sx={{ width: "98%", bgcolor: "white", p: 2, mb: 2, boxShadow: 3, borderRadius: 1, mt: 10 }}>
//         <Typography variant="h5" fontWeight="bold">All Tasks</Typography>
//       </Box>

//       {/* 🔹 Search Bar */}
//       <TextField
//         label="Search by Name or Date"
//         variant="outlined"
//         fullWidth
//         sx={{ mb: 2, boxShadow: 3, borderRadius: 1 }}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* 🔹 Tasks Table */}
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

//       {/* 🔹 Edit Dialog */}
//       <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
//         <DialogTitle>Edit Task</DialogTitle>
//         <DialogContent>
//           <TextField label="Title" name="title" fullWidth sx={{ mb: 2 }} value={editTask?.title || ""} onChange={handleEditChange} />
//           <TextField label="Assign To" name="assignedTo" fullWidth sx={{ mb: 2 }} value={editTask?.assignedTo || ""} onChange={handleEditChange} />
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

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, TextField, IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, Delete } from "@mui/icons-material";

const SupervisorAllTasks = () => {
  const [tasks, setTasks] = useState([]);  // Store tasks
  const [users, setUsers] = useState([]);  // Store users
  const [search, setSearch] = useState(""); // Search state
  const [editTask, setEditTask] = useState(null); // Store task being edited
  const [openEditDialog, setOpenEditDialog] = useState(false); // Edit dialog state
  
  const location = useLocation();
  const loggedInSupervisorId = location.state?.userId; // Current logged-in supervisor ID

  // 🔹 Fetch Tasks & Users Data
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
    task.dueDate.includes(search)
  );

  // 🔹 Table Columns Definition (Headers Added)
  const columns = [
    { field: "id", headerName: "Tasks ID", width: 100 },
    { field: "title", headerName: "Task Title", width: 200, flex: 1, cellClassName: "wrap-text" },
    {
      field: "assignedTo",
      headerName: "Name", // ✅ Staff Name Now Visible
      width: 180,
      valueGetter: (params) => params.row?.assignedTo ? getUserName(params.row.assignedTo) : "Unknown"
    },
    { field: "assignDate", headerName: "Assign Date", width: 150 },
    { field: "dueDate", headerName: "Due Date", width: 150 },
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
          <IconButton onClick={() => handleDelete(params.row.id)} color="primary">
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
        label="Search by Name, Task Title or Date"
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
              bgcolor: "#2d5d77", // ✅ Dark Blue Background
              color: "#2d5d77", // ✅ Dark Blue Text
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
          <TextField label="Due Date" name="dueDate" type="date" fullWidth sx={{ mb: 2 }} value={editTask?.dueDate || ""} onChange={handleEditChange} />
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
