import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminBookingPage.css";

export default function AdminBookingPage() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:8081/booking/all");
      setBookings(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const approveBooking = async (id) => {
    try {
      await axios.put(`http://localhost:8081/booking/status/${id}?status=APPROVED`);
      setBookings((prev) =>
        prev.map((b) => (b.bookingId === id ? { ...b, status: "APPROVED" } : b))
      );
    } catch (err) {
      console.error(err);
      alert("Failed to approve booking!");
    }
  };

  const rejectBooking = async (id) => {
    if (!window.confirm("Are you sure you want to reject this booking?")) return;

    try {
      await axios.put(`http://localhost:8081/booking/reject/${id}`);
      setBookings((prev) =>
        prev.map((b) => (b.bookingId === id ? { ...b, status: "REJECTED" } : b))
      );
    } catch (err) {
      console.error(err);
      alert("Failed to reject booking!");
    }
  };

  return (
    <div className="admin-booking-container">
      {/* Cross button */}
      <button className="close-cross-btn" onClick={() => navigate("/admindashboard")}>
        ✖
      </button>

      <h2>All Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="table-responsive">
          <table className="admin-booking-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Customer Name</th> {/* Replaced Car ID with Customer Name */}
                <th>Car Variant</th>
                <th>Pickup Date</th>
                <th>Return Date</th>
                <th>Total Days</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.bookingId}>
                  <td>{b.bookingId}</td>
                  <td>{b.user?.name || "N/A"}</td> {/* Display customer name */}
                  <td>{b.carVariant || "N/A"}</td>
                  <td>{b.pickupDate}</td>
                  <td>{b.returnDate}</td>
                  <td>{b.totalDays}</td>
                  <td>₹{b.totalAmount}</td>
                  <td
                    style={{
                      color:
                        b.status === "APPROVED"
                          ? "green"
                          : b.status === "PENDING"
                          ? "orange"
                          : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {b.status || "PENDING"}
                  </td>
                  <td>
                    {b.status === "PENDING" && (
                      <>
                        <button onClick={() => approveBooking(b.bookingId)}>Approve</button>
                        <button onClick={() => rejectBooking(b.bookingId)}>Reject</button>
                      </>
                    )}
                    {(b.status === "APPROVED" || b.status === "REJECTED") && <span>—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
