import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [carList, setCarList] = useState([]);  
  const navigate = useNavigate();

  // ---------------- FETCH ALL CARS ----------------
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/cars/all") // ✔ Correct API URL
      .then((res) => {
        if (res.data.success) {
          setCarList(res.data.data); // ✔ FIXED → access "data" inside response
        } else {
          setCarList([]);
        }
      })
      .catch((err) => {
        console.log("Error fetching cars:", err);
      });
  }, []);

  return (
    <div className="admin-main">
      <nav className="admin-navbar">
        <div className="logo-area">
          <img src="/images/carbg5.jpg" alt="Car Logo" />
          <span>Car Rental System</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search Cars here..." />
          <button>Search</button>
        </div>

        <div className="menu-right">
          <p onClick={() => navigate("/registeradmin")}>Register Admin</p>
          <p onClick={() => navigate("/addvariant")}>Add Variant</p>
          <p onClick={() => navigate("/variant")}>Variants</p>
          <p onClick={() => alert("Bookings page coming soon!")}>Bookings</p>
          <p onClick={() => alert("Customers page coming soon!")}>Customers</p>
          <p className="logout" onClick={() => navigate("/")}>Logout</p>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="admin-hero-section">
        <div className="admin-content">
          <h2 className="orange-text">WELCOME ADMIN</h2>
          <h1 className="main-title">Manage Your Car Rental System</h1>
          <p className="sub-text">
            Add & Manage Cars, Variants, Customers, and Bookings Easily
          </p>
        </div>

        <div className="admin-image">
          <img src="/images/kia (2).png" alt="Car" />
        </div>
      </div>

      {/* ALL CARS SECTION */}
      <div className="admin-car-container">
        <h2 className="section-title">Available Car Variants</h2>

        <div className="admin-car-grid">
          {carList.length === 0 ? (
            <p className="no-data">No Cars Added Yet</p>
          ) : (
            carList.map((car) => (
              <div key={car.id} className="admin-car-card">
                <img
                  src={car.image}
                  alt={car.variantName}
                />
                <h3>{car.variantName}</h3>
                <p>{car.company} • {car.year}</p>
                <p>{car.fuelType} • {car.seatCapacity} Seater</p>
                <div className="rent">₹ {car.rentPerDay}/day</div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* DASHBOARD CARDS */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Cars</h3>
          <p>{carList.length}</p>
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
