import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Import CSS for styling

const NotFound = () => {
    return (
        <div className="notfound-container">
            <h1 className="notfound-title">404</h1>
            <h2 className="notfound-message">Oops! Page Not Found</h2>
            <p className="notfound-description">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="notfound-link">
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
