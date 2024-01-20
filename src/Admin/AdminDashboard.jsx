// // Home.js
import React from 'react';
import "../Admin/admin.css"
const Dashboard = () => {
  return (
    <div className="admin-home">
      <h1>Admin Home Page</h1>
      <div className="flex-container">
        <div className="box">
          <h2>Total Earnings</h2>
          <p>$1,000,000</p>
        </div>
        <div className="box">
          <h2>Total Products</h2>
          <p>500</p>
          <i className="fa fa-shopping-cart"></i>
        </div>
        <div className="box">
          <h2>Total Orders</h2>
          <p>100</p>
          <i className="fa fa-shopping-basket"></i>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
