// SupervisorComposeLeave.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TextField, Button, MenuItem, Card, CardContent, Typography } from "@mui/material";

const SupervisorComposeLeave = () => {

    const location = useLocation();
    const userId = location.state?.userId;

    const [admins, setAdmins] = useState([]);
    const [supervisorInstitute, setSupervisorInstitute] = useState(""); // Supervisor ka institute track karne ke liye
    const [leaveData, setLeaveData] = useState({
        subject: "",
        sendTo: "",
        sender: userId,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        reason: ""
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

    // **Step 2: Fetch Admin List but Filter by Supervisor's Institute**
    useEffect(() => {
        if (supervisorInstitute) {
            fetch("http://localhost:3000/users?role=Admin") // Fetch all Admins
                .then((res) => res.json())
                .then((data) => {
                    // Sirf wahi staff filter karo jo supervisor ke institute se hain
                    const filteredAdmin = data.filter(admin => admin.institute === supervisorInstitute);
                    setAdmins(filteredAdmin);
                });
        }
    }, [supervisorInstitute]); // Jab supervisorInstitute update ho tab ye effect chale

    const handleChange = (e) => {
        setLeaveData({ ...leaveData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        fetch("http://localhost:3000/leaves", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(leaveData),
        }).then(() => {
            alert("Leave request sent successfully!");
            setLeaveData({
                subject: "",
                sendTo: "",
                reason: "",
            });
        });
    };

    return (
        <Card sx={{ maxWidth: 500, margin: "auto", mt: 5, boxShadow: 3, p: 3 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Compose Leave Request</Typography>
                <TextField label="Subject" value={leaveData.subject} fullWidth margin="normal" name="subject" onChange={handleChange} />
                <TextField select label="Send To" value={leaveData.sendTo} fullWidth margin="normal" name="sendTo" onChange={handleChange}>
                    {admins.map((admin) => (
                        <MenuItem key={admin.id} value={admin.email}>{admin.email}</MenuItem>
                    ))}
                </TextField>
                <TextField label="Reason" value={leaveData.reason} fullWidth multiline rows={3} margin="normal" name="reason" onChange={handleChange} />
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>Send Request</Button>
            </CardContent>
        </Card>
    );
};

export default SupervisorComposeLeave;
