///////////////ina's code/////////////////////
// import React, { useState } from 'react';
// import { auth } from '../firebase';
// import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [showPassword, setShowPassword] = useState(false); // Toggle show/hide password
//   const [email, setEmail] = useState(""); // Store email input
//   const [password, setPassword] = useState(""); // Store password input
//   const [passwordReset, setPasswordReset] = useState(false); // Track if password was reset

//   const navigate = useNavigate(); // Hook for navigation

//   // Function to handle user login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Authenticate user with Firebase
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       const userId = user.uid; // Get Firebase user ID

//       alert('✅ User logged in successfully');

//       // Fetch user data from local database (db.json)
//       const response = await fetch(`http://localhost:3000/users/${userId}`);
//       const data = await response.json();
//       const userEmployeeType = data.role; // Get user role from db.json

//       // ✅ If the user has reset their password, ask for a new one and update db.json
//       if (passwordReset) {

//         if (password) {
//           await fetch(`http://localhost:3000/users/${userId}`, {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ ...data, password: password }) // Update password in db.json
//           });

//           alert("✅ Password updated successfully!");
//           setPasswordReset(false); // Reset flag
//         }
//       }

//       // Redirect user based on their role
//       if (userEmployeeType === 'Admin') {
//         navigate('/admin');
//       } else if (userEmployeeType === 'Supervisor') {
//         navigate('/supervisor');
//       } else {
//         navigate('/staff');
//       }

//     } catch (error) {
//       alert("❌ " + error.message); // Show error message if login fails
//     }
//   };

//   // Function to handle password reset
//   const handleForgotPassword = async () => {
//     if (!email) {
//       alert("⚠️ Please enter your email above before clicking 'Forgot Password?'.");
//       return;
//     }

//     try {
//       await sendPasswordResetEmail(auth, email);
//       alert("📩 Password reset email sent. Check your inbox.");
      
//       setPasswordReset(true); // Mark that password was reset

//     } catch (error) {
//       alert("❌ " + error.message); // Show error message if password reset fails
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleLogin}>
//         <h1>Login</h1>
        
//         {/* Email Input */}
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter Email"
//           required
//         />

//         {/* Password Input with Show/Hide Feature */}
//         <label>Password:</label>
//         <div>
//           <input
//             type={showPassword ? "text" : "password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//             required
//           />
//           <span
//             className="toggle-password"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </span>
//         </div>

//         {/* Login Button */}
//         <button type="submit">Login</button>

//         {/* Forgot Password Option */}
//         <p>
//           <span onClick={handleForgotPassword} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
//             Forgot Password?
//           </span>
//         </p>

//         {/* Register Option */}
//         <p>
//           Don't have an account? <span onClick={() => navigate('/register')} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Register</span>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;



//////////changes by me in the code working page code /////////////////////
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false); // Toggle show/hide password
  const [email, setEmail] = useState(""); // Store email input
  const [password, setPassword] = useState(""); // Store password input
  const [passwordReset, setPasswordReset] = useState(false); // Track if password was reset

  const navigate = useNavigate(); // Hook for navigation

  // Function to handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Authenticate user with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userId = user.uid; // Get Firebase user ID

      alert('✅ User logged in successfully');

      // Fetch user data from local database (db.json)
      const response = await fetch(`http://localhost:3000/users?email=${email}`);
      const data = await response.json();

      if (data.length === 0) {
        alert("❌ User not found");
        return;
      }

      const userData = data[0]; // Since email is unique, the data array will have one object
      const userEmployeeType = userData.role; // Get user role from db.json

      // ✅ If the user has reset their password, ask for a new one and update db.json
      if (passwordReset) {
        if (password) {
          await fetch(`http://localhost:3000/users/${userData.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...userData, password: password }) // Update password in db.json
          });

          alert("✅ Password updated successfully!");
          setPasswordReset(false); // Reset flag
        }
      }

      // Redirect user based on their role
      if (userEmployeeType === 'Admin') {
        // Pass user data as state to Admin Dashboard
        navigate('/admin', { state: { userData } });
      } else if (userEmployeeType === 'Supervisor') {
        navigate('/supervisor');
      } else if (userEmployeeType === 'Staff') {
        navigate('/staff');
      }

    } catch (error) {
      alert("❌ " + error.message); // Show error message if login fails
    }
  };

  // Function to handle password reset
  const handleForgotPassword = async () => {
    if (!email) {
      alert("⚠️ Please enter your email above before clicking 'Forgot Password?'.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("📩 Password reset email sent. Check your inbox.");
      setPasswordReset(true); // Mark that password was reset
    } catch (error) {
      alert("❌ " + error.message); // Show error message if password reset fails
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        
        {/* Email Input */}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />

        {/* Password Input with Show/Hide Feature */}
        <label>Password:</label>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {/* Login Button */}
        <button type="submit">Login</button>

        {/* Forgot Password Option */}
        <p>
          <span onClick={handleForgotPassword} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
            Forgot Password?
          </span>
        </p>

        {/* Register Option */}
        <p>
          Don't have an account? <span onClick={() => navigate('/register')} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>Register</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
