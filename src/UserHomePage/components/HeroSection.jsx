import React, { useEffect, useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [cars, setCars] = useState([]);

  // Fetch all car variants from backend
  useEffect(() => {
    fetch("http://localhost:8081/api/cars/all")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCars(data.data);
        } else {
          setCars([]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <h2>BOOK A CAR NOW</h2>
          <h1>The Amazing Ride</h1>
          <p>
            Ride New Models Car,<br />
            Starting at just ₹1499/-
          </p>
          <div className="take-ride">TAKE A RIDE NOW...</div>
        </div>

        <div className="hero-right">
          <img src="/images/kia (2).png" alt="car" />
        </div>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2 className="why-title">Why Choose Our Service?</h2>
        <div className="why-cards">
          <div className="card">
            <h3>🚗 Wide Range of Cars</h3>
            <p>Choose from SUVs, Sedans, Hatchbacks & Luxury Cars.</p>
          </div>

          <div className="card">
            <h3>💰 Affordable Pricing</h3>
            <p>Enjoy premium cars at the most pocket-friendly rates.</p>
          </div>

          <div className="card">
            <h3>🕒 24/7 Customer Support</h3>
            <p>We are available anytime to assist you during your ride.</p>
          </div>
        </div>
      </div>

      {/* AVAILABLE CARS SECTION */}
      <div className="user-car-section">
        <h2 className="section-title">Available Car Variants</h2>

        <div className="user-car-grid">
          {cars.length === 0 ? (
            <p className="no-data">No Cars Available Yet</p>
          ) : (
            cars.map((car) => (
              <div key={car.id} className="user-car-card">
                <img src={car.image} alt={car.variantName} />
                <h3>{car.variantName}</h3>
                <p>{car.company} • {car.year}</p>
                <p>{car.fuelType} • {car.seatCapacity} Seater</p>
                <div className="rent">₹ {car.rentPerDay}/day</div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
