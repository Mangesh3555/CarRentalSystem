import React, { useState } from "react";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="admin-main">

      {/* ---------- NAVBAR ---------- */}
      <nav className="admin-navbar">
        <div className="logo-area">
          <img src="/images/carbg5.jpg" alt="Car Logo" />
          <span>Car Rental System</span>
        </div>

        <div className="menu-right">

          {/* Navigation options */}
          <p onClick={() => navigate("/registeradmin")}>Register Admin</p>

          <p onClick={() => navigate("/addvariant")}>Add Variant</p>

          <p onClick={() => navigate("/variant")}>Variants</p>

          <p onClick={() => alert("Bookings page coming soon!")}>Bookings</p>

          <p onClick={() => alert("Customers page coming soon!")}>Customers</p>

          <p className="logout" onClick={() => navigate("/")}>
            Logout
          </p>

        </div>
      </nav>

      {/* -------- HERO SECTION ---------- */}
      <div className="admin-hero-section">
        <div className="admin-content">
          <h2 className="orange-text">WELCOME ADMIN</h2>
          <h1 className="main-title">Manage Your Car Rental System</h1>
          <p className="sub-text">
            Add & Manage Cars, Companies, Variants, Customers, and Bookings Easily
          </p>

          <button className="admin-btn" onClick={() => navigate("/admindashboard")}>
            GO TO DASHBOARD
          </button>
        </div>

        <div className="admin-image">
          <img src="/images/kia (2).png" alt="Car" />
        </div>
      </div>

      {/* -------- CENTERED SEARCH BAR BELOW IMAGE ---------- */}
      <div className="center-search-wrapper">
        <div className="center-search-box">
          <input
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>
      </div>

      {/* -------- DASHBOARD CARDS ---------- */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Cars</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Total Customers</h3>
          <p>85</p>
        </div>

        <div className="card">
          <h3>Total Bookings</h3>
          <p>230</p>
        </div>

        <div className="card">
          <h3>Total Companies</h3>
          <p>15</p>
        </div>
      </div>

    </div>
  );
}
