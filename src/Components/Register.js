import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    for (let key in form) {
      if (!form[key]) {
        setMessage("All fields are required!");
        return;
      }
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Save user to localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find((u) => u.email === form.email);

    if (userExists) {
      setMessage("Email already registered!");
      return;
    }

    const newUser = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      password: form.password,
      address: form.address,
    };

    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    setMessage("Account created successfully!");

    // Clear form
    setForm({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      address: "",
    });

    // Optionally redirect to login after 2 seconds
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Address"
            rows="2"
            value={form.address}
            onChange={handleChange}
          ></textarea>

          {message && (
            <p style={{ color: message.includes("successfully") ? "green" : "red", fontWeight: "bold" }}>
              {message}
            </p>
          )}

          <button type="submit" className="login-btn">
            Register
          </button>
        </form>

        <p style={{ marginTop: "12px", textAlign: "left" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#ff8300", cursor: "pointer", fontWeight: "bold" }}
            onClick={() => navigate("/")}
          >
            Back to Login
          </span>
        </p>
      </div>
    </div>
  );
}
