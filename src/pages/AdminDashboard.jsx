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
            
            <div className="card-container">
                <div className="card green">
                    <h3>Total Laptops</h3>
                    <div className="number">120</div>
                    <p className="status">Total laptops in the system</p>
                </div>
                <div className="card yellow">
                    <h3>Pending Assignments</h3>
                    <div className="number">5</div>
                    <p className="status">Laptops awaiting assignment</p>
                </div>
                <div className="card red">
                    <h3>Laptops Under Maintenance</h3>
                    <div className="number">3</div>
                    <p className="status">Laptops being serviced</p>
                </div>
                <div className="card blue">
                    <h3>Laptops Assigned</h3>
                    <div className="number">110</div>
                    <p className="status">Laptops successfully assigned</p>
                </div>
            </div>

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
