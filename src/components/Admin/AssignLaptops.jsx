import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Card, InputGroup, FormControl, Alert } from 'react-bootstrap';

const AssignLaptops = () => {
    // State for employees, laptops, and assignment status
    const [employees, setEmployees] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [selectedLaptop, setSelectedLaptop] = useState('');
    const [assignmentMessage, setAssignmentMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Fetch employees and laptops on component mount
    useEffect(() => {
        const fetchEmployeesAndLaptops = async () => {
            try {
                const employeeRes = await axios.get('http://localhost:5000http://localhost:5000/api/employees');  // Adjust the API endpoint
                const laptopRes = await axios.get('http://localhost:5000/api/laptops?status=available'); // Get available laptops
                setEmployees(employeeRes.data);
                setLaptops(laptopRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setErrorMessage('Error fetching data.');
            }
        };
        fetchEmployeesAndLaptops();
    }, []);

    // Handle laptop assignment
    const handleAssignLaptop = async () => {
        if (!selectedEmployee || !selectedLaptop) {
            setErrorMessage('Please select both an employee and a laptop.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/assign-laptop', {
                employeeId: selectedEmployee,
                laptopId: selectedLaptop,
            });
            setAssignmentMessage('Laptop assigned successfully!');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Failed to assign laptop. Please try again.');
        }
    };

    return (
        <Card className="p-4">
            <h3>Assign Laptop to Employee</h3>
            {assignmentMessage && <Alert variant="success">{assignmentMessage}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Employee</Form.Label>
                    <InputGroup>
                        <FormControl
                            as="select"
                            value={selectedEmployee}
                            onChange={(e) => setSelectedEmployee(e.target.value)}
                        >
                            <option value="">Select Employee</option>
                            {employees.map((employee) => (
                                <option key={employee._id} value={employee._id}>
                                    {employee.name} ({employee.email})
                                </option>
                            ))}
                        </FormControl>
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Laptop</Form.Label>
                    <InputGroup>
                        <FormControl
                            as="select"
                            value={selectedLaptop}
                            onChange={(e) => setSelectedLaptop(e.target.value)}
                        >
                            <option value="">Select Laptop</option>
                            {laptops.map((laptop) => (
                                <option key={laptop._id} value={laptop._id}>
                                    {laptop.brand} {laptop.model} (Serial: {laptop.serialNumber})
                                </option>
                            ))}
                        </FormControl>
                    </InputGroup>
                </Form.Group>

                <Button variant="primary" onClick={handleAssignLaptop}>
                    Assign Laptop
                </Button>
            </Form>
        </Card>
    );
};

export default AssignLaptops;
