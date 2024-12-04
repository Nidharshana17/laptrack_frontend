import React, { useState } from 'react';

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
        <div className="container text-center mt-5">
            <h1>Laptop Management System</h1>
            <select
                className="form-select mt-3"
                onChange={(e) => setRole(e.target.value)}
                defaultValue=""
            >
                <option value="" disabled>Select Role</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
            </select>
            <button className="btn btn-primary mt-3" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default Login;
