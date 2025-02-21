import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Card, CardContent, Avatar } from "@mui/material";
import { useLocation } from "react-router-dom";

const SupervisorStaffList = () => {
  const [users, setUsers] = useState([]); // Stores all users from DB
  const [search, setSearch] = useState(""); // Search input state

  const location = useLocation();
  const loggedInUserId = location.state?.userId; // Get logged-in user ID

  // 🔹 Fetch users from API
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // 🔹 Get logged-in user details
  const loggedInUser = users.find(user => user.id === loggedInUserId);

  // 🔹 Filter staff based on logged-in user's institute
  const staffMembers = users.filter(user =>
    user.institute === loggedInUser?.institute && user.role === "Staff"
  );

  // 🔹 Apply search filter (by name or email)
  const filteredStaff = staffMembers.filter(staff =>
    staff.name.toLowerCase().includes(search.toLowerCase()) ||
    staff.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 3, width: "75%", margin: "70px auto"}}>
      {/* 🔹 Page Heading */}
      <Card sx={{ bgcolor: "white", p: 2, mb: 2, boxShadow: 3, borderRadius: 1 }}>
        <Typography variant="h5" fontWeight="bold">Staff Members</Typography>
      </Card>

      {/* 🔹 Search Bar */}
      <TextField
        label="Search by Name or Email"
        variant="outlined"
        fullWidth
        sx={{ mb: 2, boxShadow: 3, borderRadius: 1 }}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔹 Staff List */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {filteredStaff.length > 0 ? (
          filteredStaff.map((staff) => (
            <Card 
              key={staff.id} 
              sx={{
                width: { xs: "100%", sm: "48%", md: "30%" }, // Responsive width
                bgcolor: "white",
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                transition: "0.3s",
                "&:hover": { boxShadow: 6, transform: "scale(1.03)", border: "2px solid #2d5d77" },
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar 
                  src={staff.photo} 
                  alt={staff.name} 
                  sx={{ width: 60, height: 60, boxShadow: 2 }}
                />
                <Box>
                  <Typography variant="h6" fontWeight="bold" color="primary">
                    {staff.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Email:</strong> {staff.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Gender:</strong> {staff.gender}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            No staff members found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SupervisorStaffList;
