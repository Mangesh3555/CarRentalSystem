import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.jpg" alt="logo" />
        <h2>Car Rental System</h2>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Cars here..." />
        <button>Search</button>
      </div>
      <div className="links">
        <a href="#">My Bookings</a>
        {/* 👇 UPDATED: navigate to UserProfile page */}
        <a onClick={() => navigate("/profile")}>My Profile</a>
        <a className="logout" onClick={() => navigate("/")}>Logout</a>
      </div>
    </div>
  );
}
