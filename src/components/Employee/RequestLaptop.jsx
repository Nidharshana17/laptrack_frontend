import React, { useState } from 'react';
import { Button, Form, Alert, Card } from 'react-bootstrap';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const RequestLaptop = () => {
    const [request, setRequest] = useState({
        employeeId: '',
        reason: '',
    });
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}/api/request-laptop`, request);
            setMessage('Laptop request submitted successfully!');
            setErrorMessage('');
            setRequest({
                employeeId: '',
                reason: '',
            });
        } catch (error) {
            setErrorMessage('Failed to submit the laptop request.');
        }
    };

    return (
        <Card className="p-4">
            <h3>Request a New Laptop</h3>
            {message && <Alert variant="success">{message}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Employee ID</Form.Label>
                    <Form.Control
                        type="text"
                        value={request.employeeId}
                        onChange={(e) => setRequest({ ...request, employeeId: e.target.value })}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Reason for Request</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={request.reason}
                        onChange={(e) => setRequest({ ...request, reason: e.target.value })}
                        required
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Submit Request
                </Button>
            </Form>
        </Card>
    );
};

export default RequestLaptop;
