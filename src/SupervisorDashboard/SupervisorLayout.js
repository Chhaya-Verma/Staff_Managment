// // src/components/Dashboard.js
// import React from "react";
// import SupervisorSidebar from "./SupervisorSidebar";
// import  SupervisorNavbar from "./SupervisorNavbar";
// import { Grid, Card, CardContent, Typography } from "@mui/material";
// import { People, Task, AssignmentTurnedIn, Work } from "@mui/icons-material";

// const SupervisorLayout = () => {
//   const cardData = [
//     { title: "Total Staffs", count: 10, icon: <People fontSize="large" /> },
//     { title: "Total Leave Requests", count: 5, icon: <Work fontSize="large" /> },
//     { title: "Total Tasks", count: 15, icon: <Task fontSize="large" /> },
//     { title: "Assigned Tasks", count: 7, icon: <AssignmentTurnedIn fontSize="large" /> }
//   ];

//   return (
//     <>
//     <SupervisorNavbar />
//           <SupervisorSidebar />
//     <Grid container spacing={3}>
              
//       {cardData.map(({ title, count, icon }) => (
//         <Grid item xs={12} sm={6} md={3} key={title}>
//           <Card
//             sx={{
//               minWidth: 250,
//               textAlign: "center",
//               p: 2,
//               boxShadow: 3,
//               transition: "0.3s",
//               "&:hover": { boxShadow: 6, border: "2px solid #2d5d77" }
//             }}
//           >
//             <CardContent>
//               {icon}
//               <Typography variant="h5">{count}</Typography>
//               <Typography variant="subtitle1">{title}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//     </>
//   );
// };

// export default SupervisorLayout;


///////////////// Second perfect code ////////////////////////

// // src/components/SupervisorLayout.js
// import React from "react";
// import SupervisorSidebar from "./SupervisorSidebar";
// import SupervisorNavbar from "./SupervisorNavbar";
// import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
// import { People, Task, AssignmentTurnedIn, Work } from "@mui/icons-material";

// const SupervisorLayout = () => {
//   const cardData = [
//     { title: "Total Staffs", count: 10, icon: <People fontSize="large" /> },
//     { title: "Total Leave Requests", count: 5, icon: <Work fontSize="large" /> },
//     { title: "Total Tasks", count: 15, icon: <Task fontSize="large" /> },
//     { title: "Assigned Tasks", count: 7, icon: <AssignmentTurnedIn fontSize="large" /> }
//   ];

//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh" }}>
//       {/* Sidebar on the Left */}
//       <SupervisorSidebar />

//       {/* Main Content Area */}
//       <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
//         {/* Navbar at the Top */}
//         <SupervisorNavbar />

//         {/* Cards Area - Inside a Container */}
//         <Box sx={{ p: 3, mt: 8 }}> {/* Added margin-top to avoid overlap */}
//           <Grid container spacing={3}>
//             {cardData.map(({ title, count, icon }) => (
//               <Grid item xs={12} sm={6} md={3} key={title}>
//                 <Card
//                   sx={{
//                     minWidth: 250,
//                     textAlign: "center",
//                     p: 2,
//                     boxShadow: 3,
//                     transition: "0.3s",
//                     "&:hover": { boxShadow: 6, border: "2px solid #2d5d77" }
//                   }}
//                 >
//                   <CardContent>
//                     {icon}
//                     <Typography variant="h5">{count}</Typography>
//                     <Typography variant="subtitle1">{title}</Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default SupervisorLayout;

// // src/components/SupervisorLayout.js
// import React, { useState } from "react";
// import SupervisorSidebar from "./SupervisorSidebar";
// import SupervisorNavbar from "./SupervisorNavbar";
// import SupervisorCreateTask from "./SupervisorCreateTask";
// import { Grid, Card, CardContent, Typography, Box, Button } from "@mui/material";
// import { People, Task, AssignmentTurnedIn, Work } from "@mui/icons-material";

// const SupervisorLayout = () => {
//   const [showCreateTask, setShowCreateTask] = useState(false);

//   const cardData = [
//     { title: "Total Staffs", count: 10, icon: <People fontSize="large" /> },
//     { title: "Total Leave Requests", count: 5, icon: <Work fontSize="large" /> },
//     { title: "Total Tasks", count: 15, icon: <Task fontSize="large" /> },
//     { title: "Assigned Tasks", count: 7, icon: <AssignmentTurnedIn fontSize="large" /> }
//   ];

//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh" }}>
//       {/* Sidebar */}
//       <SupervisorSidebar />

//       {/* Main Content Area */}
//       <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
//         {/* Navbar */}
//         <SupervisorNavbar />

//         {/* Conditional Rendering for Create Task */}
//         {showCreateTask ? (
//           <SupervisorCreateTask onClose={() => setShowCreateTask(false)} />
//         ) : (
//           <Box sx={{ p: 3, mt: 8 }}>
//             <Button 
//               variant="contained" 
//               sx={{ backgroundColor: "#2d5d77", mb: 2 }}
//               onClick={() => setShowCreateTask(true)}
//             >
//               Create Task
//             </Button>
//             <Grid container spacing={3}>
//               {cardData.map(({ title, count, icon }) => (
//                 <Grid item xs={12} sm={6} md={3} key={title}>
//                   <Card
//                     sx={{
//                       minWidth: 250,
//                       textAlign: "center",
//                       p: 2,
//                       boxShadow: 3,
//                       transition: "0.3s",
//                       "&:hover": { boxShadow: 6, border: "2px solid #2d5d77" }
//                     }}
//                   >
//                     <CardContent>
//                       {icon}
//                       <Typography variant="h5">{count}</Typography>
//                       <Typography variant="subtitle1">{title}</Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default SupervisorLayout;

import React, { useState } from "react";
import SupervisorSidebar from "./SupervisorSidebar";
import Navbar from "../components/Navbar";
import SupervisorCreateTask from "./SupervisorCreateTask";
import SupervisorAllTasks from "./SupervisorAllTasks";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { People, Task, AssignmentTurnedIn, Work } from "@mui/icons-material";

const SupervisorLayout = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard"); // Sidebar control

  const cardData = [
    { title: "Total Staffs", count: 10, icon: <People fontSize="large" /> },
    { title: "Total Leave Requests", count: 5, icon: <Work fontSize="large" /> },
    { title: "Total Tasks", count: 15, icon: <Task fontSize="large" /> },
    { title: "Assigned Tasks", count: 7, icon: <AssignmentTurnedIn fontSize="large" /> }
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <SupervisorSidebar onMenuSelect={setSelectedPage} />

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Navbar */}
        <Navbar />

        {/* Conditional Rendering for Selected Page */}
        {selectedPage === "create-task" ? (
          <SupervisorCreateTask  />
        ) : selectedPage === "all-tasks" ? (
          <SupervisorAllTasks />
        ) : (
          <Box sx={{ p: 3, mt: 8 }}>
            <Grid container spacing={3}>
              {cardData.map(({ title, count, icon }) => (
                <Grid item xs={12} sm={6} md={3} key={title}>
                  <Card
                    sx={{
                      minWidth: 250,
                      textAlign: "center",
                      p: 2,
                      boxShadow: 3,
                      transition: "0.3s",
                      "&:hover": { boxShadow: 6, border: "2px solid #2d5d77" }
                    }}
                  >
                    <CardContent>
                      {icon}
                      <Typography variant="h5">{count}</Typography>
                      <Typography variant="subtitle1">{title}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SupervisorLayout;
