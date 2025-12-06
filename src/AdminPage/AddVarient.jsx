import React, { useState } from "react";
import "./AddVarient.css";

export default function AddVariant() {
  const [form, setForm] = useState({
    variantName: "",
    company: "",
    year: "",
    fuelType: "",
    seatCapacity: "",
    rentPerDay: "",
    ac: "",
    image: null,
  });

  const [message, setMessage] = useState("");

  const companies = ["Hyundai", "Kia", "Toyota", "Honda"]; // Example companies

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    for (let key in form) {
      if (!form[key]) {
        setMessage("All fields are required!");
        return;
      }
    }

    // API call can be added here to save variant
    setMessage(`Variant "${form.variantName}" added successfully!`);

    // Clear form
    setForm({
      variantName: "",
      company: "",
      year: "",
      fuelType: "",
      seatCapacity: "",
      rentPerDay: "",
      ac: "",
      image: null,
    });

    // Clear file input manually
    document.getElementById("variantImage").value = "";
  };

  return (
    <div className="add-variant-container">
      <h2>Add Car Variant</h2>

      <form className="add-variant-form" onSubmit={handleSubmit}>

        {/* Variant Name */}
        <label>Variant Name</label>
        <input
          type="text"
          name="variantName"
          placeholder="Enter variant name"
          value={form.variantName}
          onChange={handleChange}
          required
        />

        {/* Company */}
        <label>Company</label>
        <select
          name="company"
          value={form.company}
          onChange={handleChange}
          required
        >
          <option value="">Select Company</option>
          {companies.map((c, idx) => (
            <option key={idx} value={c}>{c}</option>
          ))}
        </select>

        {/* Year */}
        <label>Year</label>
        <input
          type="number"
          name="year"
          placeholder="Enter manufacturing year"
          value={form.year}
          onChange={handleChange}
          required
        />

        {/* Fuel Type */}
        <label>Fuel Type</label>
        <select
          name="fuelType"
          value={form.fuelType}
          onChange={handleChange}
          required
        >
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="CNG">CNG</option>
          <option value="Petrol+CNG">Petrol+CNG</option>
        </select>

        {/* Seat Capacity */}
        <label>Seat Capacity</label>
        <input
          type="number"
          name="seatCapacity"
          placeholder="Enter seat capacity"
          value={form.seatCapacity}
          onChange={handleChange}
          required
        />

        {/* Rent Per Day */}
        <label>Rent per Day</label>
        <input
          type="number"
          name="rentPerDay"
          placeholder="Enter rent per day"
          value={form.rentPerDay}
          onChange={handleChange}
          required
        />

        {/* AC */}
        <label>AC</label>
        <select name="ac" value={form.ac} onChange={handleChange} required>
          <option value="">Select AC Option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* Variant Image */}
        <label>Variant Image</label>
        <input
          type="file"
          name="image"
          id="variantImage"
          accept="image/*"
          onChange={handleChange}
          required
        />

        {/* Message */}
        {message && <p className="form-message">{message}</p>}

        {/* Submit */}
        <button type="submit" className="add-variant-btn">Add Variant</button>
      </form>
    </div>
  );
}
