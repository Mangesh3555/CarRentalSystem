import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserProfile.css";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Fetch email stored during login
  const email = localStorage.getItem("userEmail");

  // ------------------------------
  // FETCH USER DETAILS
  // ------------------------------
  useEffect(() => {
    if (!email) {
      setMessage("User not logged in!");
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/users/email/${email}`
        );

        if (response.data) {
          setUser(response.data);
        } else {
          setMessage("User not found!");
        }
      } catch (error) {
        console.error(error);
        setMessage("Error fetching profile!");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [email]);

  // ------------------------------
  // LOGOUT HANDLER
  // ------------------------------
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  // ------------------------------
  // BACK TO HOME HANDLER
  // ------------------------------
  const goBackHome = () => {
    window.location.href = "/home";
  };

  // ------------------------------
  // UI
  // ------------------------------
  if (loading) {
    return <h2>Loading profile...</h2>;
  }

  if (message) {
    return <h2 style={{ color: "red" }}>{message}</h2>;
  }

  return (
    <div className="profile-container">
      <h1>User Profile</h1>

      <div className="profile-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phoneno}</p>
        <p><strong>Address:</strong> {user.address}</p>

        <div className="button-row">
          <button className="home-btn" onClick={goBackHome}>
            ⬅ Back to Home
          </button>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
