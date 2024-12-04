import React from 'react';

const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="card text-white bg-primary mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Total Laptops</h5>
                        <p className="card-text">100</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card text-white bg-success mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Assigned Laptops</h5>
                        <p className="card-text">70</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card text-white bg-warning mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Available Laptops</h5>
                        <p className="card-text">20</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card text-white bg-danger mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Laptops Under Maintenance</h5>
                        <p className="card-text">10</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
