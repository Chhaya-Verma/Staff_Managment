// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CreateTask.css'; // Create appropriate CSS for styling
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';

// function CreateTask() {
//   const [taskTitle, setTaskTitle] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [dueDate, setDueDate] = useState('');
//   const [assignedTo, setAssignedTo] = useState('');
//   const [users, setUsers] = useState([]); // State for users (supervisors and staff)
//   const navigate = useNavigate();

//   // Fetch users (supervisors and staff) dynamically from the API
//   useEffect(() => {
//     fetch('http://localhost:3000/users') // Fetching users from the backend
//       .then(response => response.json())
//       .then(data => {
//         console.log(data); // Add this line to see the fetched data
//         setUsers(data.filter(user => user.role === "Supervisor" || user.role === "Staff"));
//       })
      
//       .catch(error => console.error("Error fetching users:", error));
//   }, []);

//   // Handle form submission to save the task
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Create a new task object
//     const newTask = {
//       title: taskTitle,
//       description: taskDescription,
//       dueDate: dueDate,
//       assignedTo: assignedTo,
//     };

//     // Send the task to the backend (JSON server or any backend API)
//     fetch('http://localhost:3000/tasks', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newTask),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log("Task created:", data);
//         alert("Task assigned  successfully to " + assignedTo);
//       })
//       .catch(error => console.error("Error creating task:", error));
//   };

//   return (
    
//     <div className="create-task">
//       <Navbar />
//       <Sidebar />
//       <h1>Create Task</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Task Title</label>
//           <input
//             type="text"
//             value={taskTitle}
//             onChange={(e) => setTaskTitle(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             value={taskDescription}
//             onChange={(e) => setTaskDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>

//         <div className="form-group">
//           <label>Due Date</label>
//           <input
//             type="date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Assigned To</label>
//           <select
//             value={assignedTo}
//             onChange={(e) => setAssignedTo(e.target.value)}
//             required
//           >
//             <option value="">Select Employee</option>
//             {users.map(user => (
//               <option key={user.id} value={user.name}>
//                 {user.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <button type="submit">Assign  Task</button>
//       </form>
//     </div>
//   );
// }

// export default CreateTask;



/////////////try to seprate supervisor and staff tast - working well////////////
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateTask.css'; // Create appropriate CSS for styling
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [users, setUsers] = useState([]); // State for users (supervisors and staff)
  const [userType, setUserType] = useState(''); // To track whether Supervisor or Staff is selected
  const navigate = useNavigate();

  // Fetch users (supervisors and staff) dynamically from the API
  useEffect(() => {
    fetch('http://localhost:3000/users') // Fetching users from the backend
      .then(response => response.json())
      .then(data => {
        console.log(data); // Add this line to see the fetched data
        setUsers(data.filter(user => user.role === "Supervisor" || user.role === "Staff"));
      })
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  // Handle form submission to save the task
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      dueDate: dueDate,
      assignedTo: assignedTo, // Store user ID, not name
    };

    // Send the task to the backend (JSON server or any backend API)
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Task created:", data);
        alert("Task assigned successfully to user with ID: " + assignedTo);

        setTaskTitle('');
        setTaskDescription('');
        setDueDate('');
        setAssignedTo('');
        setUserType('');
      })
      .catch(error => console.error("Error creating task:", error));
  };

  return (
    <div className="create-task">
      <Navbar />
      <Sidebar />
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Task Title</label>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Assign Task Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="">Select User Type</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Staff">Staff</option>
          </select>
        </div>

        {userType === 'Supervisor' && (
          <div className="form-group">
            <label>Assigned To (Supervisor)</label>
            <select
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              required
            >
              <option value="">Select Supervisor</option>
              {users.filter(user => user.role === 'Supervisor').map(user => (
                <option key={user.id} value={user.id}>{user.name}</option> // Use user ID
              ))}
            </select>
          </div>
        )}

        {userType === 'Staff' && (
          <div className="form-group">
            <label>Assigned To (Staff)</label>
            <select
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              required
            >
              <option value="">Select Staff</option>
              {users.filter(user => user.role === 'Staff').map(user => (
                <option key={user.id} value={user.id}>{user.name}</option> // Use user ID
              ))}
            </select>
          </div>
        )}

        <button type="submit">Assign Task</button>
      </form>
    </div>
  );
}

export default CreateTask;
