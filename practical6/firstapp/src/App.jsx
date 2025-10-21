// src/App.js

import React, { useState } from 'react';
import './App.css'; // Assuming you use the default styling file

function RegistrationForm() {
  // Use state to manage form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
    alert(`User ${formData.username} registered successfully!`);
    // Here you would typically send data to a server
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Registration</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '300px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#333' }}>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" style={{ padding: '10px', backgroundColor: '#61dafb', color: '#282c34', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Register
          </button>
        </form>
      </header>
    </div>
  );
}

export default RegistrationForm;