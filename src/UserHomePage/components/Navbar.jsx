import React from "react";
import "./Navbar.css";


export default function Navbar() {
return (
<div className="navbar">
<div className="logo">
<img src="/logo.jpg" alt="logo" />
<h2>Car Rental System</h2>
</div>
<div className="links">
<a href="#">My Bookings</a>
<a href="#">My Profile</a>
<a className="logout">Logout</a>
</div>
</div>
);
}