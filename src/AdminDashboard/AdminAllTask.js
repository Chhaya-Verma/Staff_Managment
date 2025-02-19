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
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'; // Import icons

function AdminAllTask() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then(data => {
        setTasks(data);
        setFilteredTasks(data);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterTasks(value, roleFilter);
  };

  const handleRoleFilter = (e) => {
    const value = e.target.value;
    setRoleFilter(value);
    filterTasks(searchTerm, value);
  };

  const filterTasks = (searchTerm, roleFilter) => {
    let filtered = tasks;

    if (searchTerm) {
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (roleFilter) {
      filtered = filtered.filter((task) => task.role.toLowerCase().includes(roleFilter.toLowerCase()));
    }

    setFilteredTasks(filtered);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
        setFilteredTasks(filteredTasks.filter((task) => task.id !== id));
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  const handleEdit = (task) => {
    setIsEditing(true);
    setTaskToEdit(task);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTask = {
      ...taskToEdit,
      title: taskToEdit.title,
      description: taskToEdit.description,
      dueDate: taskToEdit.dueDate,
      assignedTo: taskToEdit.assignedTo,
      role: taskToEdit.role,
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
        setIsEditing(false);
      })
      .catch((error) => console.error('Error updating task:', error));
  };

  const handleInputChange = (e) => {
    setTaskToEdit({
      ...taskToEdit,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="admin-all-tasks">
      <Navbar />
      <Sidebar />
      <h1>All Tasks</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      {/* Role filter */}
      <select value={roleFilter} onChange={handleRoleFilter} className="role-filter">
        <option value="">Filter by Role</option>
        <option value="Admin">Admin</option>
        <option value="Supervisor">Supervisor</option>
        <option value="Staff">Staff</option>
      </select>

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
              <th>Role</th>
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
                <td>{task.role}</td>
                <td>
                  {/* Use icons instead of buttons */}
                  <AiOutlineEdit onClick={() => handleEdit(task)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                  <AiOutlineDelete onClick={() => handleDelete(task.id)} style={{ cursor: 'pointer' }} />
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
            <div>
              <label>Role</label>
              <input
                type="text"
                name="role"
                value={taskToEdit.role}
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
