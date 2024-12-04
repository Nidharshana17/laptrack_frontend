import React, { useState } from 'react';
import { Button, Form, Alert, Card } from 'react-bootstrap';
import axios from 'axios';

const ReportIssue = () => {
    const [issue, setIssue] = useState({
        laptopId: '',
        description: '',
        priority: 'Low',
    });
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/report-issue', issue);
            setMessage('Issue reported successfully!');
            setErrorMessage('');
            setIssue({
                laptopId: '',
                description: '',
                priority: 'Low',
            });
        } catch (error) {
            setErrorMessage('Failed to report the issue.');
        }
    };

    return (
        <Card className="p-4">
            <h3>Report an Issue</h3>
            {message && <Alert variant="success">{message}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Laptop ID</Form.Label>
                    <Form.Control
                        type="text"
                        value={issue.laptopId}
                        onChange={(e) => setIssue({ ...issue, laptopId: e.target.value })}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={issue.description}
                        onChange={(e) => setIssue({ ...issue, description: e.target.value })}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Priority</Form.Label>
                    <Form.Select
                        value={issue.priority}
                        onChange={(e) => setIssue({ ...issue, priority: e.target.value })}
                    >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </Form.Select>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Report Issue
                </Button>
            </Form>
        </Card>
    );
};

export default ReportIssue;
