// import React, { useState } from 'react';
// import { auth } from '../firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// console.log("Auth instance:", auth);

// function SignUp() {

//   const [name, setName] = useState('');
//   const [gender, setGender] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [employeeType, setEmployeeType] = useState('');

//   const navigate = useNavigate();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log('User:', user);

//       const userData = {
//         id: user.uid,
//         name: name,
//         gender: gender,
//         email: email,
//         password: password,
//         role: employeeType,
//         photo: 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=170667a&w=0&k=20&c=LPUo_WZjbXXNnF6ok4uQr8I_Zj6WUVnH_FpREg21qaY=',
//       };

//       await fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData),
//       });
//       alert('User registered successfully');
//       navigate('/login');
//     } catch (error) {
//       alert(error.message);
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={handleSignUp}>
//         <h1>Register</h1>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           required
//         >
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder='Enter email'
//           required
//         />
//         <div className="password-container">
//           <input
//             type={showPassword ? 'text' : 'password'}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder='Enter password'
//             required
//           />
//           <span
//             className="toggle-password"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </span>
//         </div>
//         <select
//           value={employeeType}
//           onChange={(e) => setEmployeeType(e.target.value)}
//           required
//         >
//           <option value="">Select emplyee type</option>
//           <option value="Admin">Admin</option>
//           <option value="Supervisor">Supervisor</option>
//           <option value="Staff">Staff</option>
//         </select>
//         <button type='submit'>Register</button>
//         <p>Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>
//       </form>
//     </div>
//   )
// }

// export default SignUp



//////////////USE MUI/////////////////////
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, TextField, Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';
import { Box } from '@mui/system';
import './Register.css';

function SignUp() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [employeeType, setEmployeeType] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User:', user);

      const userData = {
        id: user.uid,
        name: name,
        gender: gender,
        email: email,
        password: password,
        role: employeeType,
        institute: instituteName,
        photo: 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=170667a&w=0&k=20&c=LPUo_WZjbXXNnF6ok4uQr8I_Zj6WUVnH_FpREg21qaY=',
      };

      await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
      });
      alert('User registered successfully');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url("https://t3.ftcdn.net/jpg/04/78/80/14/360_F_478801437_L6euBIK8dEm10QpPjb6DuehtLSJRSnBg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Apply Opacity throughout the entire page */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(45, 93, 119, 0.6)',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          zIndex: 2,
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 750,
          borderRight: '5px solid #224a62',
          borderBottom: '5px solid #224a62',
          width: '100%',
          textAlign: 'center',
          '& .MuiTextField-root': {
            marginBottom: '16px',
          },
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: '#224a62' }}>
          Register
        </Typography>
        <form onSubmit={handleSignUp}>
          {/* Name Field */}
          <TextField
            label="Enter Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#224a62',
                },
                '&:hover fieldset': {
                  borderColor: '#224a62',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#224a62',
                },
              },
            }}
          />

          {/* Institute Name Field */}
          <TextField
            label="Enter Institute Name"
            variant="outlined"
            fullWidth
            value={instituteName}
            onChange={(e) => setInstituteName(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#224a62',
                },
                '&:hover fieldset': {
                  borderColor: '#224a62',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#224a62',
                },
              },
            }}
          />

          {/* Gender Selection */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Select Gender</InputLabel>
            <Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              label="Select Gender"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#224a62',
                  },
                  '&:hover fieldset': {
                    borderColor: '#224a62',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#224a62',
                  },
                },
              }}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            <FormHelperText>Select gender</FormHelperText>
          </FormControl>

          {/* Email Field */}
          <TextField
            label="Enter Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#224a62',
                },
                '&:hover fieldset': {
                  borderColor: '#224a62',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#224a62',
                },
              },
            }}
          />

          {/* Password Field */}
          <Box sx={{ position: 'relative' }}>
            <TextField
              label="Enter Password"
              variant="outlined"
              fullWidth
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#224a62',
                  },
                  '&:hover fieldset': {
                    borderColor: '#224a62',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#224a62',
                  },
                },
              }}
            />
            <Button
              sx={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                color: '#224a62',
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </Button>
          </Box>

          {/* Employee Type Selection */}
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Select Employee Type</InputLabel>
            <Select
              value={employeeType}
              onChange={(e) => setEmployeeType(e.target.value)}
              label="Select Employee Type"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#224a62',
                  },
                  '&:hover fieldset': {
                    borderColor: '#224a62',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#224a62',
                  },
                },
              }}
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Supervisor">Supervisor</MenuItem>
              <MenuItem value="Staff">Staff</MenuItem>
            </Select>
            <FormHelperText>Select employee type</FormHelperText>
          </FormControl>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#224a62',
              '&:hover': {
                backgroundColor: '#1a3a4f',
              },
              color: 'white',
              marginTop: 2,
            }}
          >
            Register
          </Button>
        </form>

        {/* Login Link */}
        <Typography variant="body2" sx={{ marginTop: 2, color: '#224a62' }}>
          Already have an account? 
          <Button
            onClick={() => navigate('/login')}
            sx={{ textTransform: 'none', color: '#224a62' }}
          >
            Login
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}

export default SignUp;
