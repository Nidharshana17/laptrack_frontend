import React from 'react';
import ViewLaptop from '../components/Employee/ViewLaptop';
import RequestLaptop from '../components/Employee/RequestLaptop';
import ReportIssue from '../components/Employee/ReportIssue';
import '../App.css'; // Import CSS specific to Employee Portal styling

const EmployeePortal = () => {
    return (
        <div className="employee-portal-container">
            <h2 className="portal-header">Employee Portal</h2>

            <div className="employee-card-container">
                <div className="card green">
                    <h3>Assigned Laptop</h3>
                    <div className="number">Laptop 101</div>
                    <p className="status">Details of your assigned laptop</p>
                </div>
                <div className="card yellow">
                    <h3>Request a New Laptop</h3>
                    <div className="number">Request Pending</div>
                    <p className="status">Request new laptop or see your requests</p>
                </div>
                <div className="card blue">
                    <h3>Report an Issue</h3>
                    <div className="number">No Issues</div>
                    <p className="status">Report issues regarding your laptop</p>
                </div>
            </div>

            <div className="employee-section">
                <ViewLaptop />
            </div>

            <div className="employee-section">
                <RequestLaptop />
            </div>

            <div className="employee-section">
                <ReportIssue />
            </div>
        </div>
    );
};

export default EmployeePortal;
