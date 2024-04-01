"use client"

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function LoginForm() {

  // State variables to hold username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Here you can perform your authentication logic
    // For simplicity, I'm just checking if both fields are not empty
    if (username == '9561485956' && password == 'Varun@123') {
      // Simulating successful login by setting loggedIn to true
      setLoggedIn(true);
      // You can perform further actions here like redirecting to another page
      console.log('Login successful');
    } else {
      console.log('Please enter both username and password');
    }
  };
  return (
    <div  style={{padding:'2%',margin:'10%',}}>
      {loggedIn ? (
        <Typography variant="body1">You are logged in!</Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>
            Login
          </h1>
          <TextField
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <br/>
          {/* <Button type="submit" variant="contained" color="primary" fullWidth>
            Continue with Google
          </Button> */}
        </form>
      )}
    </div>
  );
}

