// // src/components/ProfileEdit.js
// import React, { useState } from "react";
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Avatar, IconButton } from "@mui/material";
// import { PhotoCamera } from "@mui/icons-material";

// const ProfileEdit = ({ open, handleClose }) => {
//   const [userName, setUserName] = useState("User Name");
//   const [profilePic, setProfilePic] = useState("https://img.freepik.com/premium-photo/abstract-blue-background_196038-15599.jpg");

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setProfilePic(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Edit Profile</DialogTitle>
//       <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//         <Avatar src={profilePic} sx={{ width: 80, height: 80, mb: 2 }} />
//         <input accept="image/*" id="upload-photo" type="file" hidden onChange={handleImageUpload} />
//         <label htmlFor="upload-photo">
//           <IconButton component="span">
//             <PhotoCamera />
//           </IconButton>
//         </label>
//         <TextField
//           label="Name"
//           fullWidth
//           variant="outlined"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           sx={{ mt: 2 }}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Cancel</Button>
//         <Button variant="contained" color="primary" onClick={handleClose}>
//           Save
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default ProfileEdit;


// src/components/ProfileEdit.js
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Avatar, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const ProfileEdit = ({ open, handleClose }) => {
  const [profilePic, setProfilePic] = useState("https://img.freepik.com/premium-photo/abstract-blue-background_196038-15599.jpg");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Profile Picture</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Avatar src={profilePic} sx={{ width: 100, height: 100, mb: 2 }} />
        <input accept="image/*" id="upload-photo" type="file" hidden onChange={handleImageUpload} />
        <label htmlFor="upload-photo">
          <IconButton component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileEdit;