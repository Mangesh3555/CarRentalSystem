import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero({ activeForm, setActiveForm }) {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="content-left">
        <h1>Rent Your</h1>
        <h1 className="highlight">Dream Car</h1>
        <p>Live the life of Luxury.</p>
        <p>Just rent a car of your wish from our vast collection.</p>
        <p>Enjoy every moment with your family</p>
        <p>Join us to make this family vast.</p>
        <button className="join-btn">JOIN US</button>
      </div>

      <div className="login-box">
        {activeForm === "user" && (
          <>
            <h2>User Login</h2>
            <input type="email" placeholder="Enter Email Here" />
            <input type="password" placeholder="Enter Password Here" />
            <button className="login-btn">Login</button>

            <p>
              Don’t have an account?{" "}
              <span className="signup" onClick={() => navigate("/register")}>
                Sign up
              </span>
            </p>
          </>
        )}

        {activeForm === "admin" && (
          <>
            <h2>Admin Login</h2>
            <input type="email" placeholder="Enter Admin Email" />
            <input type="password" placeholder="Enter Admin Password" />
            <button className="login-btn">Login</button>
          </>
        )}
      </div>
    </div>
  );
}
