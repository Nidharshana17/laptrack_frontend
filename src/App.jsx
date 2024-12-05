import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeePortal from './pages/EmployeePortal';
import NotFound from './pages/NotFound';
import './App.css'; // Import the global CSS for styling

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employee" element={<EmployeePortal />} />
        <Route path="*" element={<NotFound />} /> {/* Fallback route for NotFound page */}
      </Routes>
    </Router>
  );
};

export default App;
