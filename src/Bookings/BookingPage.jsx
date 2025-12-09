import React, { useState } from "react";
import axios from "axios";

export default function BookingPage({ selectedCar, onClose }) {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    days: "",
    carId: selectedCar.id, // send car ID to backend
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    if (!bookingData.name || !bookingData.email || !bookingData.phone || !bookingData.days) {
      setMessage("All fields are required!");
      return;
    }

    try {
      // Send POST request to your backend booking API
      const response = await axios.post(
        "http://localhost:8081/api/bookings/add",
        bookingData
      );

      if (response.data.success) {
        setMessage("Booking Successful!");
        setTimeout(() => onClose(), 1500); // close popup
      } else {
        setMessage(response.data.message || "Booking failed!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error! Please check your backend or data format.");
    }
  };

  return (
    <form className="booking-box" onSubmit={handleSubmit}>
      {message && <p style={{ color: "yellow" }}>{message}</p>}
      <h2>Book {selectedCar.variantName}</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={bookingData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={bookingData.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="phone"
        placeholder="Phone Number"
        value={bookingData.phone}
        onChange={handleChange}
      />
      <input
        type="number"
        name="days"
        placeholder="Number of Days"
        value={bookingData.days}
        onChange={handleChange}
      />

      <button type="submit" className="confirm-btn">Confirm Booking</button>
      <button type="button" className="back-btn" onClick={onClose}>Back</button>
    </form>
  );
}
