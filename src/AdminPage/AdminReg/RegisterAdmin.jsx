import React, { useState } from "react";
import "./RegisterAdmin.css";

export default function RegisterAdmin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirmPassword) {
      setMessage("All fields are required!");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // API call can be added here
    setMessage("Admin Registered Successfully!");
  };

  return (
    <div className="register-admin-container">
      <h2>Register Admin</h2>

      <form className="register-admin-form" onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter admin email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        {message && <p className="form-message">{message}</p>}

        <button type="submit" className="register-btn">
          Register Admin
        </button>
      </form>
    </div>
  );
}
