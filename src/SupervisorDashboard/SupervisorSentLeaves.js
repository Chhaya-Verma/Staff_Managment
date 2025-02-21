// SupervisorSentLeaves.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TextField, Card, Typography, Dialog, DialogTitle, DialogContent, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const SupervisorSentLeaves = () => {
  const [leaves, setLeaves] = useState([]);
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedLeave, setSelectedLeave] = useState(null);

  const location = useLocation();
  const loggedInUserId = location.state?.userId;
  
  useEffect(() => {
    fetch(`http://localhost:3000/leaves${loggedInUserId ? `?sender=${loggedInUserId}` : ""}`)
      .then(res => res.json())
      .then(data => {
        setLeaves(data);
        setFilteredLeaves(data);
      });
  }, [loggedInUserId]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredLeaves(leaves.filter(leave => leave.sendTo.includes(value) || leave.date.includes(value)));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/leaves/${id}`, { method: "DELETE" })
      .then(() => setLeaves(leaves.filter(leave => leave.id !== id)));
  };

  return (
    <Card sx={{ maxWidth: 800, margin: "auto", mt: 10, p: 2 }}>
      <TextField label="Search by Email or Date" fullWidth value={search} onChange={handleSearch} margin="normal" />
      {filteredLeaves.map(leave => (
        <Card key={leave.id} sx={{ display: "flex", justifyContent: "space-between", p: 2, mt: 2, boxShadow: 2, cursor: "pointer" }} onClick={() => setSelectedLeave(leave)}>
          <Typography>{leave.sendTo}</Typography>
          <Typography>{leave.subject}</Typography>
          <Typography>{leave.date}</Typography>
          <IconButton onClick={(e) => { e.stopPropagation(); handleDelete(leave.id); }}>
            <DeleteIcon color="error" />
          </IconButton>
        </Card>
      ))}
      {selectedLeave && (
        <Dialog open={!!selectedLeave} onClose={() => setSelectedLeave(null)}>
          <DialogTitle>Leave Details</DialogTitle>
          <DialogContent>
            <Typography><b>To:</b> {selectedLeave.sendTo}</Typography>
            <Typography><b>Subject:</b> {selectedLeave.subject}</Typography>
            <Typography><b>Date:</b> {selectedLeave.date}</Typography>
            <Typography><b>Time:</b> {selectedLeave.time}</Typography>
            <Typography><b>Reason:</b> {selectedLeave.reason}</Typography>
          </DialogContent>
          <Button onClick={() => setSelectedLeave(null)}>Close</Button>
        </Dialog>
      )}
    </Card>
  );
};

export default SupervisorSentLeaves;

