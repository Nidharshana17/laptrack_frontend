import React from 'react';
import ViewLaptop from '../components/Employee/ViewLaptop';
import RequestLaptop from '../components/Employee/RequestLaptop';
import ReportIssue from '../components/Employee/ReportIssue';
import './App.css'; // Import CSS specific to Employee Portal styling

const EmployeePortal = () => {
    return (
        <div className="employee-portal-container">
            <h2 className="portal-header">Employee Portal</h2>
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
