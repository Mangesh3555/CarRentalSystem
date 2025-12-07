import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
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
          <div className="ride-btn">TAKE A RIDE NOW...</div>
        </div>

        <div className="hero-right">
          <img src="/image.png" alt="car" />
        </div>
      </div>
    </>
  );
}
