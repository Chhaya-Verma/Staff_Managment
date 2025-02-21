// // src/components/CreateTask.js
// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { TextField, Button, Typography, MenuItem, Paper } from "@mui/material";

// const SupervisorCreateTask = () => {

//     const location = useLocation();
//     const userId = location.state?.userId;
//     const [staffList, setStaffList] = useState([]);
//     const [taskData, setTaskData] = useState({
//         title: "",
//         assignDate: "",
//         endDate: "",
//         description: "",
//         assignedBy: userId, // Supervisor ID
//         assignedTo: "", // Staff ID
//         assignerRole: "Supervisor",
//     });

//     useEffect(() => {
//         fetch("http://localhost:3000/users?role=Staff") // Fetching staff members
//             .then((res) => res.json())
//             .then((data) => setStaffList(data));
//     }, []);

//     const handleChange = (e) => {
//         setTaskData({ ...taskData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = () => {
//         fetch("http://localhost:3000/tasks", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(taskData),
//         }).then(() => {
//             alert("Task Assigned Successfully!");
//             // **🔹 Reset Form Fields**
//             setTaskData({
//                 title: "",
//                 assignDate: "",
//                 endDate: "",
//                 description: "",
//                 assignedBy: "",
//                 assignedTo: "",
//             });
//         });
//     };

//     return (
//         <Paper elevation={3} sx={{ p: 3, maxWidth: "600px", mx: "auto", mt: 4, borderRadius: 2 }}>
//             <Typography variant="h6" sx={{ mb: 2, color: "#2d5d77" }}>Create Task</Typography>
//             <TextField label="Task Title" name="title" value={taskData.title} fullWidth onChange={handleChange} sx={{ mb: 2 }} />
//             <TextField type="date" label="Assign Date" name="assignDate" value={taskData.assignDate} fullWidth onChange={handleChange} sx={{ mb: 2 }} />
//             <TextField type="date" label="End Date" name="endDate" value={taskData.endDate} fullWidth onChange={handleChange} sx={{ mb: 2 }} />
//             <TextField label="Task Description" name="description" value={taskData.description} multiline rows={3} fullWidth onChange={handleChange} sx={{ mb: 2 }} />
//             <TextField select label="Assign To" name="assignedTo" value={taskData.assignedTo} fullWidth onChange={handleChange} sx={{ mb: 2 }}>
//                 {staffList.map((staff) => (
//                     <MenuItem key={staff.id} value={staff.id}>{staff.name}</MenuItem>
//                 ))}
//             </TextField>
//             <Button variant="contained" sx={{ backgroundColor: "#2d5d77" }} fullWidth onClick={handleSubmit}>Assign Task</Button>
//         </Paper>
//     );
// };

// export default SupervisorCreateTask;



import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TextField, Button, Typography, MenuItem, Paper } from "@mui/material";

const SupervisorCreateTask = () => {
    const location = useLocation();
    const userId = location.state?.userId;

    const [staffList, setStaffList] = useState([]);
    const [supervisorInstitute, setSupervisorInstitute] = useState(""); // Supervisor ka institute track karne ke liye
    const [taskData, setTaskData] = useState({
        title: "",
        assignDate: "",
        dueDate: "",
        description: "",
        assignedBy: userId, // Supervisor ID
        assignedTo: "", // Staff ID
        assignerRole: "Supervisor",
    });

    // **Step 1: Fetch Supervisor Details to Get Institute**
    useEffect(() => {
        if (userId) {
            fetch(`http://localhost:3000/users/${userId}`) // Supervisor ka data fetch kar rahe hain
                .then((res) => res.json())
                .then((data) => {
                    setSupervisorInstitute(data.institute); // Supervisor ka institute set kar rahe hain
                });
        }
    }, [userId]);

    // **Step 2: Fetch Staff List but Filter by Supervisor's Institute**
    useEffect(() => {
        if (supervisorInstitute) {
            fetch("http://localhost:3000/users?role=Staff") // Fetch all staff
                .then((res) => res.json())
                .then((data) => {
                    // Sirf wahi staff filter karo jo supervisor ke institute se hain
                    const filteredStaff = data.filter(staff => staff.institute === supervisorInstitute);
                    setStaffList(filteredStaff);
                });
        }
    }, [supervisorInstitute]); // Jab supervisorInstitute update ho tab ye effect chale

    const handleChange = (e) => {
        setTaskData({ ...taskData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(taskData),
        }).then(() => {
            alert("Task Assigned Successfully!");
            setTaskData({
                title: "",
                assignDate: "",
                dueDate: "",
                description: "",
                assignedBy: userId,
                assignedTo: "",
            });
        });
    };

    return (
        <Paper elevation={3} sx={{ p: 3, maxWidth: "600px", mx: "auto", mt: 4, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, color: "#2d5d77" }}>Create Task</Typography>
            <TextField label="Task Title" name="title" value={taskData.title} fullWidth onChange={handleChange} sx={{ mb: 2 }} />
            <TextField type="date" label="Assign Date" name="assignDate" value={taskData.assignDate} fullWidth onChange={handleChange} sx={{ mb: 2 }} />
            <TextField type="date" label="Due Date" name="dueDate" value={taskData.dueDate} fullWidth onChange={handleChange} sx={{ mb: 2 }} />
            <TextField label="Task Description" name="description" value={taskData.description} multiline rows={3} fullWidth onChange={handleChange} sx={{ mb: 2 }} />
            
            {/* Dropdown List for Staff (Filtered by Institute) */}
            <TextField select label="Assign To" name="assignedTo" value={taskData.assignedTo} fullWidth onChange={handleChange} sx={{ mb: 2 }}>
                {staffList.length > 0 ? (
                    staffList.map((staff) => (
                        <MenuItem key={staff.id} value={staff.id}>{staff.name}</MenuItem>
                    ))
                ) : (
                    <MenuItem disabled>No staff available</MenuItem>
                )}
            </TextField>

            <Button variant="contained" sx={{ backgroundColor: "#2d5d77" }} fullWidth onClick={handleSubmit}>Assign Task</Button>
        </Paper>
    );
};

export default SupervisorCreateTask;

