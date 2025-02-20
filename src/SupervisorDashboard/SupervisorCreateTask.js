// src/components/CreateTask.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TextField, Button, Typography, MenuItem, Paper } from "@mui/material";

const SupervisorCreateTask = () => {

    const location = useLocation();
    const userId = location.state?.userId;
    const [staffList, setStaffList] = useState([]);
    const [taskData, setTaskData] = useState({
        title: "",
        assignDate: "",
        endDate: "",
        description: "",
        assignedBy: userId, // Supervisor ID
        assignedTo: "", // Staff ID
        assignerRole: "Supervisor",
    });

    useEffect(() => {
        fetch("http://localhost:3000/users?role=Staff") // Fetching staff members
            .then((res) => res.json())
            .then((data) => setStaffList(data));
    }, []);

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
            // **🔹 Reset Form Fields**
            setTaskData({
                title: "",
                assignDate: "",
                endDate: "",
                description: "",
                assignedBy: "",
                assignedTo: "",
            });
        });
    };

    return (
        <Paper elevation={3} sx={{ p: 3, maxWidth: "600px", mx: "auto", mt: 4, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, color: "#2d5d77" }}>Create Task</Typography>
            <TextField label="Task Title" name="title" value={taskData.title} fullWidth onChange={handleChange} sx={{ mb: 2 }} />
            <TextField type="date" label="Assign Date" name="assignDate" value={taskData.assignDate} fullWidth onChange={handleChange} sx={{ mb: 2 }} />
            <TextField type="date" label="End Date" name="endDate" value={taskData.endDate} fullWidth onChange={handleChange} sx={{ mb: 2 }} />
            <TextField label="Task Description" name="description" value={taskData.description} multiline rows={3} fullWidth onChange={handleChange} sx={{ mb: 2 }} />
            <TextField select label="Assign To" name="assignedTo" value={taskData.assignedTo} fullWidth onChange={handleChange} sx={{ mb: 2 }}>
                {staffList.map((staff) => (
                    <MenuItem key={staff.id} value={staff.id}>{staff.name}</MenuItem>
                ))}
            </TextField>
            <Button variant="contained" sx={{ backgroundColor: "#2d5d77" }} fullWidth onClick={handleSubmit}>Assign Task</Button>
        </Paper>
    );
};

export default SupervisorCreateTask;
