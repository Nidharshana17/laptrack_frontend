import React, { useState } from 'react';
import '../App.css'; // Import the CSS for styling

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
            <div className="login-card">
                <h1 className="login-header">Laptop Management System</h1>
                <select
                    className="role-select"
                    onChange={(e) => setRole(e.target.value)}
                    defaultValue=""
                >
                    <option value="" disabled>Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
                </select>
                <button className="login-btn" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
