import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Card, Table, Alert } from 'react-bootstrap';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ManageLaptops = () => {
    const [laptops, setLaptops] = useState([]);
    const [newLaptop, setNewLaptop] = useState({
        brand: '',
        model: '',
        serialNumber: '',
        purchaseDate: '',
    });
    const [editLaptop, setEditLaptop] = useState(null);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchLaptops = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/laptops`);
                setLaptops(response.data);
            } catch (error) {
                setErrorMessage('Failed to fetch laptops.');
            }
        };
        fetchLaptops();
    }, []);

    const handleAddLaptop = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/laptops`, newLaptop);
            setLaptops([...laptops, response.data]);
            setNewLaptop({ brand: '', model: '', serialNumber: '', purchaseDate: '' });
            setMessage('Laptop added successfully!');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Failed to add laptop.');
        }
    };

    const handleDeleteLaptop = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/api/laptops/${id}`);
            setLaptops(laptops.filter(laptop => laptop._id !== id));
            setMessage('Laptop deleted successfully!');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Failed to delete laptop.');
        }
    };

    const handleEditLaptop = (laptop) => {
        setEditLaptop(laptop);
        setNewLaptop({ ...laptop });
    };

    const handleUpdateLaptop = async () => {
        try {
            const response = await axios.put(`${API_BASE_URL}/api/laptops/${editLaptop._id}`, newLaptop);
            setLaptops(laptops.map(laptop => laptop._id === editLaptop._id ? response.data : laptop));
            setEditLaptop(null);
            setMessage('Laptop updated successfully!');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Failed to update laptop.');
        }
    };

    return (
        <Card className="p-4">
            <h3>Manage Laptops</h3>
            {message && <Alert variant="success">{message}</Alert>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form>
                <h5>Add New Laptop</h5>
                <Form.Group className="mb-3">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                        type="text"
                        value={newLaptop.brand}
                        onChange={(e) => setNewLaptop({ ...newLaptop, brand: e.target.value })}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                        type="text"
                        value={newLaptop.model}
                        onChange={(e) => setNewLaptop({ ...newLaptop, model: e.target.value })}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Serial Number</Form.Label>
                    <Form.Control
                        type="text"
                        value={newLaptop.serialNumber}
                        onChange={(e) => setNewLaptop({ ...newLaptop, serialNumber: e.target.value })}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Purchase Date</Form.Label>
                    <Form.Control
                        type="date"
                        value={newLaptop.purchaseDate}
                        onChange={(e) => setNewLaptop({ ...newLaptop, purchaseDate: e.target.value })}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleAddLaptop}>
                    Add Laptop
                </Button>
            </Form>

            <h5 className="mt-4">Existing Laptops</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Serial Number</th>
                        <th>Purchase Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {laptops.map((laptop) => (
                        <tr key={laptop._id}>
                            <td>{laptop.brand}</td>
                            <td>{laptop.model}</td>
                            <td>{laptop.serialNumber}</td>
                            <td>{new Date(laptop.purchaseDate).toLocaleDateString()}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEditLaptop(laptop)}>
                                    Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    className="ms-2"
                                    onClick={() => handleDeleteLaptop(laptop._id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {editLaptop && (
                <div className="mt-4">
                    <h5>Edit Laptop</h5>
                    <Form.Group className="mb-3">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                            type="text"
                            value={newLaptop.brand}
                            onChange={(e) => setNewLaptop({ ...newLaptop, brand: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Model</Form.Label>
                        <Form.Control
                            type="text"
                            value={newLaptop.model}
                            onChange={(e) => setNewLaptop({ ...newLaptop, model: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Serial Number</Form.Label>
                        <Form.Control
                            type="text"
                            value={newLaptop.serialNumber}
                            onChange={(e) => setNewLaptop({ ...newLaptop, serialNumber: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Purchase Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={newLaptop.purchaseDate}
                            onChange={(e) => setNewLaptop({ ...newLaptop, purchaseDate: e.target.value })}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleUpdateLaptop}>
                        Update Laptop
                    </Button>
                </div>
            )}
        </Card>
    );
};

export default ManageLaptops;
