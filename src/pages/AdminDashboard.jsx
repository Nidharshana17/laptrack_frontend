import React from 'react';
import Dashboard from '../components/Admin/Dashboard';
import ManageLaptops from '../components/Admin/ManageLaptops';
import AssignLaptops from '../components/Admin/AssignLaptops';
import '../App.css'; // Import CSS for styling

const AdminDashboard = () => {
    console.log('Rendering AdminDashboard'); // Log to ensure the component is rendering
    return (
        <div className="admin-dashboard-container">
            <h2 className="dashboard-header">Admin Dashboard</h2>
            <div className="admin-section">
                <Dashboard />
            </div>
            <div className="admin-section">
                <ManageLaptops />
            </div>
            <div className="admin-section">
                <AssignLaptops />
            </div>
        </div>
    );
};

export default AdminDashboard;
