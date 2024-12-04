import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const ViewLaptop = () => {
    const [laptopDetails, setLaptopDetails] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);

    // Fetch laptop details when the component mounts
    useEffect(() => {
        const fetchLaptopDetails = async () => {
            try {
                const response = await axios.get('/api/laptop-details'); // Adjust the route as per your backend
                setLaptopDetails(response.data);
                setLoading(false);
            } catch (error) {
                setErrorMessage('Failed to fetch laptop details.');
                setLoading(false);
            }
        };
        fetchLaptopDetails();
    }, []);

    if (loading) {
        return <Alert variant="info">Loading laptop details...</Alert>;
    }

    if (errorMessage) {
        return <Alert variant="danger">{errorMessage}</Alert>;
    }

    return (
        <Card className="p-4">
            <h3>Laptop Details</h3>
            {laptopDetails ? (
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Brand:</strong> {laptopDetails.brand}</ListGroup.Item>
                    <ListGroup.Item><strong>Model:</strong> {laptopDetails.model}</ListGroup.Item>
                    <ListGroup.Item><strong>Serial Number:</strong> {laptopDetails.serialNumber}</ListGroup.Item>
                    <ListGroup.Item><strong>Condition:</strong> {laptopDetails.condition}</ListGroup.Item>
                    <ListGroup.Item><strong>Purchase Date:</strong> {laptopDetails.purchaseDate}</ListGroup.Item>
                </ListGroup>
            ) : (
                <Alert variant="warning">No laptop assigned.</Alert>
            )}
            <Button variant="primary" className="mt-3" href="/report-issue">Report Issue</Button>
        </Card>
    );
};

export default ViewLaptop;
