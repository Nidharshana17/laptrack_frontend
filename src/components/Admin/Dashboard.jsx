import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        totalLaptops: 0,
        assignedLaptops: 0,
        availableLaptops: 0,
        maintenanceLaptops: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/laptops`);
                const laptops = response.data;

                const totalLaptops = laptops.length;
                const assignedLaptops = laptops.filter((laptop) => laptop.status === 'assigned').length;
                const availableLaptops = laptops.filter((laptop) => laptop.status === 'available').length;
                const maintenanceLaptops = laptops.filter((laptop) => laptop.status === 'maintenance').length;

                setDashboardData({
                    totalLaptops,
                    assignedLaptops,
                    availableLaptops,
                    maintenanceLaptops,
                });
                setLoading(false);
            } catch (err) {
                setError('Error fetching dashboard data');
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Row>
            <Col md={3}>
                <Card className="bg-primary text-white">
                    <Card.Body>
                        <Card.Title>Total Laptops</Card.Title>
                        <Card.Text>{dashboardData.totalLaptops}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="bg-success text-white">
                    <Card.Body>
                        <Card.Title>Assigned Laptops</Card.Title>
                        <Card.Text>{dashboardData.assignedLaptops}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="bg-warning text-white">
                    <Card.Body>
                        <Card.Title>Available Laptops</Card.Title>
                        <Card.Text>{dashboardData.availableLaptops}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="bg-danger text-white">
                    <Card.Body>
                        <Card.Title>Laptops Under Maintenance</Card.Title>
                        <Card.Text>{dashboardData.maintenanceLaptops}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Dashboard;