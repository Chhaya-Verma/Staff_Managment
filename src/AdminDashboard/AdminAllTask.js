// import React, { useState, useEffect } from 'react';
// import './AdminAllTask.css'; // Add styles as per your design

// function AdminAllTask() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     // Fetch all tasks from the backend (db.json or API)
//     fetch('http://localhost:3000/tasks')
//       .then(response => response.json())
//       .then(data => {
//         setTasks(data);
//       })
//       .catch(error => console.error('Error fetching tasks:', error));
//   }, []);

//   return (
//     <div className="admin-all-tasks">
//       <h1>All Tasks</h1>
      
//       {tasks.length === 0 ? (
//         <p>No tasks assigned yet.</p>
//       ) : (
//         <table className="tasks-table">
//           <thead>
//             <tr>
//               <th>Task Title</th>
//               <th>Description</th>
//               <th>Due Date</th>
//               <th>Assigned To</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <tr key={task.id}>
//                 <td>{task.title}</td>
//                 <td>{task.description}</td>
//                 <td>{task.dueDate}</td>
//                 <td>{task.assignedTo}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default AdminAllTask;



/////////////////add edit, delete btns/////////////////////
import React, { useState, useEffect } from 'react';
import './AdminAllTask.css'; // Add styles as per your design

function AdminAllTask() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);  // To store filtered tasks
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);  // Track which task is being edited

  // Fetch tasks from the backend (db.json or API)
  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then(data => {
        setTasks(data);
        setFilteredTasks(data);  // Initially, all tasks are shown
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  // Handle task filter based on search term
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter tasks based on task title or assignedTo field
    if (value) {
      const filtered = tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(value.toLowerCase()) ||
          task.assignedTo.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);  // If search term is empty, show all tasks
    }
  };

  // Handle task deletion
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));  // Remove task from state
        setFilteredTasks(filteredTasks.filter((task) => task.id !== id));  // Remove task from filtered list
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  // Handle task editing (show current task in input fields)
  const handleEdit = (task) => {
    setIsEditing(true);
    setTaskToEdit(task);  // Set the task to edit
  };

  // Handle task update
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...taskToEdit,
      title: taskToEdit.title,
      description: taskToEdit.description,
      dueDate: taskToEdit.dueDate,
      assignedTo: taskToEdit.assignedTo,
    };

    fetch(`http://localhost:3000/tasks/${taskToEdit.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(tasks.map((task) => (task.id === data.id ? data : task)));
        setFilteredTasks(filteredTasks.map((task) => (task.id === data.id ? data : task)));
        setIsEditing(false);  // Exit edit mode
      })
      .catch((error) => console.error('Error updating task:', error));
  };

  // Handle input changes for editing
  const handleInputChange = (e) => {
    setTaskToEdit({
      ...taskToEdit,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="admin-all-tasks">
      <h1>All Tasks</h1>

      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      {tasks.length === 0 ? (
        <p>No tasks assigned yet.</p>
      ) : (
        <table className="tasks-table">
          <thead>
            <tr>
              <th>Task Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
                <td>{task.assignedTo}</td>
                <td>
                  <button onClick={() => handleEdit(task)}>Edit</button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Edit Task Modal */}
      {isEditing && (
        <div className="edit-task-modal">
          <h2>Edit Task</h2>
          <form onSubmit={handleUpdate}>
            <div>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={taskToEdit.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                name="description"
                value={taskToEdit.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={taskToEdit.dueDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Assigned To</label>
              <input
                type="text"
                name="assignedTo"
                value={taskToEdit.assignedTo}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Update Task</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminAllTask;
