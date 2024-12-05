import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const Login = () => {
    const [role, setRole] = useState('');

    const handleLogin = () => {
        if (role === 'admin') {
            window.location.href = '/admin';
        } else if (role === 'employee') {
            window.location.href = '/employee';
        } else {
            alert('Please select a role');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Laptop Management System</h1>
            <select
                className="form-select role-select"
                onChange={(e) => setRole(e.target.value)}
                defaultValue=""
            >
                <option value="" disabled>Select Role</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
            </select>
            <button className="login-button" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default Login;
