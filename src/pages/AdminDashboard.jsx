import React from 'react';
import Dashboard from '../components/Admin/Dashboard';
import ManageLaptops from '../components/Admin/ManageLaptops';
import AssignLaptops from '../components/Admin/AssignLaptops';

const AdminDashboard = () => {
    return (
        <div className="container">
            <h2 className="my-4">Admin Dashboard</h2>
            <Dashboard />
            <ManageLaptops />
            <AssignLaptops />
        </div>
    );
};

export default AdminDashboard;
