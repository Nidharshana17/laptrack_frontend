import React from 'react';
import ViewLaptop from '../components/Employee/ViewLaptop';
import RequestLaptop from '../components/Employee/RequestLaptop';
import ReportIssue from '../components/Employee/ReportIssue';

const EmployeePortal = () => {
    return (
        <div className="container">
            <h2 className="my-4">Employee Portal</h2>
            <ViewLaptop />
            <RequestLaptop />
            <ReportIssue />
        </div>
    );
};

export default EmployeePortal;
