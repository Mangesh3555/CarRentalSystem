import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone Number" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <textarea placeholder="Address" rows="2"></textarea>

        <button className="login-btn">Register</button>

        <p style={{ marginTop: "12px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#ff8300", cursor: "pointer", fontWeight: "bold",textAlign:"left" }}
            onClick={() => navigate("/")}
          >
            Back to Login
          </span>
        </p>
      </div>
    </div>
  );
}
