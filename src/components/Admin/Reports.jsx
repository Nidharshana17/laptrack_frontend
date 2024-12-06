import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Table, Alert } from 'react-bootstrap';

const Reports = () => {
    const [reportData, setReportData] = useState({
        totalLaptops: 0,
        assignedLaptops: 0,
        availableLaptops: 0,
        maintenanceLaptops: 0,
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchReportData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/reports');  // Endpoint to fetch report data
                setReportData(response.data);
            } catch (error) {
                setErrorMessage('Failed to fetch report data.');
            }
        };
        fetchReportData();
    }, []);

    return (
        <Card className="p-4">
            <h3>Laptop Assignment Reports</h3>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Report</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Total Laptops</td>
                        <td>{reportData.totalLaptops}</td>
                    </tr>
                    <tr>
                        <td>Assigned Laptops</td>
                        <td>{reportData.assignedLaptops}</td>
                    </tr>
                    <tr>
                        <td>Available Laptops</td>
                        <td>{reportData.availableLaptops}</td>
                    </tr>
                    <tr>
                        <td>Laptops Under Maintenance</td>
                        <td>{reportData.maintenanceLaptops}</td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    );
};

export default Reports;
